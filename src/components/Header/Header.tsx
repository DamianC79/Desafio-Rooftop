import { Link } from 'react-router-dom';
import './header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return(
        <header className="header">
            <div className="header__logo-container">
                <img className="header__logo" src={logo}/>
                <span className="header__title">Challenge Frontend</span>
            </div>
            <ul className="header__nav-container">
                <li className="header__nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="header__nav-item">
                    <Link to="/catalogo">Catálogo</Link>
                </li>
            </ul>
        </header>
        )
}

export default Header