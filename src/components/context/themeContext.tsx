import { ReactNode, createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../style/global";
import { ThemeName, getTheme } from "../../style/theme";

const DEAFAULT_THEME_NAME = "light";
const THEME_LOCALSTORAGE_KEY = "book_store_theme";

interface State {
  themeName: ThemeName;
  toggleTheme: () => void;
}

export const state = {
  themeName: DEAFAULT_THEME_NAME as ThemeName,
  toggleTheme: () => {},
};

export const ThemeContext = createContext<State>(state);

export const BookStoreThemeProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(DEAFAULT_THEME_NAME);

  const toggleTheme = () => {
    setThemeName(themeName === "light" ? "dark" : "light");
    localStorage.setItem(
      THEME_LOCALSTORAGE_KEY,
      themeName === "light" ? "dark" : "light"
    );
  };

  useEffect(() => {
    const savedThemeName = localStorage.getItem(
      THEME_LOCALSTORAGE_KEY
    ) as ThemeName;

    setThemeName(savedThemeName || DEAFAULT_THEME_NAME);
  }, []);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={getTheme(themeName)}>
        <GlobalStyle themeName={themeName} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
