import React from 'react'
import './component.scss'
import {Button} from 'antd'


const previewImage = (files) => {
  if(!files) {
    return null
  }
  return files.map(file => {
    let url = window.URL.createObjectURL(file)
    return (
      <img src={url} alt="" onLoad={() => window.URL.revokeObjectURL(url)}/>
    )
  })
}

class UploadFile extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      files: null
    }
  }

  componentDidMount() {

  }
  clickHandler = (e) => {

    // var formData = new FormData()
    // formData.append('file', file)
    // this.props.uploadFile(formData, data => {
    //   console.log(data)
    // }, err => {
    //   console.log(err)
    // })
  }
  uploadChangeHandler = (e) => {
    let {files} = e.target
    if(!files || files.length === 0) {
      this.setState({
        files: null
      })
    } else {
      this.setState({
        files: [...files]
      })
    }
  }
  addPictureHandler(e) {
    this.inputDom.click()
  }
  render() {
    const {files} = this.state
    return (
      <div className='upload-file-component'>
        <div
          className='add-pic'
          onClick={() => this.addPictureHandler()}
        >添加图片</div>
        <Button onClick={() => this.clickHandler()}>上传</Button>
        <input
          type="file"
          multiple
          ref={(ref) => this.inputDom = ref}
          onChange={this.uploadChangeHandler}
          style={{display: 'none'}}
        />
        <div className="image-box">
          {previewImage(files)}
        </div>
      </div>
    )
  }
}

export default UploadFile
