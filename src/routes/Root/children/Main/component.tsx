import React from 'react'
import './component.scss'
import {Route, HashRouter, Switch, withRouter} from 'react-router-dom'
import ExportService from './children/ExportService'

type IProps = {
  match: any
  location: any
  history: any
  staticContext: any
}
type IState = {

}

class Main extends React.Component<IProps, IState>{
  componentWillMount() {
    console.log('Main will Mount')
  }
  componentDidMount() {
    console.log('Main Did Mount')
  }
  componentDidUpdate() {
    console.log('Main Did Update')
  }
  componentWillUnmount() {
    console.log('Main will unMount')
  }
  render () {
    const {match} = this.props
    return (
      <div className='Robot-component'>
        <HashRouter>
          <Route path={`${match.url}/exportService`} component={withRouter(ExportService)}></Route>
        </HashRouter>
      </div>
    )
  }
}

export default Main
