import React from "react";
import Navbar from "./components/Navbar";
import Home from "./ui/Home";
import Category from "./ui/Category";
import Books from "./ui/Books";
import ServiceDetail from "./ui/ServiceDetail";
import Authors from "./ui/Authors";
import Testimon from "./ui/Testimon";
import Footer from "./ui/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Category />
      <Books />
      <ServiceDetail />
      <Authors />
      <Testimon />
      <Footer />
    </div>
  );
};

export default App;
