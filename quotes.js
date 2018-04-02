module.exports = function (str) {
  return str.match(/("\W+"){+}/g)
}
