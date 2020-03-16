import { connect } from 'react-redux'
import Component from './component'

import {
} from 'store/modules/root'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
  counter: state.root.counter,
  data: state.root.data,
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
