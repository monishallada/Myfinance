import React from 'react';
import './MyFinanceLanding.css'; // Make sure to include the CSS

export default function MyFinanceLanding() {
  return (
    <div className="page">
      <header className="header">
        <h1 className="logo">myFinance</h1>
        <nav className="nav">
          <span>Resources ▼</span>
          <span>Pricing</span>
          <button>Contact</button>
        </nav>
      </header>

      <main className="main">
        {/* Left Side */}
        <div className="left">
          <h2>
            some tuff line here <span className="pulse">ANIMATED TEXT</span>
          </h2>
          <p>
            do type shi type shi do type shi type shi do type shi type shi do type shi type shi do
            type shi type shi do type shi type shi do type shi type shi do
            type shi type shi do type shi type shi do type shi type shi do
          </p>
          <button className="cta">Start Here</button>

          <div className="trusted">
            <p>Trusted by 100+ companies</p>
            <div className="logos">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg" alt="Nike" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Sony_Logo.svg" alt="Sony" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/ABC_Logo.svg" alt="ABC" />
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