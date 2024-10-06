import React from 'react';
import './netherlands.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Netherlands = () => {
    return (
        <div>
            <header>
                <img 
                    src="https://plus.unsplash.com/premium_photo-1661953958098-7988b76674c3?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG5ldGhlcmxhbmRzfGVufDB8fDB8fHww" 
                    alt="Netherlands" 
                />
                <h1>Explore the Netherlands</h1>
            </header>

            <main>
                <section>
                    <h2>Description</h2>
                    <p>
                        The Netherlands, known for its flat landscape of canals, tulip fields, windmills, and cycling routes, 
                        is a vibrant country rich in history and culture. Its capital, Amsterdam, is famous for its artistic 
                        heritage, elaborate canal system, and narrow houses with gabled facades.
                    </p>

                    <h2>Fun Facts</h2>
                    <ul>
                        <li>The Netherlands has over 1,000 windmills, many of which are still operational.</li>
                        <li>It is the world’s second-largest exporter of food and agricultural products.</li>
                        <li>The Dutch are known for their cycling culture, with more bicycles than residents.</li>
                    </ul>

                    <h2>Budget Recommendations</h2>
                    <h3>Estimated Daily Budget</h3>
                    <ul>
                        <li>Low: $80</li>
                        <li>Mid: $150</li>
                        <li>High: $400+</li>
                    </ul>
                    <h3>Money-Saving Tips</h3>
                    <ul>
                        <li>Consider getting an I Amsterdam City Card for free entry to many attractions and public transport.</li>
                        <li>Eat at local markets or grab snacks from street vendors for affordable meals.</li>
                        <li>Take advantage of free activities like exploring parks and walking along the canals.</li>
                    </ul>

                    <h2>Best Time to Visit</h2>
                    <p>The best time to visit the Netherlands is during the spring (April to May) when the tulip fields are in bloom and the weather is pleasant.</p>

                    <h2>Top Attractions</h2>
                    <ul>
                        <li>
                            <h3>Amsterdam</h3>
                            <p>The capital city, known for its artistic heritage, canals, and museums like the Van Gogh Museum.</p>
                        </li>
                        <li>
                            <h3>Keukenhof</h3>
                            <p>The famous flower garden, open from mid-March to mid-May, showcasing millions of tulips.</p>
                        </li>
                        <li>
                            <h3>Giethoorn</h3>
                            <p>A picturesque village known as the "Venice of the North," famous for its canals and thatched-roof houses.</p>
                        </li>
                    </ul>

                    <h2>Local Cuisine</h2>
                    <ul>
                        <li>
                            <h3>Stroopwafels</h3>
                            <p>Delicious syrup-filled waffles that are a popular Dutch treat.</p>
                        </li>
                        <li>
                            <h3>Haring</h3>
                            <p>Raw herring fish, typically served with onions and pickles, eaten by holding it by the tail.</p>
                        </li>
                    </ul>
                    <h3>Recommended Restaurants</h3>
                    <ul>
                        <li>De Silveren Spiegel</li>
                        <li>Restaurant Blauw</li>
                        <li>De Kas</li>
                    </ul>

                    <h2>Activities and Experiences</h2>
                    <ul>
                        <li>Take a canal cruise in Amsterdam to see the city from the water.</li>
                        <li>Visit the tulip fields in Lisse during springtime.</li>
                        <li>Explore the Zaanse Schans to see traditional Dutch windmills and crafts.</li>
                    </ul>

                    <h2>Transportation Tips</h2>
                    <p>The Netherlands has an extensive and efficient public transport system, including trains, trams, and buses. 
                    Consider getting an OV-chipkaart for easy travel.</p>

                    <h2>Safety Tips</h2>
                    <ul>
                        <li>The Netherlands is generally very safe, but be cautious of pickpockets in crowded areas.</li>
                        <li>Use bike lanes when cycling, and always obey traffic rules.</li>
                        <li>Learn basic Dutch phrases to enhance your experience.</li>
                    </ul>

                    <h2>Packing Suggestions</h2>
                    <ul>
                        <li>Layered clothing, as the weather can be unpredictable.</li>
                        <li>Comfortable walking shoes for exploring cities.</li>
                        <li>A rain jacket or umbrella, as rain can occur unexpectedly.</li>
                    </ul>

                    <section className="map-container">
                        <h2>Explore on the Map</h2>
                        <MapContainer center={[52.3784, 4.9009]} zoom={7} className="map">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[52.3784, 4.9009]}>
                                <Popup>
                                    <b>Amsterdam</b><br />Capital city known for its canals and rich culture!
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default Netherlands;
