import React from "react";

import classes from "./Home.module.scss";

import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <div className={classes.homepage}>
      <Searchbar />
      <br />
      {/* <p>Homepage</p> */}
    </div>
  )
};

export default Home;
