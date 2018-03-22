module.exports = function (str) {
  return /\W(cat|dog|robot\d+)\W/.test(str)
}
