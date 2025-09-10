import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MyChallenges from "./pages/MyChallenges/MyChallenges";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <main>
                  <Home />
                </main>
              </>
            }
          />
          <Route path="/my-challenges" element={<MyChallenges />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
