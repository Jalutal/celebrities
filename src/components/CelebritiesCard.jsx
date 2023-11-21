import { Link } from "react-router-dom"

function CelebrityCard({starToDisplay}) {
    return(
        <>
            <article>
                <h3>{starToDisplay.name}</h3>
                <Link to={`/celebrities/${starToDisplay.id}`}>
                    <img src={starToDisplay.img} alt={starToDisplay.name} />
                </Link>
            </article>
        </>
    )
}

export default CelebrityCard