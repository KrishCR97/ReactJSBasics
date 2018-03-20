import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects : [
        {
          title : 'Iphone',
          category : 'Mobile development'
        },
        {
          title : 'Java',
          category : 'Desktop Development'
        },
        {
          title : 'Spring',
          category : 'Framework'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
      My App
      <Projects projects = {this.state.projects} />
      </div>
    );
  }
}

export default App;
