import React from "react";
import { ThemeContext } from "./App";


export class ClassComponent extends React.Component {
  themeStyles(dark) {
    return {
      backgroundColor: dark ? '#CCC' : "#333",
      color: dark ? '#333' : "#CCC",
      padding: '2rem',
      margin: '2rem'
    }
  }
  render() {
    return (
      <ThemeContext.Consumer>
        {darkTheme => {
          return (
            <div style={this.themeStyles(darkTheme)}>
              <h1>Class Component</h1>
            </div>)
        }}
      </ThemeContext.Consumer>
    )
  }
}
