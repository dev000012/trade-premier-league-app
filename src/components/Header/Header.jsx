import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* Profile Picture - Frame 1707481348 */}
        <div className="profile-section">
          <div className="profile-avatar">
            <img
              src="/assets/profile-avatar-figma.png"
              alt="Profile Avatar"
            />
          </div>
        </div>

        {/* Golden Badge - Frame 4 */}
        <div className="badge-section">
          <div className="badge-icon">
            <img src="/assets/golden-badge-figma.svg" alt="Golden Badge" />
          </div>
        </div>

        {/* Wallet Section - Frame 1707481349 */}
        <div className="wallet-section">
          <div className="wallet-icon">
            <img src="/assets/wallet-icon-figma.svg" alt="Wallet" />
          </div>
          <div className="rupee-icon">
            <img src="/assets/rupee-icon-figma.svg" alt="Rupee" />
          </div>
          <div className="wallet-amount">
            <span>20,000</span>
          </div>
        </div>

        {/* Notification Bell - from Status Bar */}
        <div className="notification-section">
          <button className="notification-bell">
            <img
              src="/assets/notification-bell-figma.svg"
              alt="Notification Bell"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
