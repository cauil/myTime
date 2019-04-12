export default function createStore(reducer, enhancer) {

  let state = null
  let listeners = []

  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer)
  }

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)

    listeners.forEach(listener => listener())
  }

  function subscribe(listener) {
    listeners.push(listener)

    return function unsubscribe() {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  function replaceReducer(nextReducer) {
    reducer = nextReducer
  }

  // initstate
  dispatch({})


  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer
  }
}
