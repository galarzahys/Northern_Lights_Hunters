import { Link } from "react-router-dom";
import "../../styles/Nav.css";



const Nav = (props) => {
    return (
        <nav>
            <div>
                <ul className="nav_list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/experiencias">Experiencias</Link></li>
                  <li><Link to="/viajaconnosotros">Viajá con nosotros</Link></li>
                  <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;
