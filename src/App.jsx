import React from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
