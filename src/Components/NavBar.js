import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <Link to="/OverwatchHero"><h1><span>overwatch_hero</span></h1></Link>
      <br/>
      <button>
        <Link  to="/OverwatchHero/:overwatch_id/Collections/new">New Collections</Link>
      </button> 
      <button>
        <Link to="/OverwatchHero/:overwatchid/new">New Hero</Link>
      </button>
    </nav>
  );
}