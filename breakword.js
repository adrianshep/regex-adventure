module.exports = function (str) {
  var m = /...your regex goes here.../.exec(str)
  return m ? m[1] : null
}
