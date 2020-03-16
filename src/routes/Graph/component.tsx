import React from 'react'
import './component.scss'
import UploadFile from 'components/UploadFile'
import {Link} from 'react-router-dom'
import * as d3 from 'd3'
import {Button, Input} from 'antd'
interface IVertex {
  title: string
  key: string | number
  x: string
  y: string
  bg: undefined | string
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
  vertexes: Array<IVertex>,
}
const getCoordination = () => (Math.random() * 700).toFixed(1)
const getKey = () => String((Math.random() * (1e+10))).substring(0, 10)

class Graph extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props)

    this.state = {
      vertexes: [
        {title: '0', key: getKey(), x: getCoordination(), y: getCoordination(), bg: void 0},
        {title: '1', key: getKey(), x: getCoordination(), y: getCoordination(), bg: void 0},
        {title: '2', key: getKey(), x: getCoordination(), y: getCoordination(), bg: void 0},
        {title: '3', key: getKey(), x: getCoordination(), y: getCoordination(), bg: void 0},
        {title: '4', key: getKey(), x: getCoordination(), y: getCoordination(), bg: void 0},
        {title: '5', key: getKey(), x: getCoordination(), y: getCoordination(), bg: void 0},
        {title: '6', key: getKey(), x: getCoordination(), y: getCoordination(), bg: void 0},
        {title: '7', key: getKey(), x: getCoordination(), y: getCoordination(), bg: void 0},
        {title: '8', key: getKey(), x: getCoordination(), y: getCoordination(), bg: void 0},
      ],
    }
  }
  draw() {
    const {vertexes} = this.state

    d3.select('.paint').selectAll('.node-item').remove()
    // 数据绑定 默认进入update状态
    var nodesUpdate = d3.select('.paint').selectAll('.node-item')
    .data(vertexes)

    // 进入enter状态 对应于添加数据节点
    var nodesEnter = nodesUpdate.enter()
    // 进入exit状态 对应于删除数据节点
    var nodesExit = nodesUpdate.exit()
    // 进行清除操作 根据最新数据集 删除没有对应数据集的DOM节点
    nodesExit.remove()

    // 进行更新节点操作 根据最新数据集 新增DOM节点与数据集中的数据元素对应
    nodesEnter
    .append('div')
    .classed('node-item', true)
    .style('background-color', function(d) {
      return d.bg || ''
    })
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
          title: String(prevState.vertexes.length), x: getCoordination(), y: getCoordination(), bg: void 0, key: getKey(),
        }
      ]
    }))
  }
  deleteVertex() {
    this.setState(prevState => {
      prevState.vertexes.splice(prevState.vertexes.length - 1, 1)
      return {
        ...prevState
      }
    })
  }
  changeBg() {
    const {vertexes} = this.state
    let [r, g, b, a] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), (Math.random().toFixed(1))]
    vertexes.forEach(item => item.bg = `rgba(${r}, ${g}, ${b}, ${a})`)
    this.setState({
      vertexes: [...vertexes]
    })
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
      <div className='graph-component'>
        <div className='paint'></div>
        <div className='btn-area'>
          <Button
            className='operate-btn'
            onClick={() => this.addVertex()}
            >尾部新增一个节点</Button>
          <Button
            className='operate-btn'
            onClick={() => this.deleteVertex()}
            >删除尾节点</Button>
          <Button
            className='operate-btn'
            onClick={() => this.draw()}
            >重新渲染</Button>
          <Button
            className='operate-btn'
            onClick={() => this.changeBg()}
            >变色</Button>
        </div>
      </div>
    )
  }
}

export default Graph
