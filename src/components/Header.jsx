import React, { useState, useEffect } from 'react'

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";

const Header = () => {  
  const [showMenu, setShowMenu] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  
  const menuToggleHandler = () => {
    setShowMenu((showMenu) => !showMenu)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  useEffect(() => {
    if (windowSize.width > 768 && showMenu) {
      setShowMenu(false)
    }
  }, [windowSize.width, showMenu])
  
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <div className={classes.header__content__logo}>
          header
        </div>
      
        <nav className={`${classes.header__content__nav} ${showMenu ? classes.isMenu : ''}`}>
          <ul>
            <li><a href="/">Page one</a></li>
            <li><a href="/">Page two</a></li>
            <li><a href="/">Page three</a></li>
          </ul>
          <button>CTA Page</button>
        </nav>
        <div className={classes.header__content_toggle}>
          {!showMenu ?  (<BiMenuAltRight onClick={menuToggleHandler}/>) : (<AiOutlineClose onClick={menuToggleHandler}/>)}
        </div>
      </div>
    </header>
  )
}

export default Header
