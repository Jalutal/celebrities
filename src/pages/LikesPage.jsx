import { useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

//Je crée une fonction avec une variante "likes" et une fonction / hook nommée useState qui va maintenir l'état de changement
//de la variable au rechargement de la page (on évitera ainsi que le like se recharge à 0 à chaque fois).

// HandleLikes va modifier la valeur et recharger la page via le onClick.

function LikesPage() {

    const [likes, setLikes] = useState(0);
    const [displayMessage, setDisplayMessage] = useState(false);
  
    const HandleLikes = () => {
      if (likes < 5) {
        setLikes(likes + 1);
      } else {
        setDisplayMessage(true);
      }
    };
  
    const HandleMessage = () => {
      setDisplayMessage(false);
    };
  
    return (
      <>
        <Header />
        <main>
          {displayMessage && (
            <div>
              <p>Vous ne pouvez pas kiffer mon taff plus de 5 fois, coquin.</p>
              <button onClick={HandleMessage}>Fermes, de toute façon y'a rien d'autre à faire</button>
            </div>
          )}
          <button onClick={HandleLikes}>J'aime trop ce que tu fais</button>
          <p>Vous avez trop trop kiffé mon taff {likes} fois. L'amour de Pascal Sevran sur vous.</p>
        </main>
        <Footer />
      </>
    );
  }
  
  export default LikesPage;
  