import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Footer from "./components/Footer";
import BookNow from "./components/BookNow";

function App() {
  const [activePage, setActivePage] = useState("home");
  console.log(activePage);
  return (
    <nav className="App">
      
      <Navbar activePage={activePage} setActivePage={setActivePage} />
     
      {activePage === "home" && (
        <Home activePage={activePage} setActivePage={setActivePage} />
      )}
      {activePage === "about" && <About />}
      {activePage === "services" && <Services />}
      {activePage === "products" && <Products />}
      {activePage === "sign-up" && <BookNow />}
      <Footer />
    </nav>
  );
}

export default App;
