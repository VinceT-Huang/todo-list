import React from 'react'
import './component.scss'
import UploadFile from 'components/UploadFile'
import {Link} from 'react-router-dom'
import * as d3 from 'd3'
import {Button} from 'antd'
interface IVertex {
  title: string
  x: string
  y: string
}
type IProps = {
  match: any
  location: any
  history: any
  staticContext: any
  counter: number
  data: number
}
type IState = {
  vertexes: Array<IVertex>
}
const getCoordination = () => (Math.random() * 700).toFixed(1)

class Detail extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)

    this.state = {
      vertexes: [
        {title: '1', x: getCoordination(), y: getCoordination()},
        {title: '2', x: getCoordination(), y: getCoordination()},
        {title: '3', x: getCoordination(), y: getCoordination()},
        {title: '4', x: getCoordination(), y: getCoordination()},
        {title: '5', x: getCoordination(), y: getCoordination()},
        {title: '6', x: getCoordination(), y: getCoordination()},
        {title: '7', x: getCoordination(), y: getCoordination()},
        {title: '8', x: getCoordination(), y: getCoordination()},
      ]
    }
  }
  draw() {
    const {vertexes} = this.state

    var nodesUpdate = d3.select('.paint').selectAll('.node-item')
    .data(vertexes)

    var nodesEnter = nodesUpdate.enter()
    var nodesExit = nodesUpdate.exit().remove()

    nodesEnter
    .append('div')
    .classed('node-item', true)
    .style('transform', function(d) {
      return `translate(${Number(d.x) - 25}px, ${Number(d.y) - 25}px)`
    })
    .text(d => d.title)
  }
  addVertex() {
    this.setState(prevState => ({
      vertexes: [
        ...prevState.vertexes,
        {
          title: String(prevState.vertexes.length + 1), x: getCoordination(), y: getCoordination()
        }
      ]
    }))
  }
  deleteVertex() {
    this.setState(prevState => ({
      vertexes: [
        ...prevState.vertexes.slice(0, prevState.vertexes.length - 1)
      ]
    }))
  }
  componentWillMount() {
    console.log('Detail will Mount')
  }
  componentDidMount() {
    this.draw()
  }
  componentDidUpdate() {
    console.log('Detail Did Update')
  }
  componentWillUnmount() {
    console.log('Detail will unMount')
  }

  render () {
    return (
      <div className='detail-component'>
        <div className='paint'></div>
        <div className='btn-area'>
          <Button
            className='operate-btn'
            onClick={() => this.addVertex()}
            >加一个节点</Button>
          <Button
            className='operate-btn'
            onClick={() => this.deleteVertex()}
            >删除当前尾节点</Button>
          <Button
            className='operate-btn'
            onClick={() => this.draw()}
            >重新渲染</Button>
        </div>
      </div>
    )
  }
}

export default Detail
