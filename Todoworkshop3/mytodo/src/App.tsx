import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Todo from './types/todo';

import { useEffect, useState } from 'react';
import './App.css'


function App() {
const[todo,setTodo]=useState<Todo[]>([]);

const addNewToDo=(newTodo:Todo)=>{
setTodo([...todo,newTodo])
}
const updateTodo=(id:string)=>{
 
 const newTodos= todo.map(todo=>{

    if(todo.id===id){
      return( {...todo,done:!todo.done});
      
    }else {
      return todo;
    }
  })
setTodo(newTodos);

}
const deleteTodoById=(id:string)=>{
  setTodo(todo.filter(todo=>todo.id !==id))
}

useEffect(()=>{
  async function getTodos(){
    const response = await fetch("http://localhost:9000/todos");
    const data=await response.json()
    setTodo(data)
    }
getTodos();
},[]);

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header onAddNewTodo={addNewToDo} />

        <List todos={todo} onUpdateTodo={updateTodo} onDeleteTodoById={deleteTodoById} />
        <Footer todos={todo} />
      </div>
    </div>
  );
}

export default App;
