import { Link } from "react-router-dom";

function OneOverwatchHero({ overwatch }) {
  return (
    <tr>
      <td>
        {overwatch.name}
      </td>
      <td>
        {overwatch.role}
      </td>
      <td>
        {overwatch.base_of_operations}
      </td>
      <td>
        {overwatch.image}
      </td>
      <td>
        <Link to={`/OverwatchHeroes/${OneOverwatchHero.overwatch_id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default OneOverwatchHero;