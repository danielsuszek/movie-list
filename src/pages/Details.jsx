import { useEffect, useContext } from "react"; 
import { useParams } from "react-router";

import classes from "./Details.module.scss"
import ShowsContext from "../context/showsContext";


const Details = () => {
  const {singleShow, getSingleShow} = useContext(ShowsContext)
  const {id} = useParams()
  const imageSrc = 
    (singleShow.image) ? 
      singleShow.image.medium
      : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
  


  useEffect(() => {
    getSingleShow(id)
  }, [])

  console.log('Details singleShow: ', singleShow);

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };
  
  return (
    <div className={classes.pageDetails}>
      <h2>Show details</h2>
      <div className={classes.pageDetails__content}>
        <div className={classes.pageDetails__content__imgWrapper}>
          <img src={imageSrc} alt="" />
        </div>
      <div className={classes.pageDetails__content__details}>
        <h3>Tytuł: {singleShow.name}</h3>
        {/* <p>{singleShow.genres ? singleShow.genres : 'no genres'}</p> */}
        <p>
          {singleShow.genres && 
            singleShow.genres.map((genre) => 
              <span key={genre} className={classes.pageDetails__showGenres}>
                {genre}
              </span>
           )}
        </p>
        <h4>Ocena: 
          {singleShow.rating ? singleShow.rating.average : 'Brak oceny'}
        </h4>    

        <h4>Summary: </h4>
        <p>{singleShow.summary && removeTags(singleShow.summary)}</p>    
      </div>
      </div>
    </div>
  )
};

export default Details;
