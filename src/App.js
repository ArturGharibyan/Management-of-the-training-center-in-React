import React, { useState } from "react";
import "./App.css"
import Myroter from "./Component/Myroter"
import { MyContext } from "./MyContext";
const App=()=> {

  const [state,setState]=useState([])
  return(
    <div >
      <MyContext.Provider value={{state, setState}}>

    <Myroter/>
      </MyContext.Provider>

    </div>
  )

}

export default App;
