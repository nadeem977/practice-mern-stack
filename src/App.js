import React,{useEffect, useState} from "react";
import { Routes, Route,useNavigate  } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NewProjects from "./pages/NewProjects";
import SideBars from "./components/SideBars";
import Register from "./pages/Register";
import Confirmation from "./pages/Confirmation";
import ForgetPassword from "./pages/ForgetPassword";
import Login from "./pages/Login";
import Verification from "./pages/Verification";
import CreateNewPassword from "./pages/CreateNewPassword";




function App() {


const[newProjec , setNewProject] = useState([])
const navigate = useNavigate();

useEffect(() => {
  const tokenString = localStorage.getItem('token');
  const token = JSON.parse(tokenString);
  if (!token) {
    navigate("/Login");
  }
}, [navigate]);
const CreateNewProject = () => {
    setNewProject((prevIds) => [...prevIds, newProjec.length + 1])
};
const removeResponseBlock = (idToRemove) => {
  setNewProject((prevIds) => prevIds.filter((id) => id !== idToRemove))
};
const components = newProjec.map((id) => (
  <Route path={`/project${id}`} element={<NewProjects  id={id} key={id}/>} key={id} />
));
 

  return (
    <>
    <div className="App">
        <div className="mian_Components">
          <SideBars func={CreateNewProject} project={newProjec} remove={removeResponseBlock}/>
          <main>
            <Routes>
              <Route path="/" element={<Home func={CreateNewProject} id={newProjec}/>} />
               {components && components}
              <Route path="/Register" element={<Register />} />
              <Route path="/Confirmation" element={<Confirmation />} />
              <Route path="/ForgetPassword" element={<ForgetPassword />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Verification" element={<Verification />} />
              <Route path="/CreateNewPassword" element={<CreateNewPassword />} />
            </Routes>
          </main>
        </div>
    </div>
    
    </>
  );
}

export default App;
