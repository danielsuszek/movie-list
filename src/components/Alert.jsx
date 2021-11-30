import classes from './Alert.module.scss'

const Alert = ({message}) => {
  return (
    <div className={classes.alert} >
      <div className={classes.alert__message}>
        <i className="fas fa-info-circle"></i>{message}
      </div>
    </div>
  )
}

export default Alert
