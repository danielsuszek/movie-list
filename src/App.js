import {  Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import About from "./pages/About";
import Details from "./pages/Details";
import Home from "./pages/Home";


function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/singlemovie/:id" element={<Details />}/>
      </Routes>
    </Layout>
  );
}

export default App;
