import React, { useRef, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavBar_CSS.css';

export default function NavBar() {
    const NavRef = useRef();

    const toggleNavbar = () => {
        NavRef.current.classList.toggle('nav');
    };

    useEffect(() => {
        const header = document.querySelector('.header');

        const handleMouseMove = (e) => {
            const x = e.pageX - header.getBoundingClientRect().left;
            const y = e.pageY - header.getBoundingClientRect().top;

            console.log(e.pageX+"  :  "+x);
            console.log(e.pageY+"  : "+y);
            header.style.setProperty('--x', `${x}px`);
            header.style.setProperty('--y', `${y}px`);
        };

        header.addEventListener('mousemove', handleMouseMove);

        return () => {
            header.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <header className="header">
            <Link to="/" className="logo-name"><h3>KAPIL</h3></Link>
            <nav ref={NavRef}>
                <Link to="/">Home</Link>
                <Link to="/education">Education</Link>
                <Link to="#">Projects</Link>
                <Link to="#">Personal Blog</Link>
                <Link to="#">About Me</Link>
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
