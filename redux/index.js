export const createStore = (reducer, hightener) => {
  if(hightener) {
    return hightener(createStore)(reducer)
  }
  let currentState = void 0, watcher = []

  const getState = () => currentState
  const subscribe = (fn) => {
    if(typeof fn === 'function') {
      watcher.push(fn)
    }
  }
  const dispatch = (action) => {
    currentState = reducer(currentState, action)
    watcher.forEach(fn => fn())

    return action
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}

export const applyMiddleware = (...middlewares) => createStore => reducer => {
  const store = createStore(reducer)
  let dispatch = store.dispatch

  middlewares.reduce((sum, cur) => {
    dispatch = cur(store)(dispatch)
  })

  return {...store, dispatch}
}
