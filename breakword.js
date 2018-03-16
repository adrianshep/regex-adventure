module.exports = function (str) {
  var m = /\Wx=(\d+)\W/.exec(str)
  return m ? m[1] : null
}
