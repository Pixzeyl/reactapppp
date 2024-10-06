import React from 'react';
import './barcelona.css'; // Make sure styles.css is available in the same directory
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Barcelona = () => {
  React.useEffect(() => {
    const map = L.map('map').setView([41.3851, 2.1734], 12); // Center the map on Barcelona

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    const marker = L.marker([41.3851, 2.1734]).addTo(map)
      .bindPopup('<b>Barcelona</b><br>A vibrant city filled with art and culture!')
      .openPopup();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f4f4f4' }}>
      <header style={{ position: 'relative', color: 'white', textAlign: 'center', width: '100%' }}>
        <img 
          src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFyY2Vsb25hfGVufDB8fDB8fHww"
          alt="Barcelona"
          style={{ width: '100%', height: 'auto', filter: 'brightness(50%)', position: 'absolute', top: 0, left: 0, zIndex: -1 }} 
        />
        <h1 style={{ position: 'relative', zIndex: 1, padding: '20px' }}>Explore Barcelona</h1>
      </header>

      <main style={{ display: 'flex', width: '100%', flex: 1 }}>
        <section style={{ padding: '20px', margin: '10px', backgroundColor: 'white', borderRadius: '8px', flex: 2, height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
          <h2 style={{ color: '#ff6f61' }}>Description</h2>
          <p>Barcelona, the capital of Catalonia, is renowned for its art and architecture. The city is known for its whimsical buildings designed by Antoni Gaudí and its vibrant street life.</p>
          
          <h2>Fun Facts</h2>
          <ul>
            <li>Barcelona is famous for its unique Gaudí architecture, including the Sagrada Familia and Park Güell.</li>
            <li>The city hosts the annual La Mercè festival, celebrating the patron saint of Barcelona.</li>
            <li>Barcelona has 4.5 kilometers of beach along the Mediterranean Sea.</li>
          </ul>

          <h2>Budget Recommendations</h2>
          <h3>Estimated Daily Budget</h3>
          <ul>
            <li>Low: $60</li>
            <li>Mid: $120</li>
            <li>High: $350+</li>
          </ul>
          <h3>Money-Saving Tips</h3>
          <ul>
            <li>Visit the free attractions like Park Guell and the beach.</li>
            <li>Take advantage of the Tapas bars for affordable meals.</li>
            <li>Explore the city using public transport for cost-effective travel.</li>
          </ul>

          <h2>Best Time to Visit</h2>
          <p>The best time to visit Barcelona is in the spring (April to June) and fall (September to October) for pleasant weather and fewer tourists.</p>
          <p>Don’t miss the famous Festes de la Mercè in September!</p>

          <h2>Top Attractions</h2>
          <ul>
            <li>
              <h3>Sagrada Familia</h3>
              <p>An iconic basilica designed by Antoni Gaudí, still under construction after over 130 years.</p>
            </li>
            <li>
              <h3>Park Güell</h3>
              <p>A colorful park also designed by Gaudí, filled with artistic structures and beautiful gardens.</p>
            </li>
            <li>
              <h3>Gothic Quarter</h3>
              <p>A historic neighborhood with narrow medieval streets, featuring the Barcelona Cathedral.</p>
            </li>
          </ul>
          
          <h2>Local Cuisine</h2>
          <ul>
            <li>
              <h3>Paella</h3>
              <p>A traditional Spanish rice dish often made with seafood or meat.</p>
            </li>
            <li>
              <h3>Tapas</h3>
              <p>Small dishes served as appetizers, perfect for sharing and trying various flavors.</p>
            </li>
          </ul>
          <h3>Recommended Restaurants</h3>
          <ul>
            <li>Can Culleretes</li>
            <li>La Paradeta</li>
            <li>El Xampanyet</li>
          </ul>

          <h2>Activities and Experiences</h2>
          <ul>
            <li>Take a walking tour of the Gothic Quarter.</li>
            <li>Visit the famous Mercat de Sant Josep de la Boqueria market.</li>
            <li>Enjoy a Flamenco show for a taste of Spanish culture.</li>
          </ul>

          <h2>Transportation Tips</h2>
          <p>Barcelona has an extensive metro and bus network. Consider purchasing a T-10 ticket for multiple trips at a discount.</p>

          <h2>Safety Tips</h2>
          <ul>
            <li>Stay vigilant with your belongings, especially in crowded areas.</li>
            <li>Use reputable transport options at night.</li>
            <li>Learn a few Catalan or Spanish phrases for better communication.</li>
          </ul>

          <h2>Packing Suggestions</h2>
          <ul>
            <li>Comfortable shoes for walking around the city.</li>
            <li>Light clothing for the warm Mediterranean climate.</li>
            <li>Sun protection essentials: sunscreen, hat, and sunglasses.</li>
          </ul>

          <section className="map-container">
            <h2>Explore on the Map</h2>
            <div id="map" className="map" style={{ width: '100%', height: '400px' }}></div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default Barcelona;
