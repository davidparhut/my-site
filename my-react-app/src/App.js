import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MyStartup from "./pages/MyStartup";
import Market from "./pages/Market";
import Investors from "./pages/Investors";
import "./assets/styles/style.css";

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import AuthorizationPage from "./pages/auth";
import MyAccount from "./pages/account";


export default function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/my-startup" element={<MyStartup />} />
          <Route path="/market" element={<Market />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/auth" element={<AuthorizationPage />} />
          <Route path="/my.account" element={<MyAccount />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
