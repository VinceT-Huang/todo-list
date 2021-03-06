import React from 'react'
import './component.scss'
import {Route, HashRouter, Switch, withRouter} from 'react-router-dom'

import Main from './children/Main'

type IProps = {
  match: any
  location: any
  history: any
  staticContext: any
}
type IState = {

}

class Root extends React.Component<IProps, IState>{
  componentWillMount() {
    console.log('Root will Mount')
  }
  componentDidMount() {
    console.log('Root Did Mount')
  }
  componentDidUpdate() {
    console.log('Root Did Update')
  }
  componentWillUnmount() {
    console.log('Root will unMount')
  }
  render () {
    const {match} = this.props
    return (
      <div className='Robot-component'>
        <HashRouter>
          <Route path={`${match.url}/main`} component={withRouter(Main)}></Route>
        </HashRouter>
      </div>
    )
  }
}

export default Root
