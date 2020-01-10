import { connect } from 'react-redux'
import Component from './component'
import { uploadFile } from 'store/modules/root'

const mapDispatchToProps = {
  uploadFile
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
