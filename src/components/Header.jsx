import { Link } from "react-router-dom";

function Header () {
    return(
        <>
        <p>Je suis le Header, c'est à dire que je suis tout en haut</p>
        <ul>
            <li>
                <Link to="/">HomePage</Link>
            </li>
            <li>
                <Link to="/allceleb">All Celebrities</Link>
            </li>
            <li>
                <Link to="/random">Random ta célébrité</Link>
            </li>
        </ul>
        </>
    )
}

export default Header;