const initialState ={

    task: [],
    
   }
   
   
   const Taskss = (state = initialState ,action)=>{
       const {type,payload}= action;
       switch(type){
        case "READ":
            
            return {task}
        case "CREATE":
            // const {task}= payload;
            return {task}
       case "UPDATE":
        const {task}= payload;
         return {task}
     
         case "DELETE":
       
         return {task}
     
        default: 
        return state;
   
       }
   }
   
   export default Taskss;
   
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