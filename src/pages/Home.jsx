import { useContext } from "react";


import classes from "./Home.module.scss";

import Searchbar from "../components/Searchbar";
import ShowsContext from "../context/showsContext";
import ListItem from "../components/ListItem";

const Home = () => {
  const showsContext = useContext(ShowsContext)

  const { shows } = showsContext
   
  console.log(shows);
  
  return (
    <div className={classes.homepage}>
      <Searchbar />
      <div className={classes.homepage__list}>
        {shows.map((item) => {
          return(
            <ListItem
              key={item.show.id}
              id={item.show.id}
              name={item.show.name}
              image={
                item.show.image
                  ? item.show.image.medium
                  : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
              }

              rating={
                item.show.rating.average
                  ? item.show.rating.average
                  : "Brak oceny"
              }

            />
          )
        })}
      </div>
      
    </div>
  )
};

export default Home;
