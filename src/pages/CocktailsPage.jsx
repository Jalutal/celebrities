import { useState } from "react";

// Le fetch va aller interroger l'objet situé dans l'url
//le premier .then récupère la réponse, son return le place dans un fichier .json
//le second then affiche un console.log de la réponse convertie en json (ici la liste des cocktails)
// La boucle if permet ne non rechargement constant de cocktails. Dès qu'il détecte que cocktails contient des données, le chargement 
//arrête.
//dans le return, on met une ternaire qui vient vérifier si les données sont présentes (un affichage ou l'autre).

function CocktailsPage() {
    const [cocktails, setCocktails] = useState(null);

    if (!cocktails){
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response) => {
        return response.json();
    })
    .then((json)=> {
        console.log(json);
        setCocktails(json);
    })
    }

    return (
        <main>
            {cocktails ?
            <article>Cocktails frais et prêts, on va encore rentrer à 3 grammes YOLO PTDR</article>
            :
            <p>On attend, encore et toujours...</p>
            }
        </main>
    )

}

export default CocktailsPage;