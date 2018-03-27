module.exports = function (str) {
  return /^(0x(\d\w)?(\d\w)?\s+{8}/.test(str)
}
