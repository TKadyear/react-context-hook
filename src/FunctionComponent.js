import React, { useContext } from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

export function FunctionComponent() {
  const darkTheme = useTheme();
  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : "#CCC",
    color: darkTheme ? '#CCC' : "#333",
    padding: '2rem',
    margin: '2rem'
  }
  const toggleTheme = useThemeUpdate();
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>
        <h1>Function Component</h1>
      </div>
    </>
  )

}
