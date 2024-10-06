import React from 'react';
import './MainPage.css'; // Ensure to create this CSS file for the styles
import Paris from './paris'; // Import the Paris component
import NewYork from './newyork'; // Import the New York component
import Tokyo from './tokyo'; // Import the Tokyo component
import Sydney from './sydney'; // Import the Sydney component
import London from './london'; // Import the London component
import Dubai from './dubai'; // Import the Dubai component
import Rome from './rome'; // Import the Rome component
import Barcelona from './barcelona'; // Import the Barcelona component
import Switzerland from './switzerland'; // Import the Switzerland component
import Norway from './norway'; // Import the Norway component
import Netherlands from './netherlands'; // Import the Netherlands component
import Germany from './germany'; // Import the Germany component

const MainPage = () => {
    const aboutUs = () => {
        alert("Welcome to Compasser! Your travel bucket list companion.");
    };

    return (
        <div className="main-page">
            <div className="header">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src="https://logowik.com/content/uploads/images/sliced-square-shape1719010210.logowik.com.webp"
                        alt="Logo"
                    />
                    <h1>
                        Compasser &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Choose your Destination!
                    </h1>
                </div>
                <button onClick={aboutUs}>About Us</button>
            </div>

            <div className="central-div">
                {/* City Cards */}
                <a href="/paris" className="card">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8fDA%3D"
                        alt="Paris"
                    />
                    <h3>Paris</h3>
                </a>
                <a href="/newyork" className="card">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1682656220562-32fde8256295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D"
                        alt="New York"
                    />
                    <h3>New York</h3>
                </a>
                <a href="/tokyo" className="card">
                    <img
                        src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9reW98ZW58MHx8MHx8fDA%3D"
                        alt="Tokyo"
                    />
                    <h3>Tokyo</h3>
                </a>
                <a href="/sydney" className="card">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1524562865630-b991c6c2f261?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3lkbmV5fGVufDB8fDB8fHww"
                        alt="Sydney"
                    />
                    <h3>Sydney</h3>
                </a>
                <a href="/london" className="card">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1671734045770-4b9e1a5e53a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9uZG9ufGVufDB8fDB8fHww"
                        alt="London"
                    />
                    <h3>London</h3>
                </a>
                <a href="/dubai" className="card">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1661964298224-7747aa0ac10c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHViYWl8ZW58MHx8MHx8fDA%3D"
                        alt="Dubai"
                    />
                    <h3>Dubai</h3>
                </a>
                <a href="/rome" className="card">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1675975706513-9daba0ec12a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Rome"
                    />
                    <h3>Rome</h3>
                </a>
                <a href="/barcelona" className="card">
                    <img
                        src="https://images.unsplash.com/photo-1464790719320-516ecd75af6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFyY2Vsb25hfGVufDB8fDB8fHww"
                        alt="Barcelona"
                    />
                    <h3>Barcelona</h3>
                </a>
                <a href="/switzerland" className="card">
                    <img
                        src="https://images.unsplash.com/photo-1528493366314-e317cd98dd52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3dpdHplcmxhbmR8ZW58MHx8MHx8fDA%3D"
                        alt="Switzerland"
                    />
                    <h3>Switzerland</h3>
                </a>
                <a href="/norway" className="card">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1668017178993-4c8fc9f59872?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bm9yd2F5fGVufDB8fDB8fHww"
                        alt="Norway"
                    />
                    <h3>Norway</h3>
                </a>
                <a href="/netherlands" className="card">
                    <img
                        src="https://images.unsplash.com/photo-1646388264694-2c854514bd66?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5ldGhlcmxhbmRzfGVufDB8fDB8fHww"
                        alt="Netherlands"
                    />
                    <h3>Netherlands</h3>
                </a>
                <a href="/germany" className="card">
                    <img
                        src="https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdlcm1hbnl8ZW58MHx8MHx8fDA%3D"
                        alt="Germany"
                    />
                    <h3>Germany</h3>
                </a>
            </div>
        </div>
    );
};

export default MainPage;
