import { useRef } from "react";
import { FaBars, FaLine, FaTimes } from "react-icons/fa";

export default function NavBar()
{
    const NavRef=useRef();
    const handleList= ()=>{
        NavRef.current.classList.toggle("nav");
    }
    return(
        <header >
            <h3 className="logo-name">KAPIL</h3>
            <nav ref={NavRef}>
                <a href="#">Home</a>
                <a href="#">Education</a>
                <a href="#">Personal Blog</a>
                <a href="#">AboutMe</a>
                <button className="nav-btn nav-close" onClick={handleList}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={handleList}>
                <FaBars/>
            </button>
        </header>
    );
}