import React, { createContext, useState, useContext, FC, useEffect, } from "react";
// type TypeSetState<T> = Dispatch<SetStateAction<T>>
type themeType = "light" | "dark"

interface IThemeProvider {
  children: React.ReactNode;
}

interface IThemeContext {
  theme: themeType;
  changeTheme: (_theme: themeType) => void;
}

export const ThemeContext = createContext<IThemeContext>({
  theme: "light",
  changeTheme: (_theme: themeType) => { return null }
});

const getTheme = () => {
  let theme = localStorage.getItem('theme')
  if (!theme) {
    localStorage.setItem('theme', 'light');
    theme = 'light';
  }
  return theme;
}

export const ThemeProvider: FC<IThemeProvider> = ({ children }) => {
  const [theme, setTheme] = useState<any>(getTheme)

  const changeTheme = () => {
    setTheme((currentTheme: themeType) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeProvider = () => {
  return useContext(ThemeContext);
};