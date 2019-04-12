export default function compose(...fns) {
  return fns.reduce((a, b) => (...args) => {
    return a(b)(...args)
  })
}
