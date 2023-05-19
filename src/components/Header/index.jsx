import { useState } from "react";
import "./style.css";

import iconLight from '../../../public/images/icon-moon.svg'
import iconDark from '../../../public/images/icon-sun.svg'


export const Header = ({theme, setTheme, children}) => {
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`banner banner-bg-${theme}`}>
      <div className={`content theme-dark ${theme}`}>
        <div className='header-content'>
          <h1>TODO</h1>
          <img onClick={handleClick} src={(theme==='light'?iconLight:iconDark)}/>
        </div>
        {children}
      </div>
    </div>
  );
};
