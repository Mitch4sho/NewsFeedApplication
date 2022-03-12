import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsfeed from "./pages/Newsfeed";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Oliver News</h1>
        <Routes>
          <Route path="/" element={<Newsfeed />} />
          <Route path="/article" element={<ArticlePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
