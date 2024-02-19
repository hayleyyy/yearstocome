import { BrowserRouter as Router } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Header from "./Header";
import Intro from "./Intro";
import Navigation from "./Navigation";
import Story from "./Story";
import Venue from "./Venue";
import Menu from "./Menu";
import RSVPForm from "./RSVPForm";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <ParallaxProvider>
          <Header />
          <Intro />
          <Story />
          <Venue />
          <Menu />
          <RSVPForm />
          <Footer />
        </ParallaxProvider>
      </Router>
    </>
  );
}

export default App;
