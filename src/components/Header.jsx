import { Link } from 'react-router-dom';

import classes from "./Header.module.scss";

const Header = () => {  

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__content__logo}>
          <h3>
            <Link to="/">
              <i className="fas fa-video"></i> WYSZUKIWARKA SERIALI
              <i className="fal fa-times-square"></i>
            </Link>
          </h3>
        </div>
      
        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <Link to="/">
                Strona głowna
              </Link>
            </li>
            <li>
              <Link to="/about">
                O stronie
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
