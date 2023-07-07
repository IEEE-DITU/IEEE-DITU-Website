import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
        <div>HomePage</div>
        <Link to="/teams">TeamsPage</Link>
        <br/>
        <Link to="/about">AboutPage</Link>
        <br/>
        <Link to="/events">EventsPage</Link>
        <br/>
        </>
    )
}

export default HomePage;
