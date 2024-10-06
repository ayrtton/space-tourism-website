import { useState } from 'react';
import PropTypes from 'prop-types';

function Technology(props) {
    const [activeTab, setActiveTab] = useState(0);
    let isMobile = window.innerWidth <= 900 && (window.screen.orientation.type === "portrait-primary" ||
        window.screen.orientation.type === "portrait-secondary");

    return (
        <main className="technology">
            <div className="technology__content">
                <h1 className="technology__title">
                    <span className="technology__title-number">02</span>
                    Space Launch 101
                </h1>
                <div className="technology__info">
                    <div className="technology__explanation">
                        <ul className="technology__menu">
                            {
                                props.technology.map((technology, i) => (
                                    <li className={`technology__menu-item ${ activeTab === i ? 'active' : '' }`} key={i} onClick={() => setActiveTab(i)}>
                                        <div>{i + 1}</div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="technology__text">
                            <h2 className="technology__text-title">The Terminology...</h2>
                            <h1 className="technology__text-name">{props.technology[activeTab].name}</h1>
                            <p className="technology__text-description">{props.technology[activeTab].description}</p>
                        </div>
                    </div>
                    <div className="technology__illustration">
                        <img className="technology__illustration-image" 
                            src={!isMobile && props.technology[activeTab].images.portrait || isMobile && props.technology[activeTab].images.landscape} 
                            alt="Technology Image"></img>
                    </div>
                </div>
            </div>
        </main>
    )
}

Technology.propTypes = {
    technology: PropTypes.object
};

export default Technology;