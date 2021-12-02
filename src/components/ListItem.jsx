import { Link } from 'react-router-dom'

import classes from "./ListItem.module.scss"

const ListItem = ({id, name, image, genres, rating}) => {
  return (
    <Link to={`singleshow/${id}`} className={classes.listItem}>
      <div className={classes.listItem__imgWrapper}>
        <img src={image} alt={name} />
      </div>
      <div className={classes.listItem__content}>
        <h4 title={name}>{name}</h4>
        <p className={classes.listItem__content__genres} title={genres}>
          {genres.map((genre) => 
            <span key={genre} >{genre}</span>
          )}
        </p>
        <h5>Ocena:&nbsp;{rating}</h5>
      </div>
    </Link>
  )
}

export default ListItem