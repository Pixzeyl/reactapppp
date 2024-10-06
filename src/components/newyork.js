import React, { useEffect } from 'react';
import './newyork.css'; // Assuming styles.css is in the same directory
import 'leaflet/dist/leaflet.css';

const NewYork = () => {
    useEffect(() => {
        // Initialize the map when the component mounts
        const L = require('leaflet');
        const map = L.map('map').setView([40.7128, -74.0060], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([40.7128, -74.0060]).addTo(map)
            .bindPopup('<b>New York City</b><br>This is New York, the City that Never Sleeps!')
            .openPopup();
    }, []);

    return (
        <div>
            <header>
                <img src="https://images.unsplash.com/photo-1541336032412-2048a678540d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTI5eW9ya3xlbnwwfHwwfHx8MA%3D%3D" alt="New York" />
                <h1>Explore New York</h1>
            </header>

            <main>
                <section>
                    <h2>Description</h2>
                    <p>New York City, often called the Big Apple, is known for its iconic skyline, cultural diversity, and vibrant energy. It’s a global hub for finance, art, and fashion.</p>

                    <h2>Fun Facts</h2>
                    <ul>
                        <li>The Statue of Liberty was a gift from France in 1886.</li>
                        <li>Central Park is larger than the principality of Monaco.</li>
                        <li>There are over 800 languages spoken in New York City!</li>
                    </ul>

                    <h2>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $80</li>
                        <li>Mid: $150</li>
                        <li>High: $300+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Use a MetroCard for public transport.</li>
                        <li>Visit free attractions like Central Park and the Staten Island Ferry.</li>
                        <li>Eat at food trucks and local delis for affordable meals.</li>
                    </ul>

                    <h2>Best Time to Visit</h2>
                    <p>The best times to visit New York City are in the spring (April to June) and fall (September to November) for pleasant weather and fewer crowds.</p>
                    <p>Don't miss the Thanksgiving Parade and the New Year's Eve celebration in Times Square!</p>

                    <h2>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Statue of Liberty</h3>
                            <p>A symbol of freedom and democracy, located on Liberty Island.</p>
                        </li>
                        <li>
                            <h3>Central Park</h3>
                            <p>A sprawling green oasis in the heart of Manhattan.</p>
                        </li>
                        <li>
                            <h3>Times Square</h3>
                            <p>The bustling center of entertainment and commerce, known for its bright lights and Broadway shows.</p>
                        </li>
                    </ul>

                    <h2>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>New York-style Pizza</h3>
                            <p>Thin-crust pizza that's crispy along its edge and soft in its center.</p>
                        </li>
                        <li>
                            <h3>Bagels</h3>
                            <p>A staple breakfast item, often enjoyed with cream cheese and lox.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Joe's Pizza</li>
                        <li>Russ & Daughters Cafe</li>
                        <li>Katz's Delicatessen</li>
                    </ul>

                    <h2>Activities and Experiences</h2>
                    <ul>
                        <li>Visit the Metropolitan Museum of Art.</li>
                        <li>Take a walking tour of historic neighborhoods like Greenwich Village.</li>
                        <li>Enjoy a Broadway show or off-Broadway performance.</li>
                    </ul>

                    <h2>Transportation Tips</h2>
                    <p>The NYC subway system is extensive and affordable. Consider purchasing a 7-day Unlimited MetroCard if you'll be using public transport frequently.</p>

                    <h2>Safety Tips</h2>
                    <ul>
                        <li>Stay aware of your surroundings, especially in crowded areas.</li>
                        <li>Keep valuables secure and out of sight.</li>
                        <li>Use reputable taxi services or rideshare apps at night.</li>
                    </ul>

                    <h2>Packing Suggestions</h2>
                    <ul>
                        <li>Comfortable walking shoes for exploring the city.</li>
                        <li>A light jacket for the unpredictable weather.</li>
                        <li>Portable charger for your electronics.</li>
                    </ul>

                    <section className="map-container">
                        <h2>Explore on the Map</h2>
                        <div id="map" className="map"></div>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default NewYork;
