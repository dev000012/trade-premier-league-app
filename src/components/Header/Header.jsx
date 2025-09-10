import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Status Bar */}
      <div className="status-bar">
        <div className="status-bar-content">
          <span className="time">08:48</span>
          <div className="status-icons">
            <div className="signal-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="wifi-icon">
              <div className="wifi-bar"></div>
              <div className="wifi-bar"></div>
              <div className="wifi-signal"></div>
            </div>
            <div className="battery">
              <div className="battery-body">
                <div className="battery-fill"></div>
              </div>
              <div className="battery-tip"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Content */}
      <div className="header-main">
        <div className="header-content">
          {/* Back Button */}
          <button className="back-button">
            <div className="back-button-avatar">
              <img src="/assets/profile-avatar.png" alt="Profile Avatar" />
            </div>
          </button>

          {/* Page Title */}
          <h1 className="page-title">Challenges</h1>

          {/* Wallet Info */}
          <div className="wallet-info">
            <div className="wallet-icon">
              <img src="/assets/wallet-icon.svg" alt="Wallet" />
            </div>
            <div className="wallet-amount">
              <div className="rupee-icon">
                <img src="/assets/rupee-icon-header.svg" alt="Rupee" />
              </div>
              <span className="amount">20,000</span>
            </div>
            <div className="wallet-icon">
              <img src="/assets/wallet-icon.svg" alt="Wallet" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
