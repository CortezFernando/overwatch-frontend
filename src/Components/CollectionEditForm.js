import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CollectionEditForm() {
  let { overwatch_id, collection_id } = useParams();
  const navigate = useNavigate();
console.log(overwatch_id)
  const [collection, setCollection] = useState({
    name: "",
    size: "",
    type: "",
    color: "",
    price: "",
    is_owned: "",
    image: "", 
    overwatch_id: overwatch_id,
  });

  useEffect(() => {
    axios.get(`http://localhost:3003/OverwatchHero/${overwatch_id}/Collections`).then((response) => {
      setCollection(response.data); 
      
    });
  }, [overwatch_id]);
console.log(overwatch_id)
  const handleTextChange = (event) => {
    setCollection({ ...collection, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:3003/OverwatchHero/${overwatch_id}/Collections`, collection)
      .then((response) => {
        navigate(`/OverwatchHero/${overwatch_id}/Collections/${collection_id}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Edit Collection</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Name">Name:</label>
        <input
          id="name"
          value={collection.name}
          type="text"
          name="name"
          onChange={handleTextChange}
          placeholder="Collection Name"
          required
        />
         <label htmlFor="size">Size:</label>
         <input
          id="Size"
          type="text"
          name="Size"
          required
          value={collection.size}
          onChange={handleTextChange}
        />
        <label htmlFor="type">Type:</label>
        <input
          id="Type"
          type="text"
          name="Type"
          values={collection.type}
          onChange={handleTextChange}
        />
       
       <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          name="color"
          values={collection.color}
          onChange={handleTextChange}
        />
          <label htmlFor="price">Price:</label>
          <input
          id="price"
          type="text"
          name="price"
          values={collection.price}
          onChange={handleTextChange}
        />
        <br />
        <label htmlFor="is_owned">Is_Owned:</label>
        <input
          id="is_owned"
          type="text"
          name="is_owned"
          values={collection.is_owned}
          onChange={handleTextChange}
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          name="image"
          values={collection.image}
          onChange={handleTextChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

