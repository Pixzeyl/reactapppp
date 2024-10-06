import React, { useEffect } from 'react';
import './rome.css';
import L from 'leaflet';

const Rome = () => {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map').setView([41.9028, 12.4964], 12); // Center the map on Rome

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const marker = L.marker([41.9028, 12.4964]).addTo(map)
            .bindPopup('<b>Rome</b><br>The Eternal City filled with history and culture!')
            .openPopup();
    }, []);

    return (
        <div>
            <header>
                <img src="https://images.unsplash.com/photo-1536140012599-830a641c27e6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJvbWV8ZW58MHx8MHx8fDA%3D" alt="Rome" />
                <h1>Explore Rome</h1>
            </header>

            <main>
                <section>
                    <h2>Description</h2>
                    <p>Rome, the capital of Italy, is a city rich in history, art, and culture. Known as the "Eternal City," it boasts ancient landmarks, stunning architecture, and a vibrant atmosphere that attracts millions of visitors each year.</p>

                    <h2>Fun Facts</h2>
                    <ul>
                        <li>Rome is home to the smallest country in the world, Vatican City.</li>
                        <li>The city has over 2,500 years of globally influential art, architecture, and culture.</li>
                        <li>Rome's public water fountains provide free drinking water throughout the city.</li>
                    </ul>

                    <h2>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $70</li>
                        <li>Mid: $130</li>
                        <li>High: $400+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Visit museums on the first Sunday of the month for free entry.</li>
                        <li>Enjoy meals at local trattorias for authentic Italian cuisine at lower prices.</li>
                        <li>Explore the city on foot to save on transportation costs.</li>
                    </ul>

                    <h2>Best Time to Visit</h2>
                    <p>The best time to visit Rome is in the spring (April to June) and fall (September to October) when the weather is mild and crowds are smaller.</p>
                    <p>Be sure to check out the Festa della Primavera (Spring Festival) in April!</p>

                    <h2>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Colosseum</h3>
                            <p>An iconic symbol of Rome, the Colosseum is a must-visit ancient amphitheater.</p>
                        </li>
                        <li>
                            <h3>Vatican City</h3>
                            <p>The world's smallest independent state, home to St. Peter's Basilica and the Sistine Chapel.</p>
                        </li>
                        <li>
                            <h3>Roman Forum</h3>
                            <p>Once the center of Roman public life, the Forum is a fascinating area to explore.</p>
                        </li>
                    </ul>

                    <h2>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Carbonara</h3>
                            <p>A classic Roman pasta dish made with eggs, cheese, pancetta, and pepper.</p>
                        </li>
                        <li>
                            <h3>Supplì</h3>
                            <p>Delicious rice balls filled with mozzarella and coated in breadcrumbs.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Trattoria Da Enzo al 29</li>
                        <li>Roscioli</li>
                        <li>Pizzeria La Montecarlo</li>
                    </ul>

                    <h2>Activities and Experiences</h2>
                    <ul>
                        <li>Take a guided tour of the Vatican Museums and Sistine Chapel.</li>
                        <li>Stroll through the picturesque streets of Trastevere.</li>
                        <li>Visit the beautiful Villa Borghese gardens.</li>
                    </ul>

                    <h2>Transportation Tips</h2>
                    <p>Rome has an extensive public transport system including buses and metro. Consider getting a Roma Pass for unlimited travel and discounts on attractions.</p>

                    <h2>Safety Tips</h2>
                    <ul>
                        <li>Keep an eye on your belongings, especially in crowded areas.</li>
                        <li>Be cautious of pickpockets in tourist hotspots.</li>
                        <li>Learn a few basic Italian phrases to help with communication.</li>
                    </ul>

                    <h2>Packing Suggestions</h2>
                    <ul>
                        <li>Comfortable walking shoes for exploring the city.</li>
                        <li>A light jacket for cooler evenings, especially in spring and fall.</li>
                        <li>Power adapter for electronic devices.</li>
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

export default Rome;
