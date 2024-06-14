import { NavLink } from 'react-router-dom';
import logo from '../assets/images/shared/logo.svg';

function Menu() {
    return (
        <nav className="nav">
            <div className="logo">
                <img className="logo__image" src={logo} alt="" />
            </div>
            <ul className="menu">
                <li className="menu__item">
                    <NavLink className="menu__item-link" to="/" activeClassName="active">
                        <div className="menu__item-number">00</div>
                        <div className="menu__item-title">Home</div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;