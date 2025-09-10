import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Card */}
      <div className="hero-card">
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">Weekly Master</h2>
            <p className="hero-subtitle">Play and Win from $10 Lakhs!</p>
          </div>
          <button className="hero-button">
            <span className="button-text">Join Now</span>
          </button>
          <div className="hero-dots">
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-avatar">
          <img src="/assets/profile-avatar.png" alt="Profile Avatar" />
        </div>
      </div>

      {/* Challenges Header */}
      <div className="challenges-header">
        <h3 className="challenges-title">2 Challenges Found</h3>
        <button className="filter-button">
          <img src="/assets/filter-icon.svg" alt="Filter" />
        </button>
      </div>

      {/* Challenges List */}
      <div className="challenges-list">
        {/* Mega Contest Card */}
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-title-section">
              <h4 className="challenge-title">Mega Contest</h4>
              <div className="challenge-badges">
                <div className="time-badge">
                  <span>Start in: 1h 45m</span>
                </div>
                <button className="info-button">
                  <img src="/assets/clock-icon.svg" alt="Clock" />
                </button>
              </div>
            </div>
            <div className="challenge-tags">
              <span className="tag weekly">Weekly</span>
              <span className="tag beginner">Beginner</span>
              <span className="tag nifty">Nifty 50</span>
            </div>
          </div>

          <div className="challenge-content">
            <div className="challenge-info">
              <div className="prize-section">
                <div className="prize-icon">
                  <img src="/assets/rupee-icon.svg" alt="Rupee Icon" />
                </div>
                <div className="prize-amount">
                  <div className="prize-icon-small">
                    <img
                      src="/assets/rupee-icon-small.svg"
                      alt="Rupee Icon Small"
                    />
                  </div>
                  <span className="amount">50,000</span>
                </div>
              </div>
              <button className="join-button">
                <span className="join-text">Join</span>
                <div className="join-price">
                  <div className="join-icon">
                    <img src="/assets/rupee-icon-small.svg" alt="Rupee Icon" />
                  </div>
                  <span className="price">49</span>
                </div>
              </button>
            </div>
            <div className="progress-section">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "75%" }}></div>
              </div>
              <div className="progress-info">
                <span className="progress-text">750/1000 Spots Filled</span>
                <div className="bonus-badge">
                  <img
                    src="/assets/loyalty-icon.png"
                    alt="Loyalty"
                    className="loyalty-icon"
                  />
                  <span className="bonus-text">+250</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Head to Head Challenge Card */}
        <div className="challenge-card">
          <div className="challenge-header">
            <div className="challenge-title-section">
              <h4 className="challenge-title">Head to Head Challenge</h4>
              <div className="challenge-badges">
                <div className="time-badge">
                  <span>End in: 3d</span>
                </div>
                <button className="info-button">
                  <img src="/assets/head-to-head-icon.svg" alt="Head to Head" />
                </button>
              </div>
            </div>
            <div className="challenge-tags">
              <span className="tag weekly">Weekly</span>
              <span className="tag intermediate">Intermediate</span>
            </div>
          </div>

          <div className="challenge-content">
            <div className="challenge-info">
              <div className="prize-section">
                <div className="prize-icon">
                  <img src="/assets/rupee-icon.svg" alt="Rupee Icon" />
                </div>
                <div className="prize-amount">
                  <div className="prize-icon-small">
                    <img
                      src="/assets/rupee-icon-small.svg"
                      alt="Rupee Icon Small"
                    />
                  </div>
                  <span className="amount">2,00,000</span>
                </div>
              </div>
              <button className="join-button">
                <span className="join-text">Join</span>
                <div className="join-price">
                  <div className="join-icon">
                    <img src="/assets/rupee-icon-small.svg" alt="Rupee Icon" />
                  </div>
                  <span className="price">100</span>
                </div>
              </button>
            </div>
            <div className="progress-section">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "45%" }}></div>
              </div>
              <div className="progress-info">
                <span className="progress-text">450/1000 Spots Filled</span>
                <div className="bonus-badge">
                  <img
                    src="/assets/loyalty-icon.png"
                    alt="Loyalty"
                    className="loyalty-icon"
                  />
                  <span className="bonus-text">+250</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item active">
          <div className="nav-icon">
            <img src="/assets/challenges-icon.svg" alt="Challenges" />
          </div>
          <span className="nav-label">Challenges</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">
            <img src="/assets/my-challenges-icon.svg" alt="My Challenges" />
          </div>
          <span className="nav-label">My Challenges</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">
            <img src="/assets/leaderboard-icon.svg" alt="Leaderboard" />
          </div>
          <span className="nav-label">Leaderboard</span>
        </div>
        <div className="nav-item">
          <div className="nav-icon">
            <img src="/assets/profile-icon.svg" alt="Profile" />
          </div>
          <span className="nav-label">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default Home;
