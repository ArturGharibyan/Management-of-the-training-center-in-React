import AddGroup from "../Coneiner/AddGroup"
import Addstudent from "../Coneiner/Addstudent"
import Home from "../Coneiner/Home"
import Group from "../Coneiner/Group"
import Menu from "./Menu";
import SubMenu from "./SubMenu";
import Students from "../Coneiner/Students";
import { BrowserRouter, Routes, Route } from "react-router-dom";



const Myrouter =()=>{
   return(
       <div>
       <BrowserRouter>
      <Menu/>
       <Routes>

       <Route path="/menu" element={<SubMenu/>} >
        <Route path="home" element={<Home/>}/>
        <Route path="addgroup" element={<AddGroup/>}/>
        <Route path="addstudent" element={<Addstudent/>}/>
        <Route path="group" element={<Group/>}/>
       </Route>

       <Route path="/student/:id"element={<Students/>}/>

       </Routes>
       </BrowserRouter>

       </div>
   )
}
export default Myrouter