
import { ChangeEvent } from 'react';

import './index.css'
type Props = {
  id: string;
  name: string;
  done: boolean;
  onUpdateTodo: (id: string, done: boolean) => void;
  onDeleteTodoById:(id:string)=>void;
};


export default function Item(props:Props) {
  const { id, name, done, onDeleteTodoById,onUpdateTodo } = props;


  const onChangeCheckbox=(e:ChangeEvent<HTMLInputElement>)=>{
    onUpdateTodo(id, done);
  }
  const onDeleteItem=()=>{
    if(window.confirm('Are you sure you want to remove the task?')){
      onDeleteTodoById(id);
    }
  }
  return (
    <li>
      <label>
        <input type="checkbox" checked={done} onChange={onChangeCheckbox} />
        <span>{name}</span>
     </label>
      <button className="btn btn-danger" onClick={onDeleteItem} >
        Delete
      </button>
    </li>
  );
}