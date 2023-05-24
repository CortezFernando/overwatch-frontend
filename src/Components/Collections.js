import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//  import Collection from "./Collection";
//    import CollectionEditForm from "./CollectionEditForm";
  //  import OverwatchHeroes from "./OverwatchHeroes";
  import EditCollection from "../Pages/EditCollection"
  import NewCollection from "../Pages/NewCollection"
// import CollectionNewForm from "./CollectionNewForm";
import CollectionDetails from "./CollectionDetails";

const API = process.env.REACT_APP_API_URL;

function Collections() {
  const [collections, setCollections] = useState([]);
  let { overwatch_id, collection_id } = useParams();

  useEffect(() => {
    axios.get(`${API}/OverwatchHero/${overwatch_id}/Collections`).then((response) => {
    
      setCollections(response.data);
    });
  }, [overwatch_id]);

  const handleSubmit = (newCollection) => {
    axios
      .post(`${API}/OverwatchHero/${overwatch_id}/Collections`, newCollection)
      .then(
        (response) => {
          setCollections([response.data, ...collections]);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = (collectionId) => {
    axios
      .delete(`${API}/collections/${overwatch_id}/Collections/${collection_id}`)
      .then(
        (response) => {
          const copyCollectionArray = [...collections];
          const indexDeletedCollection = copyCollectionArray.findIndex((collection) => {
            return collection.collecttion_id === collectionId;
          });
          copyCollectionArray.splice(indexDeletedCollection, 1);
          setCollections(copyCollectionArray);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleEdit = (updatedCollection) => {
  
    axios
      .put(`${API}/OverwatchHero/${overwatch_id}/Collections/${updatedCollection.collection_id}`, updatedCollection)
      .then((response) => {
       
        const copyCollectionArray = [...collections];
        const indexUpdatedCollection= copyCollectionArray.findIndex((collection) => {
          return collection.collection_id === updatedCollection.collection_id;
        });
        copyCollectionArray[indexUpdatedCollection] = response.data;
        setCollections(copyCollectionArray);
      })
      .catch((c) => console.warn("catch", c));
  };

  return (
    <section className="Collections">
        
      <h2>Collections</h2>
          <NewCollection handleSubmit={handleSubmit} /> 
        <h3>Edit Collection</h3>
         {/* <EditCollection collection={collections} handleEdit={handleEdit} />     */}
      {collections.map((collection) => (
        <CollectionDetails
          key={collection.overwatch_id}
          collect={collection}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSubmit={handleSubmit}  
        />
  
      ))}
    </section>
  );
}



export default Collections;



