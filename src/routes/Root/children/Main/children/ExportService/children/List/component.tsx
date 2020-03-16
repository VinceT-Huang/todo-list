import React from 'react'
import './component.scss'
import UploadFile from 'components/UploadFile'
import {Link} from 'react-router-dom'
import d3 from 'd3'

type IProps = {
  match: any
  location: any
  history: any
  staticContext: any
  counter: number
  data: number
  addDispatch: () => void
  lessDispatch: () => void
  getAsyncData: () => void
}
type IState = {

}

class Detail extends React.Component<IProps, IState>{

  clickHandler = (type: string): void => {
    switch(type) {
      case 'add':
        this.props.addDispatch()
        break
      case 'less':
        this.props.lessDispatch()
        break
      case 'now':
        this.props.getAsyncData()
        break
      case 'list':
        this.props.history.push('/root/main/exportService/list/detail')
        break
      default:
        break
    }
  }

  componentWillMount() {
    console.log('Detail will Mount')
  }
  componentDidMount() {
    console.error('Detail Did Mount')
  }
  componentDidUpdate() {
    console.log('Detail Did Update')
  }
  componentWillUnmount() {
    console.log('Detail will unMount')
  }

  render () {
    return (
      <div className='Robot-component'>
        list

        <div>
          <span>{this.props.counter}</span>
          <button onClick={() => this.clickHandler('add')}>+</button>
          <button onClick={() => this.clickHandler('less')}>-</button>
          <button onClick={() => this.clickHandler('list')}>list</button>
        </div>
        <div>
          {this.props.data}
          <button onClick={() => this.clickHandler('now')}>now</button>
        </div>
        <UploadFile></UploadFile>
      </div>
    )
  }
}

export default Detail
