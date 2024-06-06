import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const ThemeSwitcher = () => {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>{themeName}</button>;
};

export default ThemeSwitcher;
