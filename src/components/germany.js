import React, { useEffect } from 'react';
import './germany.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Germany = () => {
    useEffect(() => {
        // Initialize the map
        const map = L.map('map').setView([51.1657, 10.4515], 6); // Center the map on Germany

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const marker = L.marker([52.5200, 13.4050]).addTo(map) // Berlin coordinates
            .bindPopup('<b>Berlin</b><br>The capital city known for its history and culture!')
            .openPopup();
    }, []);

    return (
        <div>
            <header>
                <img src="https://plus.unsplash.com/premium_photo-1719843507763-9dcd405f9619?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGdlcm1hbnl8ZW58MHx8MHx8fDA%3D" alt="Germany" />
                <h1>Explore Germany</h1>
            </header>

            <main>
                <section>
                    <h2>Description</h2>
                    <p>Germany, known for its rich history, diverse culture, and stunning landscapes, is a country located in Central Europe. Famous for its beer, sausages, and fairy-tale castles, Germany offers visitors a unique blend of modern cities and picturesque villages.</p>

                    <h2>Fun Facts</h2>
                    <ul>
                        <li>Germany is home to over 1,500 breweries, producing more than 5,000 types of beer.</li>
                        <li>The country has over 25,000 castles, many of which are open to the public.</li>
                        <li>Germany is known for its annual Oktoberfest, the largest beer festival in the world.</li>
                    </ul>

                    <h2>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $70</li>
                        <li>Mid: $120</li>
                        <li>High: $350+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Try local street food for affordable meals.</li>
                        <li>Consider getting a Germany Rail Pass for travel across the country.</li>
                        <li>Use public transportation, which is efficient and budget-friendly.</li>
                    </ul>

                    <h2>Best Time to Visit</h2>
                    <p>The best time to visit Germany is during late spring (May to June) and early autumn (September to October) when the weather is pleasant, and festivals are abundant.</p>

                    <h2>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Berlin</h3>
                            <p>The capital city, known for its historical significance, vibrant culture, and iconic landmarks like the Brandenburg Gate.</p>
                        </li>
                        <li>
                            <h3>Neuschwanstein Castle</h3>
                            <p>A fairy-tale castle nestled in the Bavarian Alps, often visited by tourists from around the world.</p>
                        </li>
                        <li>
                            <h3>Munich</h3>
                            <p>The capital of Bavaria, famous for its beer gardens, museums, and the annual Oktoberfest celebration.</p>
                        </li>
                    </ul>

                    <h2>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Bratwurst</h3>
                            <p>A famous German sausage often grilled and served with mustard.</p>
                        </li>
                        <li>
                            <h3>Sauerkraut</h3>
                            <p>Fermented cabbage that is a staple in German cuisine.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Zur letzten Instanz</li>
                        <li>Schwarzes Café</li>
                        <li>Paulaner Bräuhaus</li>
                    </ul>

                    <h2>Activities and Experiences</h2>
                    <ul>
                        <li>Take a guided tour of the Berlin Wall and learn about its history.</li>
                        <li>Explore the scenic Romantic Road, dotted with charming towns and vineyards.</li>
                        <li>Attend a local festival to experience traditional German culture.</li>
                    </ul>

                    <h2>Transportation Tips</h2>
                    <p>Germany has an efficient and reliable public transport system, including trains, trams, and buses. Consider using the Deutsche Bahn app for train schedules and tickets.</p>

                    <h2>Safety Tips</h2>
                    <ul>
                        <li>Germany is generally safe, but always stay aware of your surroundings in crowded areas.</li>
                        <li>Follow local laws and regulations, especially regarding alcohol consumption in public.</li>
                        <li>Learn a few basic German phrases to help with communication.</li>
                    </ul>

                    <h2>Packing Suggestions</h2>
                    <ul>
                        <li>Dress in layers, especially if traveling during spring or fall.</li>
                        <li>Comfortable shoes for walking and exploring cities.</li>
                        <li>A power adapter for European electrical outlets.</li>
                    </ul>

                    <section className="map-container">
                        <h2>Explore on the Map</h2>
                        <div id="map" className="map" style={{ width: '100%', height: '400px' }}></div>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Germany;
