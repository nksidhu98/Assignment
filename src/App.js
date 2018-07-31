import React, { Component } from 'react';
import './App.css';
import Main from './main.js';

class App extends Component {
  render() {
    let style = {
      marginTop: 10,
      marginRight: 20
    }

    return (
      <div className="body">

        <div className="header">
          <div className="header-text">
            <div className="float-left">
              <p style={{paddingLeft: 20}} className="category">CATEGORY</p>
              <p style={{paddingLeft: 20}} className="page-heading">Page Heading</p>
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
