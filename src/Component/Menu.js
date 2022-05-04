import { Link } from "react-router-dom";

const Menu =()=>{
    return(
        <div  className="d1">
    <header >
      <nav >
         <ul >
           <li ><h1><Link style={{textDecoration:"none",listStyle:"none",color:"white",marginTop:"50px"}} to="/menu">Menu</Link></h1></li>
         </ul>
      </nav>
    </header>
    
    
    </div>
    )
}


export default Menu;