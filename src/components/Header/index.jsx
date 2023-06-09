import { useContext } from "react";
import "./style.css";

import "../../../public/images/bg-mobile-light.jpg";
import "../../../public/images/bg-mobile-dark.jpg";
import "../../../public/images/bg-desktop-light.jpg";
import "../../../public/images/bg-desktop-dark.jpg";
import iconLight from "../../../public/images/icon-moon.svg";
import iconDark from "../../../public/images/icon-sun.svg";
import { ThemeContext } from "../../contexts/themeContext";

export const Header = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`banner banner-bg-${theme}`}>
      <div className={`content theme-dark`}>
        <div className="header-content">
          <h1>TODO</h1>
          <img
            onClick={handleClick}
            src={theme === "light" ? iconLight : iconDark}
            alt="Toggle between dark and light mode"
          />
        </div>
        {children}
      </div>
    </div>
  );
};
