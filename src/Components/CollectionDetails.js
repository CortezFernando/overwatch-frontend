
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";


const API = process.env.REACT_APP_API_URL

export default function CollectionDetails({collect}) {
    const [collection, setCollection] = useState([]);
    const { overwatch_id } = useParams()
    const navigate = useNavigate()
   

    useEffect(() => {
        axios.get(`${API}/OverwatchHero/${overwatch_id}/Collections/${collect.collection_id}`).then((response) => {
            setCollection(response.data)
        }).catch((e) => {
            console.warn("catch", e);
        });
    }, [overwatch_id])

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete?")) {
            deleteCollection()
        }

    }
    const deleteCollection = () => {
        axios.delete(`${API}/OverwatchHero/${overwatch_id}/Collections/${collect.collection_id}`).then(() => {
            navigate(`/Collections`)

        })
            .catch((e) => console.error(e)
            )
            .catch((e) => console.warn("catch", e));

    }

    return (
        <div className="hero-det">
            <img src={collection.image} alt="collection pic" />

            {<h5> Name: {collection.name}, Size: {collection.size}, Color: {collection.color}, Price: ${collection.price}, {" "} {collection.is_owned ? "owned" : "Not owned"} </h5>} 

            {collection.price > 150 ? (<h4> This is a Collector's Item 👜</h4>) : (<h4> This is not a Collector's Item 👑</h4>)}
            <div className="functionality">
                <Link to={`/Collections`}>
                    <button className="back-button">Back</button>
                </Link>

                <Link to={`/OverwatchHero/${overwatch_id}/Collections/edit`}>
                    <button className="edit-button">Edit</button>
                </Link>

                 <button onClick={() => handleDelete(collection.id)} className="edit-button">Delete</button> 
            </div>
        </div>
    )
 };
