var marked = require('marked');

module.exports = function (str) {
  /* return html string */
  var md = marked(str)
  return md.replace(/@@(.+?)@@/g, '<blink>$1</blink>')
}
