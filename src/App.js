import React, { Component } from 'react';
import './index.css';
import { Provider } from 'react-redux'
import store from './redux';
import Root from "./components/Root";

class App extends Component {

  render() {
    return (
      <div>
          <Provider store = {store}>
              <Root />
          </Provider>
      </div>
    );
  }
}

export default App;
