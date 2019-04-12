import compose from './compose.js'

export default function applyMiddleware(...middlerwares) {
  return createStore => (...args) => {
    const store = createStore(...args)

    const dispatch = () => {}

    const middlerwareApi = {
      getState: store.getState,
      dispatch: (...arg) => dispatch(...arg)
    }

    const newMiddlerwares = middlerwares.map(m => m(middlerwareApi))

    dispatch = compose(...newMiddlerwares)(store.dispatch)

    return {
      ...store,
      dispatch
    }
  }
}
