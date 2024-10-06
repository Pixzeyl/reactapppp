import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Landing.css'; // Import the CSS file for styles

const Landing = () => {
    const ACCESS_KEY = 'hQF1wjBICsBNhms1uYRp9S3rh-l53r5s7TrxGjDCMsY'; // Unsplash Access Key
    const [slides, setSlides] = useState([]);
    const [slideIndex, setSlideIndex] = useState(0);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchCityImages = async () => {
            try {
                // Fetch images from Unsplash API
                const response = await fetch(`https://api.unsplash.com/photos/random?query=cityscape&count=15&client_id=${ACCESS_KEY}`);
                const data = await response.json();
                const imageUrls = data.map(img => img.urls.regular); // Store image URLs
                setSlides(imageUrls);

                // Start the slideshow
                setInterval(() => {
                    setSlideIndex(prevIndex => (prevIndex + 1) % imageUrls.length);
                }, 5000); // Change image every 5 seconds

            } catch (error) {
                console.error('Error fetching city images:', error);
            }
        };

        fetchCityImages();
    }, [ACCESS_KEY]);

    const startNow = () => {
        navigate('/mainpage'); // Use navigate to redirect to MainPage.js
    };

    const aboutUs = () => {
        alert("About Us section is under construction.");
        // You can redirect to the about us page here
        // window.location.href = 'about.html'; // Example redirect
    };

    return (
        <div>
            <div className="header">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://logowik.com/content/uploads/images/sliced-square-shape1719010210.logowik.com.webp" alt="Logo" />
                    <h1>Compasser</h1>
                </div>
                <button onClick={aboutUs}>About Us</button>
            </div>

            <div className="slideshow-container" id="slideshow-container">
                {slides.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        className={`mySlides ${index === slideIndex ? 'active' : ''}`}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
                <div className="info-overlay">
                    <h2>Welcome to Compasser!</h2>
                    <p>Your journey begins here. Discover amazing destinations and start planning your trips.</p>
                    <button className="start-button" onClick={startNow}>Start Now</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
