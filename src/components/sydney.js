import React, { useEffect } from 'react';
import './sydney.css'; // Ensure styles are imported correctly
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Sydney = () => {
    useEffect(() => {
        // Initialize the map when the component mounts
        const map = L.map('map').setView([-33.8678, 151.2073], 12);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-33.8678, 151.2073]).addTo(map)
            .bindPopup('<b>Sydney</b><br>The vibrant harbor city of Australia!')
            .openPopup();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div>
            <header>
                <img 
                    src="https://images.unsplash.com/photo-1530276371031-2511efff9d5a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3lkbmV5fGVufDB8fDB8fHww" 
                    alt="Sydney" 
                />
                <h1>Explore Sydney</h1>
            </header>

            <main>
                <section>
                    <h2>Description</h2>
                    <p>Sydney, Australia's largest city, is famous for its stunning harbor, iconic Sydney Opera House, and beautiful beaches. With a rich blend of cultures, Sydney offers an unforgettable experience.</p>
                    
                    <h2>Fun Facts</h2>
                    <ul>
                        <li>Sydney is home to the world-famous Sydney Opera House, a UNESCO World Heritage Site.</li>
                        <li>The Sydney Harbour Bridge is the tallest steel arch bridge in the world.</li>
                        <li>Sydney was established in 1788 as a British penal colony.</li>
                    </ul>

                    <h2>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $80</li>
                        <li>Mid: $160</li>
                        <li>High: $500+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Use public transport with an Opal card for cheaper fares.</li>
                        <li>Explore free attractions like the Royal Botanic Garden and beaches.</li>
                        <li>Visit local markets for affordable and delicious meals.</li>
                    </ul>

                    <h2>Best Time to Visit</h2>
                    <p>The best time to visit Sydney is during spring (September to November) and autumn (March to May) when the weather is mild and pleasant.</p>
                    <p>Be sure to check out events like the Sydney Festival in January!</p>

                    <h2>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Sydney Opera House</h3>
                            <p>A world-renowned architectural marvel and performance venue.</p>
                        </li>
                        <li>
                            <h3>Bondi Beach</h3>
                            <p>A popular beach destination known for its surf culture and scenic views.</p>
                        </li>
                        <li>
                            <h3>Taronga Zoo</h3>
                            <p>A zoo with a stunning view of the Sydney skyline, home to many unique animals.</p>
                        </li>
                    </ul>
                    
                    <h2>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Pavlova</h3>
                            <p>A meringue-based dessert topped with fresh fruit, a classic Australian treat.</p>
                        </li>
                        <li>
                            <h3>Meat Pie</h3>
                            <p>A savory pastry filled with minced meat and gravy, perfect for a quick snack.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Quay</li>
                        <li>Chiswick</li>
                        <li>Fish Market</li>
                    </ul>

                    <h2>Activities and Experiences</h2>
                    <ul>
                        <li>Take a ferry ride across Sydney Harbour for stunning views.</li>
                        <li>Explore the historic Rocks district and its markets.</li>
                        <li>Enjoy a coastal walk from Bondi to Coogee Beach.</li>
                    </ul>

                    <h2>Transportation Tips</h2>
                    <p>Sydney has an extensive public transport network, including trains, buses, and ferries. Consider using an Opal card for convenient travel.</p>

                    <h2>Safety Tips</h2>
                    <ul>
                        <li>Sydney is generally safe, but stay aware of your belongings in crowded areas.</li>
                        <li>Respect local wildlife, especially at beaches and parks.</li>
                        <li>Follow beach safety signs and swim between the flags.</li>
                    </ul>

                    <h2>Packing Suggestions</h2>
                    <ul>
                        <li>Light clothing for warm weather, but bring layers for cooler evenings.</li>
                        <li>A reusable water bottle to stay hydrated.</li>
                        <li>Beach gear if you plan to enjoy the sun and surf.</li>
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

export default Sydney;

