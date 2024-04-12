import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar_CSS.css";

export default function NavBar() {
    const NavRef = useRef();

    const toggleNavbar = () => {
        NavRef.current.classList.toggle("nav");
    };

    return (
        <header className="header">
            <a href="#" className="logo-name"><h3>KAPIL</h3></a>
            <nav ref={NavRef}>
                <a href="#">Home</a>
                <a href="#">Education</a>
                <a href="#">Projects</a>
                <a href="#">Personal Blog</a>
                <a href="#">About Me</a>
                <button className="nav-btn nav-close" onClick={toggleNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={toggleNavbar}>
                <FaBars />
            </button>
        </header>
    );
}
