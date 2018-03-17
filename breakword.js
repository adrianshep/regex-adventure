module.exports = function (str) {
  var m = /\W\bx=(\d+)\b\W/.exec(str)
  return m ? m[1] : null
}
