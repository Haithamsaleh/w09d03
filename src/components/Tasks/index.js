import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/signin";
import Taskss, { createTask, readTask } from "../../reducers/task";

const BASE_URL = process.env.REACT_APP_BASE_URL;
export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const [local, setLocal] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return {
      signin: state.Signin,
      tasks: state.Tasks,
    };
  });
  console.log(state);
  useEffect(() => {
    getTask();
  }, []);
  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setLocal(getToken);
    getTask();
  }, []);

  const getTask = async () => {
    const result = await axios.get(`${BASE_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${local}`,
      },
    });
    dispatch(readTask({ task: result.data }));
    setTasks(result.data);
  };

  const addTask = async () => {
    await axios.post(
      `${BASE_URL}/todo`,
      {
        task: task,
      },
      {
        headers: {
          Authorization: `Bearer ${local}`,
        },
      }
    );
    dispatch(createTask({ task }));
    getTask(local);
  };

  const updateTask = async (id) => {
    await axios.put(
      `${BASE_URL}/todo/${id}`,
      {
        task: task,
      },
      {
        headers: {
          Authorization: `Bearer ${local}`,
        },
      }
    );
    getTask(local);
  };

  const deleteTask = async (id) => {
    await axios.delete(`${BASE_URL}/delete/${id}`, {
      headers: {
        Authorization: `Bearer ${local}`,
      },
    });
    getTask(local);
  };

  const logOut = () => {
    dispatch(logout({ user: null, token: "" }));
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div >
      <div>
        <input
          
          onChange={(e) => setTask(e.target.value)}
          placeholder="new Task"
        />
        <button  onClick={addTask}>
          Add
        </button>
      </div>

      {tasks.map((item, i) => (
        <ul>
          <li key={i}>{item.task}</li>
          <div>
            <input
              className="editInput"
              onChange={(e) => setTask(e.target.value)}
              placeholder="Edit Task"
            />
            <button className="edit" onClick={() => updateTask(item._id)}>
              Edit
            </button>
            <br />
            <button className="delete" onClick={() => deleteTask(item._id)}>
              Delete
            </button>
          </div>
        </ul>
      ))}
      <button id="btnLogout" onClick={logOut}>
        logout
      </button>
    </div>
  );
};
