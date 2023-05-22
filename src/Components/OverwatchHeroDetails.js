import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import OverwatchHeroes from "./OverwatchHeroes";

const API = process.env.REACT_APP_API_URL
 
function OverwatchHeroDetails() {
  const [hero, setHero] = useState({});
  const { overwatchId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/OverwatchHero/${overwatchId}`)
    .then((response) => {
     
      setHero(response.data)
    }).catch((e) => {
      console.warn("catch:", e)
    })
  }, [overwatchId]);

  const handleDelete = () => {
   
    deleteHero();
  };

  const deleteHero = () => {
    axios
      .delete(`${API}/OverwatchHero/${overwatchId}`)
      .then(() => {
        navigate(`/OverwatchHero`);
      })
      .catch((e) => {
        console.warn("catch:", e);
      });
  };

return (
  <article className="hero-det">
    <img src={hero.image} alt="pic" />
    <h2>{hero.name}</h2>
    {<h5> Role: {hero.role}, Base_of_Operations: {hero.base_of_operations} </h5>}
    <div className="showNavigation">
       
      <div>
        <Link to={`/OverwatchHero`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <Link to={`/OverwatchHero/${hero.overwatch_id}/edit`}>
          <button>Edit</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
    <h3>Collections</h3>
  <OverwatchHeroes />
  </article>
 ) 
}

export default OverwatchHeroDetails;