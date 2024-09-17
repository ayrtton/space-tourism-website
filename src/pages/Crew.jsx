import PropTypes from 'prop-types';

function Crew(props) {
    return (
        <main className="crew">
            <div className="crew__content">
                <h1 className="crew__title">
                    <span className="destination__title-number">02</span> 
                    Meet Your Crew
                </h1>
                <div className="crew__info">
                    <div className="crew__text">
                        <h2 className="crew__text-role">{props.crew[0].role}</h2>
                        <h1 className="crew__text-name">{props.crew[0].name}</h1>
                        <p className="crew__text-bio">{props.crew[0].bio}</p>
                    </div>
                    <div className="crew__illustration">
                        <img className="crew__illustration-image" src={props.crew[0].images.png} alt="Crew Image"></img>
                    </div>
                </div>
            </div>
        </main>
    );
}

Crew.propTypes = {
    crew: PropTypes.object
};

export default Crew;