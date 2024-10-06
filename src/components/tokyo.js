import React, { useEffect } from 'react';
import './tokyo.css'; // Import your CSS file
import L from 'leaflet';

const Tokyo = () => {
    useEffect(() => {
        // Initialize the Leaflet map
        const map = L.map('map').setView([35.6762, 139.6503], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([35.6762, 139.6503])
            .addTo(map)
            .bindPopup('<b>Tokyo</b><br>This is the vibrant capital of Japan!')
            .openPopup();
    }, []); // Empty dependency array ensures this runs once after component mounts

    return (
        <div>
            <header>
                <img 
                    src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8fDA%3D" 
                    alt="Tokyo" 
                    style={{ width: '100%', filter: 'brightness(50%)', position: 'absolute', top: 0, left: 0, zIndex: -1 }} 
                />
                <h1 style={{ position: 'relative', zIndex: 1, padding: '20px', color: 'white', textAlign: 'center' }}>Explore Tokyo</h1>
            </header>

            <main style={{ display: 'flex', width: '100%' }}>
                <section style={{ padding: '20px', margin: '10px', backgroundColor: 'white', borderRadius: '8px', flex: 2, height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
                    <h2 style={{ color: '#ff6f61' }}>Description</h2>
                    <p>Tokyo, the bustling capital of Japan, is a vibrant metropolis blending the ultramodern with traditional culture. From neon-lit skyscrapers to historic temples, Tokyo offers a unique experience for every traveler.</p>
                    
                    <h2 style={{ color: '#ff6f61' }}>Fun Facts</h2>
                    <ul>
                        <li>Tokyo is the most populous metropolitan area in the world.</li>
                        <li>The city was originally known as Edo before being renamed Tokyo in 1868.</li>
                        <li>Tokyo has more Michelin-starred restaurants than any other city.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $70</li>
                        <li>Mid: $150</li>
                        <li>High: $400+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Get a Suica or Pasmo card for easy travel on public transport.</li>
                        <li>Visit free attractions like the Senso-ji Temple and parks.</li>
                        <li>Try inexpensive local food at konbini (convenience stores).</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Best Time to Visit</h2>
                    <p>The best times to visit Tokyo are during spring (March to May) for cherry blossoms and fall (September to November) for beautiful foliage.</p>
                    <p>Don't miss the Hanami (flower viewing) parties in the parks during cherry blossom season!</p>

                    <h2 style={{ color: '#ff6f61' }}>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Shinjuku Gyoen National Garden</h3>
                            <p>A beautiful park known for its cherry blossoms and serene landscapes.</p>
                        </li>
                        <li>
                            <h3>Tokyo Tower</h3>
                            <p>A symbol of Tokyo, offering stunning views from its observation decks.</p>
                        </li>
                        <li>
                            <h3>Meiji Shrine</h3>
                            <p>A tranquil Shinto shrine surrounded by a beautiful forested area.</p>
                        </li>
                    </ul>
                    
                    <h2 style={{ color: '#ff6f61' }}>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Sushi</h3>
                            <p>Fresh seafood delicacies, often served as nigiri or in rolls.</p>
                        </li>
                        <li>
                            <h3>Ramen</h3>
                            <p>A popular noodle soup dish, available in various regional styles.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Sukiyabashi Jiro</li>
                        <li>Ichiran Ramen</li>
                        <li>Tsukiji Outer Market</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Activities and Experiences</h2>
                    <ul>
                        <li>Explore the historic Asakusa district.</li>
                        <li>Participate in a traditional tea ceremony.</li>
                        <li>Visit the bustling streets of Harajuku for shopping and fashion.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Transportation Tips</h2>
                    <p>Tokyo has an extensive and efficient public transportation system, including subways, trains, and buses. Purchasing a prepaid card can save you time and hassle.</p>

                    <h2 style={{ color: '#ff6f61' }}>Safety Tips</h2>
                    <ul>
                        <li>Japan is generally very safe, but remain aware of your belongings.</li>
                        <li>Be respectful of local customs, especially in temples and shrines.</li>
                        <li>Learn a few basic Japanese phrases; locals appreciate the effort.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Packing Suggestions</h2>
                    <ul>
                        <li>Comfortable shoes for walking and exploring the city.</li>
                        <li>A power adapter for your electronics.</li>
                        <li>Light layers for the varying weather conditions.</li>
                    </ul>

                    <section className="map-container" style={{ margin: '20px 0' }}>
                        <h2 style={{ color: '#ff6f61' }}>Explore on the Map</h2>
                        <div id="map" className="map" style={{ width: '100%', height: '400px' }}></div>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Tokyo;
