import { Link } from 'react-router-dom'

import classes from "./ListItem.module.scss"

const ListItem = ({id, name, image, rating}) => {
  return (
    <Link to={`/singleshow/${id}`} className={classes.listItem}>
      <img src={image} alt={name} />
      <div >
        <h4 title={name}>{name}</h4>
        <h5>{rating}</h5>
      </div>
    </Link>
  )
}

export default ListItem