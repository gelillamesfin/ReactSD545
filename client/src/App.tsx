 
import "./App.css";
import routes from "./routes/routes";
 //import Login from "./pages/loginPage";
import { useRoutes } from "react-router-dom";
// import HomePage from "./pages/navBar";
 

function App() {
const element=useRoutes(routes)
  return (
    <div>
    {element}
    </div>
  );
}

export default App;
