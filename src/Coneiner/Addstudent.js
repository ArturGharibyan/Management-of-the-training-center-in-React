import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MyContext } from "../MyContext";

const Addstudent =()=>{
const location =useLocation()

const data =useContext(MyContext)



const [state,setState]=useState([])

const[student,setUser]=useState({id:"",name:"",surname:"",  group_id:""})
  
  const addstudent=()=>{
    console.log(student)
    state.unshift(student)
    setState([...state])
    setUser({id:"",name:"",surname:"",group_id:""})
    if(state.length>=6){
        alert("Maximum student count")
    }
  }

  
  


    return(
        <div  className="Addgroup">
            <h1>Addstudent</h1>
 <input onChange={(e)=>setUser({...student,id:e.target.value})} value={student.id} placeholder="Student_id"></input>
 <input onChange={(e)=>setUser({...student,name:e.target.value})} value={student.name} placeholder="Student_name"></input>
 <input onChange={(e)=>setUser({...student,surname:e.target.value})} value={student.surname} placeholder="Student_surname"></input>
 <input onChange={(e)=>setUser({...student,group_id:e.target.value})} value={student.group_id} placeholder="Group_id"></input>
 <button onClick={()=>addstudent()}>add</button>
 
 <div>





 </div>

 <select>
     {
        data.state.map((e,i)=>{
            return(

                <option  key={i}  value={e.name}>{e.name}</option>
            )
                     
                    })
                }
                </select>
                 
                {
                    state.map((e,i)=>{
                        return(
                            <div key={i}>
                                <h4>{e.id} {e.name} {e.surname} {e.group_id}</h4>
                            </div>
                        )
                     })
                 } 
        </div>
    
        
    )
    
}

export default Addstudent;