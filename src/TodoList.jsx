import {useState} from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoList.css";
export default function TodoList(){
  let [todos,setTodos]=useState([{task :"eat",id:uuidv4(),isDone:false}]);
  let [newTodo,setnewTodo]=useState("")
  let addNewTask =()=>{
  //  console.log ("we have to add new task in todo");
  //setTodos([...todos,{task:newTodo,id:uuidv4()}]);
  setTodos((prevTodos)=>{
    return[...prevTodos,{task:newTodo, id:uuidv4(),isDone:false}]
  });
  setnewTodo("");
  };
  let updateTodoValue=(event)=>{
    setnewTodo(event.target.value);// value ka access krenge jo input me hai ye return karega jo hum placeholder me likhenge
  };
  let deleteTodo=(id)=>{
   setTodos((prevTodos)=> todos.filter((prevTodo)=>prevTodo.id!=id));
  }
  let markAllDone =()=>{
  setTodos((prevTodo) =>(prevTodo.map((todo)=>{
      return{
        ...todo,
      isDone:true,
      }
  })
  ))
  }
  let markAsDone =(id)=>{
    setTodos((prevTodo) =>(prevTodo.map((todo)=>{
      if(todo.id==id){
      return{
        ...todo,
       isDone:true,
      }
    }
    else{
      return todo;
    }
  })
  ))
  }
  return(
    <div className="TodoList">
      <h1>TODO </h1>
     <input placeholder="add a task" value ={newTodo} onChange={updateTodoValue} id="input"></input>
     <br></br><br>
     </br>
     <button onClick ={addNewTask} id="button1">Add Task</button>
     <br></br>
     <br></br>
     <br></br>
     <hr style={{border:"3px solid rgb(181, 118, 118)"}}></hr>
     <h2 >Task Todo</h2>
     <ul>
      {todos.map ((todo)=>(
          <li key={todo.id}>
            <span style= {todo.isDone? {textDecorationLine:"Line-through"}:{}}>{todo.task}</span>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>deleteTodo(todo.id)}id="button2">delete</button>
            &nbsp; &nbsp;
            <button onClick={()=>markAsDone(todo.id)} id="button3">mark as Done</button>
            </li>
            
        ))}
     </ul>
     <br></br>
     <button id="button" onClick={markAllDone} className="button4">markAllDone</button>
    </div>
  )
}
//todos naam ka array fir is array ke items ko list ke form me show krenge. 
//array ke har element ko render krane ke liye we use map 
// 2 state variable ko change krna hai 1> newTodo (input se ) 2>todos (add ko dabane se)
//unique key (uuid) 
//ab simple string ("sample task") ke jagha ek array of object to ab map kaam nahi karega
//arrow function copy create krta hai like in deleteTodo(todo.id)
//to delete from array react we use (filter )method jaise array se kuch render krana hota hai in form list then we use (map) 
    