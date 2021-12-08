import React,{useEffect,useState} from "react";
import axios from "axios";
import { useNavigate , Link} from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import { Tasks } from "../Tasks";
import { login } from "../../reducers/signin";




const BASE_URL = process.env.REACT_APP_BASE_URL
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [local,setLocal] =useState('')
  const navigate = useNavigate();


const state = useSelector((state)=>{
  return {
    signin : state.Signin,
    tasks: state.Tasks
  }
})

const dispatch = useDispatch();

console.log(state);
  useEffect(() => {
     
const token = localStorage.getItem("token");

setLocal(token)

  }, [])

  const signin = async()=>{
    const result = await axios.post(`${BASE_URL}/login`,{
       username,
       password,
    
    });
    const data = {
      user: result.data.result,
      token: result.data.token,
    };

    dispatch(signin(data));
    
    
    localStorage.setItem("token", result.data.token);

     navigate('/tasks')
}

  return (
    <div>
        {!local ? (
            <div>
      <h1>Login</h1>
      <input
        type="username"
        name="username"
        placeholder="username"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br/>
      <input
        type="password"
        name="password"
        placeholder=" Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
            <br/>

      <button onClick={signin}>Login</button>
      <br/>

      </div>
      ):(
          <h3><Link to="/tasks">your Tasks</Link></h3>
      )}
    </div>
  );
};
