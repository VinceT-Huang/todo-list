import { connect } from 'react-redux'
import Component from './component'

import {
  addDispatch,
  lessDispatch,
  getAsyncData,
} from 'store/modules/root'

const mapDispatchToProps = {
  addDispatch,
  lessDispatch,
  getAsyncData,
}

const mapStateToProps = (state) => ({
  counter: state.root.counter,
  data: state.root.data,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
