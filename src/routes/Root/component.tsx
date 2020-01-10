import React from 'react'
import './component.scss'
import UploadFile from 'components/UploadFile'

type IProps = {
  counter: number
  data: number
  addDispatch: () => void
  lessDispatch: () => void
  getAsyncData: () => void
}
type IState = {

}

class Root extends React.Component<IProps, IState>{

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
      default:
        break
    }
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render () {
    return (
      <div className='Robot-component'>
        <div>
          <span>{this.props.counter}</span>
          <button onClick={() => this.clickHandler('add')}>+</button>
          <button onClick={() => this.clickHandler('less')}>-</button>
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

export default Root
