import axios from "axios";
import { useState, useEffect } from "react";
import OneOverwatchHero from "../OneOverwatchHero";

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
              <th>OverwatchHero</th>
              <th></th>
              
            </tr>
          </thead>
          <tbody>
            {overwatch.map((OverwatchHero) => {
              return <OneOverwatchHero key={OverwatchHero.overwatch_id} OneOverwatchHero={OverwatchHero} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default OverwatchHeroes;