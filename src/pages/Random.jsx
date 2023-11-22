import Header from "../components/Header";
import Footer from "../components/Footer";
import { shittyStars } from "../utils/product-utils";

function Random() {
    const randomStarsIndex = shittyStars[(Math.random() * (shittyStars.length - 1)).toFixed(0)]

    return(
        <>
            <Header currentPage="Random"/>
            <h2>Célébrité choisie au hasard</h2>
            <article>
                <h3>{randomStarsIndex.name}</h3>
                <p>{randomStarsIndex.bio}</p>
                <img src={randomStarsIndex.img} alt={randomStarsIndex.name} />
            </article>
            <Footer />
        </>
    )

}

export default Random;