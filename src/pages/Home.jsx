import { useContext } from "react";


import classes from "./Home.module.scss";

import Searchbar from "../components/Searchbar";
import ShowsContext from "../context/showsContext";

const Home = () => {
  const showsContext = useContext(ShowsContext)

  const { shows } = showsContext
   
  console.log(shows);
  
  return (
    <div className={classes.homepage}>
      <Searchbar />
      <div className={classes.homepage__list}>

      </div>
      
    </div>
  )
};

export default Home;
