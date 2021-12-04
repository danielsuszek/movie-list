import React from "react";
import classes from './About.module.scss'

const About = () => {
    return (
      <div className={classes.about}>
        <h1>O stronie:</h1>
        <h2>Strona została napisana przy użyciu:</h2>
        <ul>
          <li>HTML 5</li>
          <li>SASS</li>
          <li>React (hooks: useReducer, useContext, ...)</li>
          <li>
            Aplikacja korzysta z API:
            <a href="https://api.tvmaze.com" target="_blank" rel="noreferrer">
              https://api.tvmaze.com
            </a>
          </li>
        </ul>
        <h3>Autor:&nbsp;&nbsp;Daniel Suszek</h3>
        <h3>e-mail:&nbsp;&nbsp;danielsuszek@gmail.com</h3>
        <div className={classes.about__dspage}>Strona autora:&nbsp;&nbsp;
          <a href="http://danielsuszek.pl" target="_blank" rel="noreferrer">
            danielsuszek.pl
          </a>
        </div>
      </div>
    )
};

export default About;
