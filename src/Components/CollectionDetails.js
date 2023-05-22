// import React from "react";
// import { useState, useEffect } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const API = process.env.REACT_APP_API_URL
 
// function CollectionDetails() {
//   const [collection, setCollection] = useState([]);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get(`${API}/OverwatchHero/${id}`)
//     .then((response) => {
//       console.log(response.data)
//       setCollection(response.data)
//     }).catch((e) => {
//       console.warn("catch:", e)
//     })
//   }, [id]);

//   const handleDelete = () => {
   
//     deleteCollection();
//   };

//   const deleteCollection = () => {
//     axios
//       .delete(`${API}/collections/${id}`)
//       .then(() => {
//         navigate(`/collections`);
//       })
//       .catch((e) => {
//         console.warn("catch:", e);
//       });
//   };

// return (
//   <article>
//     <h1>{collection.is_owned ? <span>⭐️</span> : null} {collection.name} {collection.type}</h1>
//     <h2>
//       <span>
//         Size:
//       </span>
//       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {collection.size}
//     </h2>
//     <h3>Price: {collection.price}</h3>
//     <div className="showNavigation">
//       <div>
//         <Link to={`/Collections`}>
//           <button>Back</button>
//         </Link>
//       </div>
//       <div>
//         <Link to={`/Collections/id/edit`}>
//           <button>Edit</button>
//         </Link>
//       </div>
//       <div>
//         <button onClick={handleDelete}>Delete</button>
//       </div>
//     </div>

//   </article>
//  ) 
// }

// export default CollectionDetails;



import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL

export default function CollectionDetails({collect}) {
    const [collection, setCollection] = useState([]);
    const { overwatch_id } = useParams()
    const navigate = useNavigate()
    console.log(overwatch_id)

    useEffect(() => {
        axios.get(`${API}/OverwatchHero/${overwatch_id}/Collections/${collect.collection_id}`).then((response) => {
            setCollection(response.data)
        }).catch((e) => {
            console.warn("catch", e);
        });
    }, [overwatch_id])

    // const handleDelete = () => {
    //     if (window.confirm("Are you sure you want to delete?")) {
    //         deleteCollection()
    //     }


    // }
    // const deleteCollection = () => {
    //     axios.delete(`${API}/OverwatchHero/:overwatchId/Collections/${collectionId}`).then(() => {
    //         navigate(`/Collections`)

    //     })
    //         .catch((e) => console.error(e)
    //         )
    //         .catch((e) => console.warn("catch", e));

    // }

    return (
        <div className="hero-det">
            <img src={collection.image} alt="collection pic" />

            {<h5> Name: {collection.name}, Size: {collection.size}, Color: {collection.color}, Price: ${collection.price}, {" "} {collection.is_owned ? "owned" : "Not owned"} </h5>}

            {collection.price > 150 ? (<h4> This is a Collector's Item 👜</h4>) : (<h4> This is not a Collector's Item 👑</h4>)}
            <div className="functionality">
                <Link to={`/collections`}>
                    <button className="edit-button">Back</button>
                </Link>

                <Link to={`/collections/${collection.id}/edit`}>
                    <button className="edit-button">Edit</button>
                </Link>

                {/* <button onClick={() => handleDelete(collection.id)} className="edit-button">Delete</button> */}
            </div>
        </div>
    )
 };
