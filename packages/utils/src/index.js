
const log = console.log
console.log = function () {
  log.apply(
    console,
    [(new Date().toString())].concat([].slice.call(arguments))
  )
}

export default log
