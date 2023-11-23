import { useState } from "react";

// Le fetch va aller interroger l'objet situé dans l'url
//le premier .then récupère la réponse, son return le place dans un fichier .json
//le second then affiche un console.log de la réponse convertie en json (ici la liste des cocktails)
// La boucle if permet ne non rechargement constant de cocktails. Dès qu'il détecte que cocktails contient des données, le chargement 
//arrête.
//dans le return, on met une ternaire qui vient vérifier si les données sont présentes (un affichage ou l'autre).

//Dans setCocktails on rajoute le .drinks pour récupérer la clé de l'api en rapport avec le tableau.
//Dans le return on va faire un map de cocktails afin de récupérer chaque entrée et d'en faire un affichage dans la balise h2.

function CocktailsPage() {
    const [cocktails, setCocktails] = useState(null);

    if (!cocktails) {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setCocktails(json.drinks);
            });
    }
    return (
        <main>
            {cocktails ? (
                <>
                    <article>Cocktails frais et prêts, on va encore rentrer à 3 grammes YOLO PTDR. CHECK LA LISTE :</article>
                    {cocktails.map((cocktail) => (
                        <div key={cocktail.idDrink}>                            
                            <h2>{cocktail.strDrink}</h2>
                        </div>
                    ))}
                </>
            ) : null}
        </main>
    );
}

export default CocktailsPage;