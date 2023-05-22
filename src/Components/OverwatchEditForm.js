import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function OverwatchEditForm() {
  let { overwatchId} = useParams();

  let navigate = useNavigate();

  const [hero, setHero] = useState({
    name: "",
    role: "",
    base_of_operations: "",
    overwatch_id: overwatchId,
  });

  const updatedHero = (updateHero, overwatchId) => {
    axios
      .put(`${API}/OverwatchHero/${overwatchId}`, updateHero)
      .then(
        () => {
          navigate(`/OverwatchHero/${overwatchId}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setHero({ ...hero, [event.target.id]: event.target.value });
  };


  useEffect(() => {
    axios.get(`${API}/OverwatchHero/${overwatchId}`)
    .then(
      (response) => setHero(response.data),
      //(error) => navigate(`/not-found`)
    );
  }, [overwatchId]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedHero(hero, overwatchId);
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Hero Name:</label>
        <input
          id="name"
          value={hero.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Hero for Collection"
          required
        />
        <br/>
        <label htmlFor="role">Role:</label>
        <input
          id="role"
          type="text"
          value={hero.role}
          onChange={handleTextChange}
          placeholder="Name of Role"
          required
        />
        <br/>
    
        <br/>
        <label htmlFor="base_of_operations">base_of_operations:</label>
        <input
          id="base_of_operations"
          type="text"
          name="base_of_operations"
          value={hero.base_of_operations}
          onChange={handleTextChange}
          placeholder="Name of base_of_operations"
          required
        />
        <br/> 
        <div className='nav-buttons'>
          <Link to={`/OverwatchHero/${overwatchId}`}><button>Back</button></Link> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="submit">Submit</button>
        </div>
      </form>
      
    </div>
  );
}

export default OverwatchEditForm;