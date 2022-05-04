import React from "react";
import {  useLocation, useNavigate, useParams } from "react-router-dom"
import { MyContext } from "../MyContext";
import { useContext } from "react";
import { useState } from "react";

const Student =()=>{
    const params = useParams()
    console.log(params)
    const location =useLocation()
    const data =useContext(MyContext)
    console.log(data)

    const [list, updateList] = useState(data.state)

    


    const remove = () => {
    let x =list.filter(e=> e.id==params.id)
    if(x){
        list.splice(x,1)
        updateList([...list]);
    }
    
   }

  
    return(
        <div className="st2">
            <h1>Students</h1>
            {
                data.state.map((e,i)=>{
                    if(e.id==params.id){
                        return(
                            <div key={i}>
                               <h3>{e.id} {e.name}</h3>
                                <button onClick={(e)=>remove(e)}>Delete</button>
                              
                            </div>
                        )
                    }
                
                })
            }
        </div>
    )
}


export default Student