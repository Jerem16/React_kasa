import logo from "../../img/logo/logo_kasa-head.svg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header_logo" />
            <nav className="header_nav">
                <Link to="/">Accueil</Link>
                <Link to="/a_propos">A Propos</Link>
            </nav>
        </header>
    );
}

export default Header;
