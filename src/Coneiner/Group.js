import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MyContext } from "../MyContext";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Group =()=>{
   const data = useContext(MyContext)
   console.log(data)
   
   const location = useLocation()
   console.log(location)

const params=useParams()
console.log(params)

const [info,setInfo]=useState([])

useEffect(()=>{
    let x = data.state.find(e=> e.id==params.id)
     setInfo([...info])
},[])

    return(
        <div  className="Addgroup">
            <h1>Group</h1>
         {
             data.state.map((e,i)=>{
                 return(
                     <div key={i}>
                         <Link style={{textDecoration:"none",color:"White"}} to={{pathname:"/student/"+e.id }}><h3> {e.id} {e.name} {e.group_id} </h3></Link>
                         <Outlet/>
                     </div>
                     
                 )
             })
         }
        </div>
    )
}

export default Group;