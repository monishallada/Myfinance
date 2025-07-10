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
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" />
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nvidia.com%2Fen-us%2Fabout-nvidia%2Flegal-info%2Flogo-brand-usage%2F&psig=AOvVaw2MZGDBTMpN_7z9Ze76TCvN&ust=1752247190455000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDSvs3Lso4DFQAAAAAdAAAAABAE" alt="Sony" />
              <img src="https://dxc.scene7.com/is/image/dxc/OracleRedwood2?qlt=90&wid=1200&ts=1749046961779&$square_desktop$&dpr=off" alt="ABC" />
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

