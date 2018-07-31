import React, { Component } from 'react';
import './App.css';
import Main from './main.js';

class App extends Component {
  render() {
    let style = {
      marginTop: 10
    }

    return (
      <div className="body">

        <div className="header">
          <div className="header-text">
            <div className="float-left">
              <p className="category">CATEGORY</p>
              <p className="page-heading">Page Heading</p>
            </div>
            <button style={style} className="float-right button">BUTTON</button>
          </div>
        </div>

        <Main />

      </div>
    );
  }
}

export default App;
