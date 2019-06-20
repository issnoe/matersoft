
const log = console.log
console.log = function () {
  // Invoke the original method with an additional parameter
  log.apply(
    console,
    [(new Date().toString())].concat([].slice.call(arguments))
  )
}
export default log
