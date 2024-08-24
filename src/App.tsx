import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ScrollToTop from "./components/global/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
