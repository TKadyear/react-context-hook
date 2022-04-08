import React, { useState } from 'react';
import { ClassComponent } from './ClassComponent';
import { FunctionComponent } from './FunctionComponent';
// import { ClassComponent } from './ClassComponent';

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionComponent />
        <ClassComponent />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
