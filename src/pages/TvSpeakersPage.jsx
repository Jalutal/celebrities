import SpeakersCard from "../components/SpeakersCard";
import Header from "../components/Header";


function TvSpeakersPage() {
 const shittySpeakers =  [
    "Laurent Ruquier", "Pascal Praud", "Hanouna", "Fogiel", "Hamid le futur délégué"
 ]

    return(
        <>
        <Header />
        <main>
        <h2>Les présentateurs de l'enfer revenus plus ou moins à la vie mais qui nous font l'effet de notre mort.</h2>
        {shittySpeakers.map((speaker) => {
            return (
                <SpeakersCard speakersName={speaker} />
            )
        }
        )}
        </main>
        </>

    )
}


export default TvSpeakersPage;