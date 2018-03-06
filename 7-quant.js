Export a function that takes a filename string as an argument and returns
whether the entire filename is a sequence of one or more digits followed by
`.jpg` or `.jpeg`.

Here's a template that you can use:

  module.exports = function (str) {
    /* ... */
  }

When you place a quantifier character after a character or character class, that
character will match a number of times according to the quanitifier operator in
use.

Here are some simple quantifiers:

  *  zero or more times
  +  one or more times
  ?  zero or one times

To verify your solution, run:

  regex-adventure verify solution.js

  TAP version 13
  # (anonymous)
  ok 1 123.jpg
  ok 2 123.jpeg
  ok 3 abc.jpeg
  ok 4 123abc.jpeg
  ok 5 123
  ok 6 123.jpg2000
  ok 7 123.png
  ok 8 .jpeg
  ok 9 111.jpeeg

  1..9
  # tests 9
  # pass  9

  # ok


  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@     YOUR SOLUTION IS CORRECT!     @@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



  // Here is the reference solution:

    module.exports = function (str) {
      return /^\d+\.jpe?g$/.test(str)
    }


incorrect attempt at solution:

  module.exports = function (str) {
    /* ... */
    return /[0-9+\.jpg]|[0-9+\.jpeg]/.test(str)
  }

  TAP version 13
# (anonymous)
ok 1 123.jpg
ok 2 123.jpeg
not ok 3 abc.jpeg
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 4 123abc.jpeg
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 5 123
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 6 123.jpg2000
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 7 123.png
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 8 .jpeg
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 9 111.jpeeg
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...

1..9
# tests 9
# pass  2
# fail  7

#########################################
###   YOUR SOLUTION IS NOT CORRECT!   ###
#########################################
