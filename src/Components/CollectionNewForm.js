 import { useState, useEffect } from "react";
 import { useParams } from "react-router-dom";

function CollectionNewForm(collect) {
  let { overwatchId } = useParams();
  const { CollectionDetails } = collect; 


  const [collection, setCollection] = useState({
     name: "",
     size: "",
     type: "",
     color: "",
     price: "",
     is_owned: "",
     image: "", 
     overwatch_id: overwatchId,
    
  });

  const handleTextChange = (event) => {
    setCollection({ ...collection, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if ( CollectionDetails) {
      setCollection(CollectionDetails);
    }
  }, [overwatchId, CollectionDetails, collect]);

  const handleSubmit = (event) => {
    event.preventDefault();
    collect.handleSubmit(collection, overwatchId);
    if (CollectionDetails) {
        console.log("collection id:", CollectionDetails.collection_id)
      collect.toggleView();
    }
    setCollection({
        name: "",
        size: "",
        type: "",
        color: "",
        price: "",
        is_owned: "",
        image: "", 
        overwatch_id: overwatchId,
  });
}
  return (
    <div className="New Collection">
       {/* renders the children elements of this component   
       <ReviewForm> some child element </ReviewForm>  */}
      {collect.children}
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
          id="size"
          type="text"
          name="size"
          required
          value={collection.size}
          onChange={handleTextChange}
          placeholder="Collection Size"
          
        />
        <label htmlFor="type">Type:</label>
        <input
          id="type"
          type="text"
          name="type"
          values={collection.type}
          onChange={handleTextChange}
          placeholder="Collection Type"
          required
        />
       
       <label htmlFor="color">Color:</label>
        <input
          id="color"
          type="text"
          name="color"
          values={collection.color}
          onChange={handleTextChange}
          placeholder="Collection Color"
          required
        />
          <label htmlFor="price">Price:</label>
          <input
          id="price"
          type="text"
          name="price"
          values={collection.price}
          onChange={handleTextChange}
          placeholder="Collection Price"
          required
        />
        <br />
        <label htmlFor="is_owned">Is_Owned:</label>
        <input
          id="is_owned"
          type="text"
          name="is_owned"
          values={collection.is_owned}
          onChange={handleTextChange}
            placeholder="Collection Is_Owned"
            required
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          name="image"
          values={collection.image}
          onChange={handleTextChange}
            placeholder="Collection Image"
            required
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default CollectionNewForm;







