import { Link } from 'react-router-dom'

import classes from "./ListItem.module.scss"

const ListItem = ({id, name, image, rating}) => {
  return (
    <Link to={`/singleshow/${id}`} className={classes.listItem}>
      <div className={classes.listItem__imgWrapper}>
        <img src={image} alt={name} />
      </div>
      <div >
        <h4 title={name}>{name}</h4>
        <h5>Ocena:&nbsp;{rating}</h5>
      </div>
    </Link>
  )
}

export default ListItem