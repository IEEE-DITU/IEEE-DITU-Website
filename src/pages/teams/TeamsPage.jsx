import React from "react";
import { Link } from "react-router-dom";

function TeamsPage() {
    return (
        <>
        <div>TeamsPage</div>
        <Link to="/home">HomePage</Link>
        <br/>
        <Link to="/about">AboutPage</Link>
        <br/>
        <Link to="/events">EventsPage</Link>
        <br/>
        </>
    )
}

export default TeamsPage;
