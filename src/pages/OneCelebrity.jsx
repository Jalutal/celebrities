import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";
import { useParams } from "react-router-dom";

function OneCelebrity() {
    
    const { celebrityId } = useParams ()

    
    const idInt = parseInt(celebrityId)
    
    
    const starToDisplay = shittyStars.find((star) => {
    return star.id === idInt
    })

    return(
        <>
        <Header />
        {starToDisplay ? (
                    <article>
                        <h2>Détail de la célébrité</h2>
                        <h3>{starToDisplay.name}</h3>
                        <p>{starToDisplay.bio}</p>
                        <img src={starToDisplay.img} alt={starToDisplay.name} />
                    </article>
                ) : (
                    <p>ERREUR 404 ! Tu fais n'imp !</p>
                )}
        <Footer />
        </>
    )
}

export default OneCelebrity;