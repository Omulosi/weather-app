import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchForm from './components/SearchForm';
import MainApp from './components/MainApp';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }

  render() {
    return (
      <div>
        <Header />
        <SearchForm />
        <MainApp />
      </div>
    )
  }

}



export default App;
