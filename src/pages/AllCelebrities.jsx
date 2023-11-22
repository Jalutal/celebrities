import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";
import CelebritiesCard from "../components/CelebritiesCard";

function AllCelebrities() {



    return(
        <>
        <Header currentPage="AllCelebrities"/>
        <p>Coucou All Celebrities</p>
        <p><strong>On va importe à nouveau toutes les célébrités mais maintenant on va ajouter le useParams et on va pleurer.</strong></p>
        {shittyStars.map(star => {
            return <CelebritiesCard starToDisplay={star}/>

        }
            
            )}
        <Footer />
        </>
    )
}

export default AllCelebrities;