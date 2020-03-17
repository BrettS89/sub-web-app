import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faThumbsUp, faStore, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import SpotCard from './Components/SpotCard';

const View = props => {
  return (
    <div className="Landing">
      <div className="Landing-hero">
        <div className="Landing-hero-container">
          <h1>
            Subscriptions to local spots
          </h1>
          <div className="Landing-hero-bottom-text">
            <h1>
              in your city
            </h1>
            <Link className="button" to="/spots">
              Browse local spots
            </Link>
          </div>
          
        </div>
      </div>
      <section className="Landing-how-it-works">
        <h1>Welcome to Paradyse</h1>
        <p>
          Paradyse offers subscription plans to local spots in your city
        </p>
        <div className="Landing-how-cards">
          <div className="Landing-how-card">
            <FontAwesomeIcon icon={faStore} />
            <p>
              Search for subscriptions from your favorite local spots
            </p>
          </div>
          <div className="Landing-how-card">
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>
              Purchase subscriptions to coffee shops, restaurants, salons and more
            </p>
          </div>
          <div className="Landing-how-card">
            <FontAwesomeIcon icon={faMobileAlt} />
            <p>
              Use the Paradyse mobile app or mobile site to display your subscription at the point of sale
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
        <h1>Paradyse launches in Jersey City</h1>
        <h2>Featured spots</h2>
        <div className="Landing-featured-spots">
          <SpotCard
            name="Lackawanna Coffee"
            address1="Jersey City 07302"
            image="http://haveanight.com/assets/images/uploads/2017/June/20170613193925_southhousebarapproved_600.jpg"
          />
          <SpotCard
            name="Buddy Whos"
            address1="Jersey City 07302"
            image="https://s3-media0.fl.yelpcdn.com/bphoto/3H0fNy7_yMZa3JnQJzYOOQ/o.jpg"
          />
          <SpotCard
            name="Porta"
            address1="Jersey City 07302"
            image="https://cdn.theculturetrip.com/wp-content/uploads/2018/02/portajc_rooftop2_andrewholtz.jpg"
          />
        </div>
      </section>
      <section className="Landing-footer">
        <div>
          <span><Link to="/company/add" style={{ color: 'white' }}>For businesses</Link></span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="Landing-footer-logo">
          Paradyse
        </div>
      </section>
    </div>
  );
}

export default View;
