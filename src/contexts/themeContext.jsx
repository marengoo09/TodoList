import { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
  const {item:theme, saveItem:setTheme} = useLocalStorage('THEME','light');
  
  useEffect(() => {
    if (theme == "light") {
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
    }
  }, [theme]);

  return(
    <ThemeContext.Provider value={{
      theme,
      setTheme
    }}>
      {children}
    </ThemeContext.Provider>
  )
}

export {ThemeContext, ThemeProvider}