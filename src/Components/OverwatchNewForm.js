import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const API = process.env.REACT_APP_API_URL;

function OverwatchNewForm() {
    let navigate = useNavigate();
    // let { overwatchId} = useParams();

    const addHero = (newOverwatchHero) => {
        axios
            .post(`${API}/OverwatchHero`, newOverwatchHero)
            .then(
                () => {
                    navigate(`/OverwatchHero`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };

    const [hero, setNewHero] = useState({
    name: "",
    role: "",
    base_of_operations: "",
    //  overwatch_id: overwatchId,
    });

    const handleTextChange = (event) => {
        setNewHero({ ...hero, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addHero(hero);
    };

    const handleDelete = (event) => {
        event.preventDefault();
        axios
            .delete(`${API}/OverwatchHero/${hero.overwatch_id}`)
            .then(
                () => {
                    navigate(`/OverwatchHero`);
                },
                (error) => console.error(error)
            )
            .catch((c) => console.warn("catch", c));
    };




    return (
        <div className="New">
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
        <label htmlFor="image">Image:</label>
                <input
                    id="image"
                    type="text"
                    name="image"
                    placeholder="Image"
                    value={hero.image}
                    onChange={handleTextChange}
                />
        <div>
                <br />
               
        <Link to={`/OverwatchHero`}>
          <button>Back</button>
        </Link>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div> 
      <input type="submit" />
                
            </form>
        </div>
    );
}

export default OverwatchNewForm;