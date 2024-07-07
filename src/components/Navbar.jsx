import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/shared/logo.svg';
import iconHamburger from '../assets/images/shared/icon-hamburger.svg';
import iconClose from '../assets/images/shared/icon-close.svg';

function Navbar() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    return (
        <nav className="nav">
            <div className="logo">
                <img className="logo__image" src={logo} alt="" />
            </div>
            <hr className="line" />
            <div className="icon">
                <img className="icon__open" src={ menu === true ? iconClose : iconHamburger } alt="" onClick={toggleMenu} />
            </div>
            <ul className={`menu ${ menu === true ? "open" : "" }`}>
                <li className="menu__item" onClick={toggleMenu}>
                    <NavLink className="menu__item-link" to="/" activeClassName="active">
                        <div className="menu__item-number">00</div>
                        <div className="menu__item-title">Home</div>
                    </NavLink>
                </li>
                <li className="menu__item" onClick={toggleMenu}>
                    <NavLink className="menu__item-link" to="/destination" activeClassName="active">
                        <div className="menu__item-number">01</div>
                        <div className="menu__item-title">Destination</div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;