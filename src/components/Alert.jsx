import classes from './Alert.module.scss'

const Alert = ({message}) => {
  return (
    <div className={classes.alert}>
      <i className="fas fa-info-circle"></i>{message}
    </div>
  )
}

export default Alert
