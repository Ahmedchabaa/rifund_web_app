import React, { useEffect } from "react";
import {
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import Contact from './pages/contact';
import Createproject from "./pages/Createproject";
import ForgetPassword from "./pages/ForgetPassword";
import Home from './pages/Home';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "RiFund";
        metaDescription = "Welcome to the Home Page";
        break;
      case "/home":
        title = "Home Page";
        metaDescription = "Welcome to the Home Page";
        break;
      case "/contact":
        title = "Contact Page";
        metaDescription = "Welcome to the Contact Page";
        break;
      case "/login":
        title = "Se connecter Page";
        metaDescription = "Welcome to these login  Page";
        break;
      case "/register":
        title = "S'inscrire Page";
        metaDescription = "Welcome to these register Page";
        break;
      case "/password":
        title = "password Page";
        metaDescription = "Welcome to these forget Page";
        break;
      case "/creerprojet":
        title = "create project page";
        metaDescription = "Welcome to these create project Page";
        break;
      default:
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Createproject />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/password" element={<ForgetPassword />} />
        <Route path="/creerprojet" element={<Createproject />} />
      </Routes>
    </div>
  );
}

export default App;