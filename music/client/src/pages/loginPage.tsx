import'./login.css'
 
 import { useState,ChangeEvent ,FormEvent} from 'react';
import logo from '../img/piano.jpeg'
import { NavLink } from 'react-router-dom';
 
 
 
function Login(){
const [formState,setFormState]=useState({email:'',password:''})

const handleInputChange=(e:ChangeEvent<HTMLInputElement>)=>{
const {name,value}=e.target;
setFormState({...formState,[name]:value})
}

const handleSumbit=(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
}
  
 return (
   <body className="text-center" data-new-gr-c-s-check-loaded="14.1168.0">
     <form
       className="form-signin"
       style={{ alignItems: "center" }}
       onSubmit={handleSumbit}
     >
       <img className="mb-4 mt-5" src={logo} alt="" width="100" height="100" />
       <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

       <input
         type="text"
         id="inputEmail"
         className="form-control"
         placeholder="Email address"
         required
         style={{ width: "250px", marginLeft: "40%" }}
         onChange={handleInputChange}
       />

       <input
         type="password"
         id="inputPassword"
         className="form-control"
         placeholder="Password"
         required
         style={{ width: "250px", marginLeft: "40%", marginTop: "1%" }}
         onChange={handleInputChange}
       />
       <div className="checkbox mb-3"></div>
       <NavLink to="/home">
         <button className="btn btn-lg btn-primary btn-block" type="submit">sign In
         </button>
       </NavLink>
     </form>
   </body>
 );
}


export default Login

