import React from 'react';

const LandingPage = () => {
    return (
        <div>
            <section id="hero" style={{ background: '#f8f9fa', padding: '100px 0', textAlign: 'center' }}>
                <h1>Welcome to Giobots</h1>
                <p>Your gateway to an innovative experience.</p>
                <a href="#features" style={{ padding: '10px 20px', background: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>Learn More</a>
            </section>
            
            <section id="features" style={{ padding: '50px 0', textAlign: 'center' }}>
                <h2>Features</h2>
                <div>
                    <h3>Feature 1</h3>
                    <p>Description of feature 1.</p>
                </div>
                <div>
                    <h3>Feature 2</h3>
                    <p>Description of feature 2.</p>
                </div>
                <div>
                    <h3>Feature 3</h3>
                    <p>Description of feature 3.</p>
                </div>
            </section>
            
            <section id="pricing" style={{ padding: '50px 0', textAlign: 'center' }}>
                <h2>Pricing</h2>
                <div>
                    <h3>Basic Plan</h3>
                    <p>$10/month</p>
                </div>
                <div>
                    <h3>Pro Plan</h3>
                    <p>$20/month</p>
                </div>
                <div>
                    <h3>Enterprise Plan</h3>
                    <p>$50/month</p>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;