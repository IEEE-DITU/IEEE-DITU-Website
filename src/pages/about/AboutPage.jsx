import React from "react";
import { Link } from "react-router-dom";
 
function AboutPage() {
    return (
        <>
        <div>AboutPage</div>
        <Link to="/home">HomePage</Link>
        <br/>
        <Link to="/teams">TeamsPage</Link>
        <br/>
        <Link to="/events">EventsPage</Link>
        <br/>
        </>
    )
}

export default AboutPage;
