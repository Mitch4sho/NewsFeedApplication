import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewsFeed from "./pages/NewsFeed";
import ArticlePage from "./pages/ArticlePage";
import Header from "./components/Header";
import QuickSelection from "./components/QuickSelection";
import Container from "@mui/material/Container";
import { Provider } from "./core/articles/context";

function App() {
  return (
    <Container>
      <Provider>
        <Router>
          <Header />
          <QuickSelection />
          <Routes>
            <Route path="/" element={<NewsFeed />} />
            <Route path="/article" element={<ArticlePage />} />
          </Routes>
        </Router>
      </Provider>
    </Container>
  );
}

export default App;
