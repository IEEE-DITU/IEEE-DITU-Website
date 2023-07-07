import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import EventsPage from "./EventsPage";
import TeamsPage from "./TeamsPage";

//LINK
function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/events" element={<EventsPage/>}></Route>
      <Route path="/teams" element={<TeamsPage/>}></Route>
    </Routes>
  );
}

export default App;
