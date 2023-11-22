import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";

function HomePage() {

    const shittyByTeam = shittyStars.filter(shitTheTeam => shitTheTeam.isPickedByTeam) 
    const shittyByDate = shittyStars.sort((stars1, stars2) =>
    new Date(stars1.publishedAt) - new Date(stars2.publishedAt))

    return(
        <>
        <Header currentPage="HomePage"/>
        <h1>Ceci est ma HomePage</h1>
        <p><strong>But de la HomePage: Dans un premier temps, avoir une liste complète, sans chichis.</strong></p>
        {shittyStars.map((shitty) => (
            <>
                <p>{shitty.name}</p>
                <p><img src={shitty.img} alt={shitty.name} /></p>
                <p>{shitty.bio}</p>
            </>
        )
        
        )}

        <p><strong>Maintenant on va les trier en fonction de isInTeam: on ne prend que les True</strong></p>    
            {shittyByTeam.map((shittyTeam) => (
                <p>{shittyTeam.name}</p> 
            ))}
        <p><strong>On tri en fonction de la date de publication via l'entrée PublishedAt</strong></p>
                {shittyByDate.map((shittyMap)=>
                    <>
                    <p>{shittyMap.name}</p>
                    <p>{shittyMap.bio}</p>
                    </>
                )}
        <Footer />
        </>
    )
}

export default HomePage;