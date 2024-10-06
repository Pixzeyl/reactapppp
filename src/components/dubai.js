import React from 'react';
import './dubai.css'; // Assuming styles are in a CSS file
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Dubai = () => {
    React.useEffect(() => {
        const map = L.map('map').setView([25.276987, 55.296249], 12); // Center the map on Dubai

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker = L.marker([25.276987, 55.296249]).addTo(map)
            .bindPopup('<b>Dubai</b><br>The dazzling city of innovation and luxury!')
            .openPopup();
    }, []);

    return (
        <div>
            <header>
                <img 
                    src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D" 
                    alt="Dubai" 
                    style={{ width: '100%', height: 'auto', filter: 'brightness(50%)', position: 'absolute', top: 0, left: 0, zIndex: -1 }} 
                />
                <h1 style={{ color: 'white', textAlign: 'center', position: 'relative', zIndex: 1, padding: '20px' }}>Explore Dubai</h1>
            </header>

            <main style={{ display: 'flex', width: '100%' }}>
                <section style={{ padding: '20px', margin: '10px', backgroundColor: 'white', borderRadius: '8px', flex: 2, height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
                    <h2 style={{ color: '#ff6f61' }}>Description</h2>
                    <p>Dubai is a vibrant city in the United Arab Emirates known for its modern architecture, luxury shopping, and lively nightlife. From the iconic Burj Khalifa to the beautiful beaches, Dubai offers a unique blend of culture and modernity.</p>

                    <h2 style={{ color: '#ff6f61' }}>Fun Facts</h2>
                    <ul>
                        <li>Dubai is home to the world’s tallest building, the Burj Khalifa, which stands at 828 meters.</li>
                        <li>The city has over 200 nationalities living and working in it.</li>
                        <li>Dubai hosts the world's largest shopping mall, the Dubai Mall.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $80</li>
                        <li>Mid: $150</li>
                        <li>High: $500+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Use public transportation like the Metro for affordable travel.</li>
                        <li>Explore free attractions such as the Dubai Fountain and public beaches.</li>
                        <li>Eat at local restaurants for a more authentic and budget-friendly experience.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Best Time to Visit</h2>
                    <p>The best time to visit Dubai is from November to March when the weather is cooler and more pleasant.</p>
                    <p>Don't miss the Dubai Shopping Festival in January for amazing deals and events!</p>

                    <h2 style={{ color: '#ff6f61' }}>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Burj Khalifa</h3>
                            <p>Visit the observation deck on the 148th floor for breathtaking views of the city.</p>
                        </li>
                        <li>
                            <h3>The Dubai Mall</h3>
                            <p>A shopping paradise with over 1,200 shops, an aquarium, and an ice rink.</p>
                        </li>
                        <li>
                            <h3>Dubai Marina</h3>
                            <p>A stunning waterfront with dining, shopping, and leisure options.</p>
                        </li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Shawarma</h3>
                            <p>A popular Middle Eastern wrap filled with marinated meat and fresh vegetables.</p>
                        </li>
                        <li>
                            <h3>Hummus</h3>
                            <p>A delicious dip made from chickpeas, often served with pita bread.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Al Mallah</li>
                        <li>Ravi Restaurant</li>
                        <li>Dubai Fish Market</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Activities and Experiences</h2>
                    <ul>
                        <li>Take a desert safari for an adventurous experience.</li>
                        <li>Visit the historic Al Fahidi neighborhood for a glimpse into Dubai's past.</li>
                        <li>Enjoy a cruise along the Dubai Creek for stunning views.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Transportation Tips</h2>
                    <p>Dubai has an efficient public transportation system, including the Metro, buses, and taxis. Consider getting a Nol card for seamless travel.</p>

                    <h2 style={{ color: '#ff6f61' }}>Safety Tips</h2>
                    <ul>
                        <li>Dubai is considered one of the safest cities in the world, but always remain aware of your surroundings.</li>
                        <li>Respect local customs, especially regarding dress codes in public places.</li>
                        <li>Follow local laws to ensure a hassle-free experience.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Packing Suggestions</h2>
                    <ul>
                        <li>Lightweight, breathable clothing suitable for warm weather.</li>
                        <li>Comfortable shoes for walking and exploring.</li>
                        <li>A swimsuit if you plan to enjoy the beaches or hotel pools.</li>
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

export default Dubai;
