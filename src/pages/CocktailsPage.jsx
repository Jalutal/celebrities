// Le fetch va aller interroger l'objet situé dans l'url
//le premier .then récupère la réponse, son return le place dans un fichier .json
//le second then affiche un console.log de la réponse convertie en json (ici la liste des cocktails)

function CocktailsPage() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
    .then((response) => {
        return response.json();
    })
    .then((json)=> {
        console.log(json);
    })

}

export default CocktailsPage;