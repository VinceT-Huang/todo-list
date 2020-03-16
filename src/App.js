import React from 'react';
import './App.css';
import Root from 'routes/Root'
import Graph from 'routes/Graph'
import {Provider} from 'react-redux'
import {Route, HashRouter, Switch, withRouter} from 'react-router-dom'
import store from 'store/store'

class App extends React.Component {

  render() {
    console.log('App render')
    return (
      <div className="App">
        <Provider
          store={store}
        >
          <HashRouter>
            <Route path='/root' component={withRouter(Root)}></Route>
            <Route path='/graph' component={withRouter(Graph)}></Route>
          </HashRouter>
        </Provider>
      </div>
    )
  }
}

export default App;
