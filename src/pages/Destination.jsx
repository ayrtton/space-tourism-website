import { useState } from 'react';
import PropTypes from 'prop-types';

function Destination(props) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <main className="destination">
            <div className="destination__content">
                <h1 className="destination__title">
                    <span className="destination__title-number">01</span> 
                    Pick your destination
                </h1>
                <div className="destination__info">
                    <div className="destination__illustration">
                        <img className="destination__illustration-image" src={props.destinations[activeTab].images.png} alt="Planet Image" />
                    </div>
                    <div className="destination__explanation">
                        <ul className="destination__menu">
                            {
                                props.destinations.map((destination, i) => (
                                    <li className={`destination__menu-item ${ activeTab === i ? 'active' : '' }`} key={i} onClick={() => setActiveTab(i)}>
                                        <div>{destination.name}</div>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="destination__text">
                            <h1 className="destination__text-name">{props.destinations[activeTab].name}</h1>
                            <p className="destination__text-description">{props.destinations[activeTab].description}</p>
                        </div>
                        <hr className="destination__line" />
                        <div className="destination__statistics">
                            <div className="destination__statistics-info">
                                <div className="destination__statistics-title">Avg. Distance</div>
                                <div className="destination__statistics-data">{props.destinations[activeTab].distance}</div>
                            </div>
                            <div className="destination__statistics-info">
                                <div className="destination__statistics-title">Est. Travel Time</div>
                                <div className="destination__statistics-data">{props.destinations[activeTab].travel}</div>
                            </div>
                        </div>
                    </div>            
                </div>
            </div>
        </main>
    );
}

Destination.propTypes = {
    destinations: PropTypes.object
};

export default Destination;