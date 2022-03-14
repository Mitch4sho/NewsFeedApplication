import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsfeed from "./pages/Newsfeed";
import ArticlePage from "./pages/ArticlePage";
import Header from "./components/Header";
import { Provider } from "./core/articles/context";

function App() {
  return (
    <div>
      <Provider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Newsfeed />} />
            <Route path="/article" element={<ArticlePage />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
