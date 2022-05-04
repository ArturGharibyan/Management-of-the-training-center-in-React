import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { MyContext } from "../MyContext"

const AddGroup =()=>{

   const data = useContext(MyContext)
    const[group,setUser]=useState({id:"",name:"",  student_count:"" })

    const addGroup=()=>{
        console.log(group)
        data.state.unshift({...group, id:Date.now()})
        data.setState([...data.state])
        setUser({id:"",name:"",student_count:""})
    
      }

    return(
        <div className="Addgroup">
            <h1>AddGroup</h1>

  
 

 
        <div  className="Addgroup">
 <input onChange={(e)=>setUser({...group,id:e.target.value})} value={group.id} placeholder="Group ID"></input>
 <input onChange={(e)=>setUser({...group,name:e.target.value})} value={group.name} placeholder="name"></input>
 <input onChange={(e)=>setUser({...group,student_count:e.target.value})} value={group.student_count} placeholder="student_count"></input>
 <button onClick={()=>addGroup()}>add</button>


     {
        data.state.map((e,i)=>{
             return(
                 <div  key={i}>
                     <h3> {e.id} {e.name}  {e.student_count}</h3>
                 </div>
             )
         })
     }


     {
                    data.state.map((e,i)=>{
                        return(
                            <div key={i}>
                                <h4> <Link to="/home/group">{e.group_id}</Link></h4>
                            </div>
                        )
                     })
                 } 
        </div>
        
    
        </div>
    )
}

export default AddGroup;