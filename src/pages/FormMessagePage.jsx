import { useState } from "react";

function FormMessagePage() {
    // setMessage va venir modifier message via l'utilisation de useState
const [message, setMessage] = useState("");
// le event.target.value va venir récupérer ce qui passe dans le onChange plus bas.
// Hamid délégué.
// On retourne ce qui est écrit via {message} dans la balise <p>
const handleMessageChange = (event) => {
    setMessage(event.target.value);
};

return(
    <form>
        <label>
            Message
            <input onChange={handleMessageChange} type="text" name="message" />
        </label>
        <p>Vous avez envoyé : {message}</p>
    </form>
);

}

export default FormMessagePage;