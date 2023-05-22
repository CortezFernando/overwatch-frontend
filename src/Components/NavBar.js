import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <Link to="/OverwatchHero"><h1><span>overwatch_hero</span></h1></Link>
      <br/>
      <button>
        <Link  to="/OverwatchHero/:overwatchid/Collections">New Collections</Link>
      </button>
    </nav>
  );
}