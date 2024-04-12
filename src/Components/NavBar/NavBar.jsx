import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavBar_CSS.css";

export default function NavBar() {
    const NavRef = useRef();

    const toggleNavbar = () => {
        NavRef.current.classList.toggle("nav");
    };

    return (
        <header className="header">
            <Link href="#" className="logo-name"><h3>KAPIL</h3></Link>
            <nav ref={NavRef}>
                <Link href="#">Home</Link>
                <Link href="#">Education</Link>
                <Link href="#">Projects</Link>
                <Link href="#">Personal Blog</Link>
                <Link href="#">About Me</Link>
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
