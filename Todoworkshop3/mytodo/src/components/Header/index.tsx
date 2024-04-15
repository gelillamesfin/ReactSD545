import {KeyboardEvent} from 'react';
import { nanoid } from 'nanoid';

import './index.css';
import Todo from '../../types/todo';

 type Props ={
  onAddNewTodo:(todo:Todo)=>void;
}



export default function Header(props:Props) {
const {onAddNewTodo}=props

 const addTask=(e:KeyboardEvent<HTMLInputElement>)=>{

 const value=e.currentTarget.value;

 if(value.trim()){
 if(e.key==='Enter'){
   onAddNewTodo({
  id:nanoid(),
  name:value,
  done:false
});
  
e.currentTarget.value='';
e.currentTarget.focus();
  }
 }else {
     alert('Task must not be empty')
 }
 }
  return (
    <div className="todo-header">
      <input type="text" placeholder="Enter your todo here" onKeyUp={addTask}/>
     
    </div>
  )
}