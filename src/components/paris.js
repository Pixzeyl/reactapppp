import React, { useEffect } from 'react';
import './paris.css'; // Import your styles here
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const Paris = () => {
    useEffect(() => {
        // Initialize the map when the component mounts
        const map = L.map('map').setView([48.8566, 2.3522], 12); // Center the map on Paris

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        const marker = L.marker([48.8566, 2.3522]).addTo(map)
            .bindPopup('<b>Paris</b><br>This is Paris, the City of Light!')
            .openPopup();

        return () => {
            map.remove(); // Clean up the map on component unmount
        };
    }, []);

    return (
        <div>
            <header>
                <img
                    src="https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhcmlzfGVufDB8fDB8fHww"
                    alt="Paris"
                />
                <h1>Explore Paris</h1>
            </header>

            <main>
                <section>
                    <h2>Description</h2>
                    <p>
                        Paris, the capital of France, is known for its art, fashion, and culture. Famous for its iconic landmarks like the Eiffel Tower and the Louvre, Paris is a city that blends historical elegance with modern vibrancy.
                    </p>

                    <h2>Fun Facts</h2>
                    <ul>
                        <li>The Eiffel Tower was originally intended as a temporary structure for the 1889 Exposition Universelle.</li>
                        <li>Paris is home to over 1,800 parks and gardens.</li>
                        <li>It has a rich history of artists and writers, including Picasso, Hemingway, and Van Gogh.</li>
                    </ul>

                    <h2>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: €60</li>
                        <li>Mid: €120</li>
                        <li>High: €250+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Use public transport instead of taxis.</li>
                        <li>Visit museums on free entry days.</li>
                        <li>Enjoy picnics in parks with local bakery goods.</li>
                    </ul>

                    <h2>Best Time to Visit</h2>
                    <p>
                        The ideal time to visit Paris is from April to June and September to October, when the weather is pleasant and the crowds are manageable.
                    </p>
                    <p>
                        Check out the Paris Jazz Festival in July and the Fête de la Musique in June for unique experiences!
                    </p>

                    <h2>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Eiffel Tower</h3>
                            <p>The iconic symbol of Paris, offering stunning views of the city.</p>
                        </li>
                        <li>
                            <h3>Louvre Museum</h3>
                            <p>The world's largest art museum and a historic monument.</p>
                        </li>
                        <li>
                            <h3>Notre-Dame Cathedral</h3>
                            <p>A masterpiece of French Gothic architecture, known for its stunning façade and stained glass.</p>
                        </li>
                    </ul>

                    <h2>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Coq au Vin</h3>
                            <p>A traditional French dish of chicken braised with wine, mushrooms, and lardons.</p>
                        </li>
                        <li>
                            <h3>Crêpes</h3>
                            <p>Delicious thin pancakes filled with a variety of sweet or savory ingredients.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Le Relais de l'Entrecôte</li>
                        <li>Café de Flore</li>
                        <li>Marché des Enfants Rouges</li>
                    </ul>

                    <h2>Activities and Experiences</h2>
                    <ul>
                        <li>Explore the charming Montmartre district.</li>
                        <li>Take a Seine River cruise.</li>
                        <li>Join a cooking class to learn French cuisine.</li>
                    </ul>

                    <h2>Transportation Tips</h2>
                    <p>
                        Paris has an extensive public transportation system including metros, buses, and trams. Consider purchasing a Paris Visite pass for unlimited travel.
                    </p>

                    <h2>Safety Tips</h2>
                    <ul>
                        <li>Keep your belongings secure, especially in crowded areas.</li>
                        <li>Be aware of pickpockets, particularly in tourist hotspots.</li>
                        <li>Learn a few basic French phrases; locals appreciate the effort.</li>
                    </ul>

                    <h2>Packing Suggestions</h2>
                    <ul>
                        <li>Comfortable walking shoes for exploring the city.</li>
                        <li>An umbrella or light jacket for unpredictable weather.</li>
                        <li>Travel adapter for electronics.</li>
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

export default Paris;
