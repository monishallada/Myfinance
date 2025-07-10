import React from 'react';
import './MyFinanceLanding.css';

export default function MyFinanceLanding() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="logo">myFinance</h1>
        <nav className="nav">
          <span>About Us</span>
          <span>Products</span>
          <span>Pricing</span>
          <button>Contact</button>
        </nav>
      </header>

      <main className="main">
        {/* Left Side */}
        <div className="left">
          <h2>
            Start your journey to<span className="pulse highlight"> Financiol Freedom</span>
          </h2>
          <p>
            Welcome to MyFinance — an intelligent financial assistant powered by AI and machine learning. We help you build personalized investment portfolios tailored to your goals, risk profile, and time horizon. Our platform also offers advanced tools like AI-powered chatbots, stock trading bots, and more to guide your financial journey.
          </p>
          <button className="cta">Start Here</button>

          <div className="trusted">
  <p>Trusted by 100+ companies</p>
  <div className="logos">
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" alt="NVIDIA" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Logo_2021.svg" alt="Meta" />
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" />
  </div>

            </div>
          </div>

        {/* Right Side */}
        <div className="donut">
          <div className="legend">Legend</div>
          <div className="label label1">Label<br/>12.3%</div>
          <div className="label label2">Label<br/>14.6%</div>
          <div className="label label3">Label<br/>24.3%</div>
          <div className="label label4">Label<br/>48.8%</div>
        </div>
      </main>
    </div>
  );
}

