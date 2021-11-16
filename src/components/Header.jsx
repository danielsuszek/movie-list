import React from 'react'

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";

const Header = () => {  
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__content__logo}>
          header
        </div>
      
        <nav className={classes.header__content__nav}>
          <ul>
            <li><a href="/">Page one</a></li>
            <li><a href="/">Page two</a></li>
            <li><a href="/">Page three</a></li>
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className={classes.header__content_toggle}>
        <BiMenuAltRight />
        </div>
      </div>
    </header>
  )
}

export default Header
