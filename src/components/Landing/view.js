import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faGlassCheers, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import SpotCard from './Components/SpotCard';

const View = props => {
  return (
    <div className="Landing">
      <div className="Landing-hero">

      </div>
      <section className="Landing-how-it-works">
        <h1>Welcome to Galactic</h1>
        <p>
          Cheers offers subscription plans to local bars in your city. Subscribe and drink freely at your favorite spots
        </p>
        <div className="Landing-how-cards">
          <div className="Landing-how-card">
            <FontAwesomeIcon icon={faMobileAlt} />
            <p>
              Subscribe to a bar of group of bars
            </p>
          </div>
          <div className="Landing-how-card">
            <FontAwesomeIcon icon={faIdCard} />
            <p>
              Show your Cheers ID (through our website or with the the cheers card we mail you)
            </p>
          </div>
          <div className="Landing-how-card">
            <FontAwesomeIcon icon={faGlassCheers} />
            <p>
              Get served and enjoy a seamless night out with no bar tab or tipping
            </p>
          </div>
        </div>
      </section>

      <section className="Landing-browse">
        <button className="Landing-button">
          Search Subscription Plans
        </button>
      </section>

      <section className="Landing-featured">
        <h1>Galactic launches in Jersey City</h1>
        <h2>Featured spots</h2>
        <div className="Landing-featured-spots">
          <SpotCard
            name="South House"
            address1="149 Newark Ave"
            address2="Jersey City, NJ 07302"
            image="http://haveanight.com/assets/images/uploads/2017/June/20170613193925_southhousebarapproved_600.jpg"
          />
          <SpotCard
            name="The Ashford"
            address1="145 Newark Ave"
            address2="Jersey City, NJ 07302"
            image="https://s3-media0.fl.yelpcdn.com/bphoto/3H0fNy7_yMZa3JnQJzYOOQ/o.jpg"
          />
          <SpotCard
            name="Porta"
            address1="135 Newark Ave"
            address2="Jersey City, NJ 07302"
            image="https://cdn.theculturetrip.com/wp-content/uploads/2018/02/portajc_rooftop2_andrewholtz.jpg"
          />
        </div>
      </section>
    </div>
  );
}

export default View;
