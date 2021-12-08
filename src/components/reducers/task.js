const initialState ={

    task: "",
    isDel:false
   }
   
   
   const Tasks = (state = initialState ,action)=>{
       const {type,payload}= action;
       switch(type){
        case "READ":
            
            return {task,isDel}
        case "CREATE":
            
            return {task,isDel:false}
       case "UPDATE":
        const {task,isDel}= payload;
         return {task,isDel}
     
         case "DELETE":
       
         return {task,isDel:true}
     
        default: 
        return state;
   
       }
   }
   
   export default Tasks;
   
   export const readTask =(data)=>{
       return{
           type:"READ",
           payload:data
       }
   };
   
  
   
   export const createTask =(data)=>{
       return{
           type:"CREATE",
           payload:data
       }
   };
   export const updateTask =(data)=>{
    return{
        type:"UPDATE",
        payload:data
    }
};

export const deleteTask =(data)=>{
    return{
        type:"DELETE",
        payload:data
    }
};