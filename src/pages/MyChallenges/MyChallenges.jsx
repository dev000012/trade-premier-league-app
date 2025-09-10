import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyChallenges.css";

const MyChallenges = () => {
  const [activeTab, setActiveTab] = useState("Live");
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const tabs = [
    { id: "Live", label: "Live", count: 3 },
    { id: "Upcoming", label: "Upcoming", count: 1 },
    { id: "Completed", label: "Completed", count: 2 },
    { id: "Bookmarked", label: "Bookmarked", count: 1 },
  ];

  const challenges = [
    {
      id: 1,
      title: "Mega Contest",
      tags: ["Weekly", "Beginner", "Nifty 50"],
      status: "Live",
      timeLeft: "End in: 1h 45m",
      pnl: { value: "61,824", percentage: "-47.61%", isPositive: false },
      rank: "115/2500",
      portfolioValue: "68,019",
      availableCapital: "9,67,098",
    },
    {
      id: 2,
      title: "Mega Contest",
      tags: ["Weekly", "Beginner", "Nifty 50"],
      status: "Live",
      timeLeft: "End in: 1h 45m",
      pnl: { value: "8,200", percentage: "+8.20%", isPositive: true },
      rank: "115/2500",
      portfolioValue: "68,019",
      availableCapital: "9,67,098",
    },
    {
      id: 3,
      title: "Mega Contest",
      tags: ["Weekly", "Beginner", "Nifty 50"],
      status: "Live",
      timeLeft: "End in: 1h 45m",
      pnl: { value: "61,824", percentage: "-47.61%", isPositive: false },
      rank: "115/2500",
      portfolioValue: "68,019",
      availableCapital: "9,67,098",
    },
  ];

  return (
    <div className="my-challenges">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          {/* Profile Picture */}
          <div className="profile-section">
            <div className="profile-avatar">
              <img
                src="/assets/profile-avatar-my-challenges.png"
                alt="Profile Avatar"
              />
            </div>
          </div>

          {/* Golden Badge */}
          <div className="badge-section">
            <div className="badge-icon">
              <img
                src="/assets/golden-badge-my-challenges.svg"
                alt="Golden Badge"
              />
            </div>
          </div>

          {/* Wallet Section */}
          <div className="wallet-section">
            <div className="wallet-icon">
              <img src="/assets/wallet-icon-figma.svg" alt="Wallet" />
            </div>
            <div className="rupee-icon">
              <img src="/assets/rupee-icon-my-challenges.svg" alt="Rupee" />
            </div>
            <div className="wallet-amount">
              <span>20,000</span>
            </div>
          </div>

          {/* Notification Bell */}
          <div className="notification-section">
            <button className="notification-bell">
              <img
                src="/assets/notification-bell-my-challenges.svg"
                alt="Notification Bell"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-label">{tab.label}</span>
            <span className="tab-count">{tab.count}</span>
          </div>
        ))}
      </div>

      {/* Challenges List */}
      <div className="challenges-container">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="challenge-card">
            <div className="challenge-header">
              <div className="challenge-title-section">
                <h3 className="challenge-title">{challenge.title}</h3>
                <div className="challenge-tags">
                  {challenge.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`tag tag-${tag
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="challenge-status">
                <span className="status-indicator">●{challenge.status}</span>
                <div className="time-badge">
                  <span>{challenge.timeLeft}</span>
                </div>
              </div>
            </div>

            <div className="challenge-content">
              <div className="stats-section">
                <div className="stat-group">
                  <div className="stat-item">
                    <span className="stat-label">Your Current P&L</span>
                    <div className="stat-value">
                      <span className="pnl-sign">-</span>
                      <div className="rupee-icon-small">
                        <img
                          src="/assets/rupee-icon-my-challenges.svg"
                          alt="Rupee"
                        />
                      </div>
                      <span
                        className={`pnl-amount ${
                          challenge.pnl.isPositive ? "positive" : "negative"
                        }`}
                      >
                        {challenge.pnl.value} ({challenge.pnl.percentage})
                      </span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Current rank</span>
                    <span className="stat-value">{challenge.rank}</span>
                  </div>
                </div>

                <div className="stat-group">
                  <div className="stat-item">
                    <span className="stat-label">Portfolio Value</span>
                    <div className="stat-value">
                      <div className="rupee-icon-small">
                        <img
                          src="/assets/rupee-icon-my-challenges.svg"
                          alt="Rupee"
                        />
                      </div>
                      <span>{challenge.portfolioValue}</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Available Capital</span>
                    <div className="stat-value">
                      <div className="rupee-icon-small">
                        <img
                          src="/assets/rupee-icon-my-challenges.svg"
                          alt="Rupee"
                        />
                      </div>
                      <span>{challenge.availableCapital}</span>
                    </div>
                  </div>
                </div>
              </div>

              <button className="view-challenge-btn">
                <span>View Challenge</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item" onClick={() => handleNavigation("/")}>
          <div className="nav-icon">
            <img src="/assets/challenges-icon.svg" alt="Challenges" />
          </div>
          <span className="nav-label">Challenges</span>
        </div>
        <div
          className="nav-item active"
          onClick={() => handleNavigation("/my-challenges")}
        >
          <div className="nav-icon">
            <img src="/assets/my-challenges-icon.svg" alt="My Challenges" />
          </div>
          <span className="nav-label">My Challenges</span>
        </div>
        <div
          className="nav-item"
          onClick={() => handleNavigation("/leaderboard")}
        >
          <div className="nav-icon">
            <img src="/assets/leaderboard-icon.svg" alt="Leaderboard" />
          </div>
          <span className="nav-label">Leaderboard</span>
        </div>
        <div className="nav-item" onClick={() => handleNavigation("/profile")}>
          <div className="nav-icon">
            <img src="/assets/profile-icon.svg" alt="Profile" />
          </div>
          <span className="nav-label">Profile</span>
        </div>
      </nav>
    </div>
  );
};

export default MyChallenges;
