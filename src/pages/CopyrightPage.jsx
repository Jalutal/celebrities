//On crée une fonction copyrightpage avec simplement un bouton et du texte qui sera soit affiché soit masqué.
//On ajoute de l'humour pour que la vie soit belle.
//import de useState pour pouvoir l'utiliser :
import { useState } from "react";

function CopyrightPage() {
//On crée(eeee, trop de e) une variable avec useState => setTextAppear va venir modifier la valeur de textAppear en fonction 
//de ce qui est renvoyé par useState. Dans le cas présent textAppear=true. 
    const [textAppear, setTextAppear] = useState(true);
//Au click sur le bouton, on va venir changer la valeur de textAppear en lui passant l'inverse (ici de true à false). Elle modifie la valeur et recharge le composant.
    const clickButton = () => {
        setTextAppear(!textAppear)
    };

    return (
        <div>
        //Si textAppear est true, on affiche le texte. Sinon, on galère à cliquer sur le bouton parcequ'il n'y a plus de texte
        //et que le bouton remonte...
           {textAppear && <p>Ceci est mon texte visible (mais pas pour longtemps ptdr, Garcimore arrive)</p>}
            <button onClick={clickButton}>Clique-moi je suis magique</button>
        </div>
    )


}

export default CopyrightPage;