import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";
import Team from "./pages/Team/Team";
import Feedback from "./pages/Feedback/Feedback";
import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";

function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>
      <p>Page not found.</p>
    </div>
  );
}

export default function App() {
  return (
    <Routes>

      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />

        <Route path="/events" element={<Events />} />

        <Route path="/gallery" element={<Gallery />} />

        <Route path="/team" element={<Team />} />

        <Route path="/feedback" element={<Feedback />} />

        <Route path="/login" element={<Login />} />

        <Route path="/admin" element={<Admin />} />

      </Route>

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}
