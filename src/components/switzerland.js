// switzerland.js

import React from 'react';
import './switzerland.css'; // Make sure the path is correct for your project
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Switzerland = () => {
    return (
        <div>
            <header>
                <img
                    src="https://images.unsplash.com/photo-1516490701444-1daf45984537?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN3aXR6ZXJsYW5kfGVufDB8fDB8fHww"
                    alt="Switzerland"
                />
                <h1>Explore Switzerland</h1>
            </header>

            <main>
                <section>
                    <h2>Description</h2>
                    <p>
                        Switzerland, a landlocked country in Central Europe, is known for its stunning landscapes,
                        picturesque villages, and vibrant cities. Famous for its mountains, chocolate, and watches,
                        Switzerland offers a blend of cultural influences and breathtaking natural beauty.
                    </p>

                    <h2>Fun Facts</h2>
                    <ul>
                        <li>Switzerland has four national languages: German, French, Italian, and Romansh.</li>
                        <li>The country is home to over 1,500 lakes, including Lake Geneva and Lake Zurich.</li>
                        <li>Switzerland is known for its neutrality and has not been involved in any military conflicts since 1815.</li>
                    </ul>

                    <h2>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $90</li>
                        <li>Mid: $150</li>
                        <li>High: $500+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Buy a Swiss Travel Pass for unlimited travel on public transport.</li>
                        <li>Shop at supermarkets for affordable meals and snacks.</li>
                        <li>Visit free attractions, such as parks and hiking trails.</li>
                    </ul>

                    <h2>Best Time to Visit</h2>
                    <p>
                        The best time to visit Switzerland is during the spring (April to June) and fall (September to
                        October) when the weather is pleasant and the landscapes are beautiful.
                    </p>

                    <h2>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Zermatt and the Matterhorn</h3>
                            <p>A charming mountain village known for its skiing and views of the iconic Matterhorn peak.</p>
                        </li>
                        <li>
                            <h3>Lake Geneva</h3>
                            <p>A stunning lake surrounded by vineyards and the city of Geneva, offering picturesque views.</p>
                        </li>
                        <li>
                            <h3>Lucerne</h3>
                            <p>A beautiful city with a stunning lake and mountain views, famous for its preserved medieval architecture.</p>
                        </li>
                    </ul>

                    <h2>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Fondue</h3>
                            <p>A traditional Swiss dish made by melting cheese and enjoyed by dipping bread into the mixture.</p>
                        </li>
                        <li>
                            <h3>Rösti</h3>
                            <p>A Swiss potato dish similar to hash browns, typically served as a side dish.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>Restaurant Swiss Chuchi</li>
                        <li>St. Pierre</li>
                        <li>Chalet de la Forclaz</li>
                    </ul>

                    <h2>Activities and Experiences</h2>
                    <ul>
                        <li>Take a scenic train ride on the Glacier Express.</li>
                        <li>Explore the charming villages of the Swiss Alps.</li>
                        <li>Visit the stunning Swiss National Park for hiking and wildlife watching.</li>
                    </ul>

                    <h2>Transportation Tips</h2>
                    <p>
                        Switzerland has an efficient public transport system, including trains, buses, and boats. 
                        Consider purchasing a Swiss Travel Pass for unlimited travel.
                    </p>

                    <h2>Safety Tips</h2>
                    <ul>
                        <li>Switzerland is generally very safe, but remain vigilant in crowded areas.</li>
                        <li>Keep an eye on your belongings in busy tourist spots.</li>
                        <li>Learn basic phrases in the local languages to enhance your experience.</li>
                    </ul>

                    <h2>Packing Suggestions</h2>
                    <ul>
                        <li>Comfortable hiking shoes for exploring the mountains.</li>
                        <li>A warm jacket, especially if visiting during winter.</li>
                        <li>A power adapter for electronic devices.</li>
                    </ul>

                    <section className="map-container">
                        <h2>Explore on the Map</h2>
                        <MapContainer center={[46.8182, 8.2275]} zoom={7} style={{ height: '400px', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[46.8182, 8.2275]}>
                                <Popup>
                                    <b>Switzerland</b><br />
                                    The land of mountains, chocolate, and watches!
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </section>
                </section>
            </main>
        </div>
    );
};

export default Switzerland;
