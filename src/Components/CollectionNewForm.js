 import { useState, useEffect } from "react";
 import { useParams } from "react-router-dom";

function CollectionNewForm(props) {
  let { overwatchId } = useParams();
  const { CollectionDetails } = props;

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
  }, [overwatchId, CollectionDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(collection, overwatchId);
    if (CollectionDetails) {
        console.log("collection id:", CollectionDetails.collection_id)
      props.toggleView();
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
      {/* renders the children elements of this component   */}
      {/* <ReviewForm> some child element </ReviewFrom> */}
      {props.children}
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

export default CollectionNewForm;