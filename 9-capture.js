In this adventure, export a module that searches for the string `x=` followed by
numbers and returns the number found after the equal sign.

Here is a template that you can use:

  module.exports = function (str) {
    var m = /...your regex goes here.../.exec(str)
    return m ? m[1] : null
  }

Instead of calling `.test()`, we can use `.exec()`, which returns a match
object. If the regex matched the string, the match object will be populated with
capture groups.

Capture groups are pieces of regex inside of `(` and `)`.
The text that matches inside the `(` and `)` will be captured and available on
the match object with square bracket indexes starting from 1 for the leftmost
group.

To verify your solution, run:

  regex-adventure verify solution.js



  Incorrect solution:

  module.exports = function (str) {
    var m = /(x=\d*)/.exec(str)
    return m ? m[1] : null
  }


  TAP version 13
# (anonymous)
not ok 1 x=5
  ---
    operator: equal
    expected: '5'
    actual:   'x=5'
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 2 x=5
  ---
    operator: equal
    expected: '5'
    actual:   'x=5'
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 3 x=abc
  ---
    operator: equal
    expected: null
    actual:   'x='
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 4 beep x=123123 boop
  ---
    operator: equal
    expected: '123123'
    actual:   'x=123123'
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...

1..4
# tests 4
# pass  0
# fail  4

#########################################
###   YOUR SOLUTION IS NOT CORRECT!   ###
#########################################
