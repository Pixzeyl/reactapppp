// norway.js

import React from 'react';
import './norway.css'; // Make sure the path is correct for your project
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Norway = () => {
    return (
        <div>
            <header>
                <img
                    src="https://plus.unsplash.com/premium_photo-1689843658573-b1c234d46842?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bm9yd2F5fGVufDB8fDB8fHww"
                    alt="Norway"
                />
                <h1>Explore Norway</h1>
            </header>

            <main>
                <section>
                    <h2>Description</h2>
                    <p>
                        Norway, a Nordic country on the western portion of the Scandinavian Peninsula, is known for its dramatic landscapes, including deep coastal fjords and towering mountains. Rich in history and culture, Norway offers stunning natural beauty, vibrant cities, and a unique cultural heritage.
                    </p>
                    
                    <h2>Fun Facts</h2>
                    <ul>
                        <li>Norway is home to the world's longest road tunnel, the Lærdal Tunnel, which is 15.3 miles long.</li>
                        <li>The country has more than 1,000 fjords, with Geirangerfjord and Nærøyfjord being among the most famous.</li>
                        <li>Norwegians enjoy a high standard of living, often ranking among the happiest people in the world.</li>
                    </ul>

                    <h2>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $100</li>
                        <li>Mid: $200</li>
                        <li>High: $600+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Purchase an Oslo Pass for free entry to attractions and unlimited public transport.</li>
                        <li>Eat at local bakeries and supermarkets for affordable meals.</li>
                        <li>Take advantage of free outdoor activities, such as hiking and visiting parks.</li>
                    </ul>

                    <h2>Best Time to Visit</h2>
                    <p>
                        The best time to visit Norway is during the summer months (June to August) when the weather is warm and ideal for outdoor activities.
                    </p>

                    <h2>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Oslo</h3>
                            <p>The capital city, known for its green spaces, museums, and vibrant cultural scene.</p>
                        </li>
                        <li>
                            <h3>Fjord Norway</h3>
                            <p>A stunning region characterized by majestic fjords, ideal for hiking and exploring.</p>
                        </li>
                        <li>
                            <h3>Bergen</h3>
                            <p>A picturesque city known for its colorful wooden houses and gateway to the fjords.</p>
                        </li>
                    </ul>
                    
                    <h2>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Rakfisk</h3>
                            <p>A traditional dish made from fermented trout, served with flatbread and potatoes.</p>
                        </li>
                        <li>
                            <h3>Kjøttkaker</h3>
                            <p>Norwegian meatballs served with potatoes and brown sauce.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Fjord Restaurant</li>
                        <li>Mathallen Oslo</li>
                        <li>Restaurant 1877</li>
                    </ul>

                    <h2>Activities and Experiences</h2>
                    <ul>
                        <li>Take a scenic train ride on the Flåm Railway.</li>
                        <li>Experience the Northern Lights in Tromsø during winter.</li>
                        <li>Explore the Lofoten Islands for breathtaking scenery and outdoor activities.</li>
                    </ul>

                    <h2>Transportation Tips</h2>
                    <p>
                        Norway has an excellent public transport system, including trains, buses, and ferries. 
                        Consider getting a rail pass if traveling extensively by train.
                    </p>

                    <h2>Safety Tips</h2>
                    <ul>
                        <li>Norway is generally very safe, but be cautious when hiking in remote areas.</li>
                        <li>Keep your belongings secure, especially in crowded tourist spots.</li>
                        <li>Learn basic Norwegian phrases to enhance your experience.</li>
                    </ul>

                    <h2>Packing Suggestions</h2>
                    <ul>
                        <li>Layered clothing to adjust to changing weather.</li>
                        <li>Comfortable hiking shoes for outdoor adventures.</li>
                        <li>A power adapter for your electronics.</li>
                    </ul>

                    <section className="map-container">
                        <h2>Explore on the Map</h2>
                        <MapContainer center={[60.4720, 8.4689]} zoom={5} style={{ height: '400px', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[60.4720, 8.4689]}>
                                <Popup>
                                    <b>Norway</b><br />
                                    Land of stunning fjords and northern lights!
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Norway;
