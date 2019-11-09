import React from 'react'
import './component.scss'

interface IProps {

}
interface IState {

}
let aa: string = ""

class Robot extends React.Component<IProps, IState>{

  // 成员属性、状态的声明，均在构造函数内部
  constructor(props: IProps) {
    super(props)

    this.state = {
      turnOn: false,
    }
  }

  xxxHandler() {
  }

  componentWillMount() {
    // ...
  }

  componentDidMount() {
    // ...
  }

  render () {
    return (
      <div className='Robot-component'>
        ddd
      </div>
    )
  }
}

export default Robot
