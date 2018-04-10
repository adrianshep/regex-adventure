var marked = require('marked');

module.exports = function (str) {
  /* return html string */
  return str.match(/<blink>[^@@]*</blink>/g)
}
