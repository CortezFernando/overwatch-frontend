import axios from "axios";
import { useState, useEffect } from "react";
import OverwatchHero from "./OverwatchHero";

const API = process.env.REACT_APP_API_URL;

function OverwatchHeroes() {
  const [overwatch, setOverwatch] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/OverwatchHero`)
      .then((response) => {
        setOverwatch(response.data);
      })
      .catch((e) => {
        console.warn("catch", e);
      });
  }, []);
  return (
    <div className="Overwatch">
      <section>
        <table>
          <thead>
            <tr>
              <th>Overwatch Hero</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody className="hero-det">
            {overwatch.map((overwatchHero) => {
              return <OverwatchHero key={overwatchHero.overwatch_id} overwatchHero={overwatchHero} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default OverwatchHeroes;