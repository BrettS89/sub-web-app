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
        <Link to="/spots" className="Landing-button">
          Search Subscription Plans
        </Link>
      </section>

      <section className="Landing-featured">
        <h1>Paradyse launches in Jersey City</h1>
        <h2>Featured spots</h2>
        <div className="Landing-featured-spots">
          {/* <SpotCard
            name="Lackawanna Coffee"
            address1="Jersey City 07302"
            image="https://images.squarespace-cdn.com/content/v1/589cbe71e58c62750d51757b/1533735656592-C4VKLQA2QOHWRL01BND4/ke17ZwdGBToddI8pDm48kLkXF2pIyv_F2eUT9F60jBl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0iyqMbMesKd95J-X4EagrgU9L3Sa3U8cogeb0tjXbfawd0urKshkc5MgdBeJmALQKw/Lackawanna-Jersey+City+Coffee+Shops+Shoot-6747.jpg?format=2500w"
          /> */}
          <SpotCard
            name="Busy Bee Organics"
            address1="Jersey City 07307"
            image="https://d2u9o92zfq28vl.cloudfront.net/159598306707920190904225320_ScreenShot20190904at63021PM.jpg"
          />
          {/* <SpotCard
            name="Porta"
            address1="Jersey City 07302"
            image="https://cdn.theculturetrip.com/wp-content/uploads/2018/02/portajc_rooftop2_andrewholtz.jpg"
          /> */}
        </div>
      </section>
      <section className="Landing-footer">
        <div>
          <span><Link to="/company/add" style={{ color: 'white' }}>For businesses</Link></span>
          <span>About</span>
          <span><Link to="/contact" style={{ color: 'white' }}>Contact</Link></span>
        </div>
        <div className="Landing-footer-logo">
          Paradyse
        </div>
      </section>
    </div>
  );
}

export default View;
