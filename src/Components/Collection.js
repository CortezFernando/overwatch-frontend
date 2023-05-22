import { Link } from "react-router-dom";


function Collection({ collection }) {
    return (
        <tr>
            <td>
                <Link to={`/Collections/${overwatch_id}`}>
                    <article className="hero-det">
                        <img src={collection.image} alt="collection-pic" />
                        <h3>{collection.name}</h3>
                    </article>
                </Link>
            </td>

        </tr>
    )
}
export default Hat;