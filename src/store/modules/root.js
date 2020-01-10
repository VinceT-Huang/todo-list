import {combineReducers} from 'redux'
import axios from 'axios'

const GET_ASYNC_DATA = 'GET_ASYNC_DATA'

export const addDispatch = () => ({type: 'add'})

export const lessDispatch = () => ({type: 'less'})

const counter = (preState = 1, action) => {
  let {type} = action
  switch(type) {
    case 'add':
      return preState + 1
    case 'less':
      return preState - 1
    default:
      return preState
  }
}

export const getAsyncData = () => {
  return dispatch => {
    new Promise((resolve, reject) => {
      resolve(Date.now())
    }).then(data => dispatch({type: GET_ASYNC_DATA, data: data}))
  }
}
const data = (preState = 222, action) => {
  if(action.type === GET_ASYNC_DATA) {
    return action.data
  } else {
    return preState
  }

}

export const uploadFile = (formData, successCb, failCb) => {
  return dispatch => {
    axios({
      url: '/upload/single',
      baseURL: 'http://localhost:4000',
      method: 'POST',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(data => {
      successCb(data)
    }).catch(err => {
      failCb(err)
    })
  }
}

const root = combineReducers({
  counter,
  data,
})

export default root
