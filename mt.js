export default function createStore(reducer) {

  let state = null
  const listeners = []

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(action)

    listeners.forEach(listener => listener())
  }

  function subscribe(listener) {
    listeners.push(listener)

    return function unsubscribe() {
      const index = listeners.indexOf(listener)

      listeners.splice(index, 1)
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
