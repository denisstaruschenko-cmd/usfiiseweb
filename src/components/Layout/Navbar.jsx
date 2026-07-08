import { Link } from "react-router-dom";

export default function Navbar() {
  return (

<header className="navbar">

<div className="logo">

IISE @ USF

</div>

<nav>

<Link to="/">Home</Link>

<Link to="/events">Events</Link>

<Link to="/gallery">Gallery</Link>

<Link to="/team">Team</Link>

<Link to="/feedback">Feedback</Link>

<Link to="/login">Login</Link>

</nav>

</header>

  );
}
