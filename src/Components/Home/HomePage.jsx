import React from "react";
import "./Home.css";
import MyImage from "../../Assets/Home/PROFILE.jpg";

export default function Main() {
    return (
        <div className="main-name-front">
            <img className="main-image" src={MyImage} alt="KAPIL P A" />
            <div className="main-content">
                <h1>Hi! I'm KAPIL</h1>
                <p className="main-about">
                    As a budding Software Engineer currently pursuing your undergraduate degree at SKCET, you're laying down the foundational blocks of your career in the dynamic world of technology. Your proficiency spans across multiple domains, showcasing your versatility and adaptability in the field.
                </p>
                <p className="main-about">
                    With a keen eye for design and functionality, you excel in frontend development, crafting visually appealing and user-friendly interfaces that seamlessly interact with users. Your expertise extends to backend development, where you construct the backbone of applications, ensuring they run smoothly and efficiently. From managing databases to implementing server-side logic, you demonstrate a comprehensive understanding of backend systems.
                </p>
            </div>
        </div>
    );
}
