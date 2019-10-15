import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Tabletop from 'tabletop';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1rDbZqPYNaJZDmznIQCXyxbb55Jf6ppJrDZhHY_pdzng',
      callback: googleData => {
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"><font color="black">i.(am).read(ing)</font></h1>
        </header>
         <div id="book-details">
          {
            data.map(obj => {
              return (
                     <div key={obj.Title}>
                         <h1><a href = {obj.Reviews}  target="_blank"> {obj.Title}</a></h1>
                         <b>{obj.Author}</b>
                        <p>{obj.Year}, {obj.Country}</p>
                        <p>{obj.Start} - {obj.End}</p>
                         <img alt={obj.Cover} src={obj.Cover} height="300" width="200"/>
                      <hr class="new1"></hr>
                      </div>
             )
            })
          }
        </div>

      </div>

    );
  }
}

export default App;