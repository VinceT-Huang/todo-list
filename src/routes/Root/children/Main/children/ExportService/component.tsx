import React from 'react'
import './component.scss'
import {Route, HashRouter, Switch, withRouter} from 'react-router-dom'
import List from './children/List'
import Detail from './children/Detail'

type IProps = {
  match: any
  location: any
  history: any
  staticContext: any
}
type IState = {

}

class ExportService extends React.Component<IProps, IState>{

  componentWillMount() {
    console.log('ExportService will Mount')
  }
  componentDidMount() {
    console.log('ExportService Did Mount')
  }
  componentDidUpdate() {
    console.log('ExportService Did Update')
  }
  componentWillUnmount() {
    console.log('ExportService will unMount')
  }
  render () {
    const {match} = this.props
    return (
      <div className='Robot-component'>
        <HashRouter>
          <Route path={`${match.url}/list`} component={withRouter(List)}></Route>
          <Route path={`${match.url}/detail`} component={withRouter(Detail)}></Route>
        </HashRouter>
      </div>
    )
  }
}

export default ExportService
