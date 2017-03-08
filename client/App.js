import React, { Component } from 'react';
import styles from './App.css';
import Navigation from './components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Navigation />

        {this.props.children}
      </div>
    );
  }
}

export default App;
