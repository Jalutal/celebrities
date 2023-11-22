import { Link } from "react-router-dom";

function Header ({ currentPage }) {
    return(
        <>
        <p>Je suis le Header, c'est à dire que je suis tout en haut</p>
        <ul>
            <li>
                {currentPage === "HomePage" ? (
                    <>
                    <strong>
                    <Link to="/">HomePage</Link>
                    </strong>
                    </>
                ) : (
                    <Link to="/">HomePage</Link>
                )
                
            }
                
            </li>
            <li>
                {currentPage === "AllCelebrities" ? (
                <>
                <strong>
                <Link to="/allceleb">All Celebrities</Link>
                </strong>
                </>
            ) : (
                <Link to="/allceleb">All Celebrities</Link>
            )
            }
            </li>
            <li>
                {currentPage === "Random" ? (
                <>
                <strong>
                <Link to="/random">Random ta célébrité</Link>
                </strong>
                </>
            ) : (
                <Link to="/random">Random ta célébrité</Link>
            )
            }
    
            </li>
        </ul>
        </>
    )
}

export default Header;