import React from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom";


const SubMenu=()=>{
    return(
        <div  className="submenu" >
        <ul style={{ textDecoration: 'none' }} style={{listStyle:"none",display:"flex",margin:"10px"}}>
            <li><Link className="links"  to="/menu/home">Home</Link></li>
            <li><Link className="links" to="/menu/addgroup">AddGroup</Link></li>
            <li><Link className="links" to="/menu/addstudent">Addstudent</Link></li>
            <li><Link className="links" to="/menu/group">Group</Link></li>
        </ul>
        <Outlet/>
        </div>
    )
}

export default SubMenu