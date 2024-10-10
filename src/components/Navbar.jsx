import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/images/shared/logo.svg';
import iconHamburger from '/images/shared/icon-hamburger.svg';
import iconClose from '/images/shared/icon-close.svg';

function Navbar() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    }

    let logoImage = document.getElementsByClassName("logo__image");
    let isMobile = window.innerWidth <= 700 && (window.screen.orientation.type === "portrait-primary" ||
        window.screen.orientation.type === "portrait-secondary");

    // Function to hide logo on window scroll of mobile devices
    window.onscroll = () => {
        if(isMobile) {
            logoImage[0].style.transition = "1s";
            logoImage[0].style.opacity = (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) ? "0" : "1";
        }
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
                <li className="menu__item" onClick={toggleMenu}>
                    <NavLink className="menu__item-link" to="/technology" activeClassName="active">
                        <div className="menu__item-number">02</div>
                        <div className="menu__item-title">Technology</div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;