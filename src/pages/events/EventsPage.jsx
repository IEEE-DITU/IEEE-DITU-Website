import React from "react";
import { Link } from "react-router-dom";

function EventsPage() {
    return (
       <>
        <div>EventsPage</div>
        <Link to="/home">HomePage</Link>
        <br/>
        <Link to="/about">AboutPage</Link>
        <br/>
        <Link to="/teams">TeamsPage</Link>
        <br/>
        </>
    )
}

export default EventsPage;
