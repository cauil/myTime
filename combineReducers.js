export default function combineReducers(reducers) {
  const preKeys = Object.keys(reducers)

  return function reducer(state={}, action) {
    return preKeys.reduce((acc, nextKey) => {
      acc[nextKey] = reducers[nextKey](state[nextKey], action)
      return acc
    }, {})
  }
}
