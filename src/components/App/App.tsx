import { Component, ReactElement } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "../../pages/Main";
import HeroSection from "../HeroSection/HeroSection";

class App extends Component {
  render(): ReactElement {
    return (
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HeroSection />} />
          <Route path="cart" element={<p>It's cart</p>} />
        </Route>
      </Routes>
    );
  }
}

export default App;
