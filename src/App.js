import React from 'react';
import './App.css';
import Root from 'routes/Root'
import {Provider} from 'react-redux'
import store from 'store/store'

function App() {
  return (
    <div className="App">
      <Provider
        store={store}
      >
        <Root/>
      </Provider>
    </div>
  );
}

export default App;
