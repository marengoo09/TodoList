import { useState } from "react";
import "./style.css";
export const Header = ({theme, setTheme, children}) => {
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`banner banner-bg-${theme}`}>
      <div className={`content theme-dark ${theme}`}>
        <div className='header-content'>
          <h1>TODO</h1>
          <img onClick={handleClick} src={`./images/icon-${theme==='light'?'moon':'sun'}.svg`}/>
        </div>
        {children}
      </div>
    </div>
  );
};
