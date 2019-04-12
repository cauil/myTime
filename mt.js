function createStore(reducer) {

  function getState() {
  }

  function dispatch(action) {
    reducer(action)
  }

  function subscribe(listener) {
  }

  function replaceReducer(nextReducer) {
  }

  const state = dispatch({})


  return {
    getState,
    subscribe,
    dispatch,
    replaceReducer
  }
}
