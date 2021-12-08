const initialState ={

 user: null,
 token:""
}


const Signin = (state = initialState ,action)=>{
    const {type,payload}= action;
    switch(type){
     case "LOGIN":
         const {user,token}= payload;
         localStorage.setItem("token",token)
         return {user,token}
     case "LOGOUT":
         localStorage.clear();
         return {user:null,token:""}
     default: 
     return state;

    }
}

export default Signin;

export const login =(data)=>{
    return{
        type:"LOGIN",
        payload:data
    }
};



export const logout =(data)=>{
    return{
        type:"LOGOUT",
        payload:data
    }
};