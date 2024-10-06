import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './london.css';

const London = () => {
    useEffect(() => {
        const map = L.map('map').setView([51.5074, -0.1278], 12); // Center the map on London

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([51.5074, -0.1278]).addTo(map)
            .bindPopup('<b>London</b><br>The bustling capital of the UK!')
            .openPopup();
    }, []);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, backgroundColor: '#f4f4f4', display: 'flex' }}>
            <header style={{ position: 'relative', color: 'white', textAlign: 'center', width: '100%' }}>
                <img src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fHww" 
                     alt="London" style={{ width: '100%', height: 'auto', filter: 'brightness(50%)', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
                <h1 style={{ position: 'relative', zIndex: 1, padding: '20px' }}>Explore London</h1>
            </header>

            <main style={{ display: 'flex', width: '100%' }}>
                <section style={{ padding: '20px', margin: '10px', backgroundColor: 'white', borderRadius: '8px', flex: 2, height: 'calc(100vh - 80px)', overflowY: 'auto' }}>
                    <h2 style={{ color: '#ff6f61' }}>Description</h2>
                    <p>London, the capital of England, is a vibrant city known for its rich history, cultural diversity, and iconic landmarks. From the Tower of London to Buckingham Palace, there's always something to explore.</p>
                    
                    <h2 style={{ color: '#ff6f61' }}>Fun Facts</h2>
                    <ul>
                        <li>London has over 170 museums, many of which are free to enter.</li>
                        <li>The city is home to the world's largest city square, Trafalgar Square.</li>
                        <li>Big Ben is actually the name of the bell, not the clock tower!</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $90</li>
                        <li>Mid: $180</li>
                        <li>High: $600+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Get an Oyster card for discounted travel on public transport.</li>
                        <li>Explore the many free attractions like parks and galleries.</li>
                        <li>Consider eating at food markets for delicious and affordable meals.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Best Time to Visit</h2>
                    <p>The best time to visit London is during spring (March to May) and fall (September to November) for mild weather and fewer tourists.</p>
                    <p>Check out the Notting Hill Carnival in August for a vibrant cultural experience!</p>

                    <h2 style={{ color: '#ff6f61' }}>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>The British Museum</h3>
                            <p>Home to a vast collection of world art and artifacts, it's a must-visit for history lovers.</p>
                        </li>
                        <li>
                            <h3>The Tower of London</h3>
                            <p>A historic castle that has served various purposes, including a royal palace and prison.</p>
                        </li>
                        <li>
                            <h3>The London Eye</h3>
                            <p>An iconic giant Ferris wheel offering stunning views of the city skyline.</p>
                        </li>
                    </ul>
                    
                    <h2 style={{ color: '#ff6f61' }}>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Fish and Chips</h3>
                            <p>A classic British dish consisting of battered fish and fried potatoes, often served with mushy peas.</p>
                        </li>
                        <li>
                            <h3>Full English Breakfast</h3>
                            <p>A hearty breakfast featuring eggs, bacon, sausages, beans, and toast.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Dishoom</li>
                        <li>The Ivy</li>
                        <li>Borough Market</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Activities and Experiences</h2>
                    <ul>
                        <li>Take a leisurely walk along the Thames River.</li>
                        <li>Visit the vibrant markets of Camden Town.</li>
                        <li>Experience a West End theatre show for top-notch entertainment.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Transportation Tips</h2>
                    <p>London's public transport system is extensive, including buses, trains, and the Underground. The Oyster card offers convenience and savings.</p>

                    <h2 style={{ color: '#ff6f61' }}>Safety Tips</h2>
                    <ul>
                        <li>London is generally safe, but stay alert in crowded areas.</li>
                        <li>Be cautious of pickpockets, especially in tourist spots.</li>
                        <li>Follow local laws and regulations to ensure a smooth visit.</li>
                    </ul>

                    <h2 style={{ color: '#ff6f61' }}>Packing Suggestions</h2>
                    <ul>
                        <li>Layered clothing for variable weather, including a waterproof jacket.</li>
                        <li>A comfortable pair of walking shoes for exploring the city.</li>
                        <li>An umbrella or raincoat, as London weather can be unpredictable.</li>
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

export default London;
