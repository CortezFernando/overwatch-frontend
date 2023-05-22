import { Link } from "react-router-dom";
import "./Hero.css"

function OverwatchHero({ overwatchHero }) {
//  console.log(overwatchHero)
  return (
    <tr>
      <td>
        <Link to={`/OverwatchHero/${overwatchHero.overwatch_id}/Collections`}>{overwatchHero.name}</Link>
      </td>
      <td>
        {overwatchHero.role}
      </td>
      <td>
        {overwatchHero.base_of_operations}
      </td>
      <td className="hero-det">
        <img src = {overwatchHero.image} alt = "pic" />
        
      </td>
      <td>
        <Link to={`/OverwatchHero/${overwatchHero.overwatch_id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default OverwatchHero;