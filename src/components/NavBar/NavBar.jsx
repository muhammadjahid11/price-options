import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineCloseSquare } from 'react-icons/ai';
const NavBar = () => {
    const [open,setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
      ];
      
    return (
        <nav>
           <div className="md:hidden text-2xl" onClick={() => setOpen(!open)} >
            {
                open === true ?
                <AiOutlineCloseSquare></AiOutlineCloseSquare>
                : <AiOutlineMenu ></AiOutlineMenu>
            }
           
           </div>
          <ul className="md:flex ">
          {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
            </ul>  
        </nav>
    );
};

export default NavBar;