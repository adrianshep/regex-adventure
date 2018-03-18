Just like before, export a module that searches for `x=` followed by a number
and return the number found after the equal sign.

Unlike before, your solution should only match `x=` when there are no word
characters immediately before `x=` or immediately after the number to the right
of the equal sign.

Here is a template that you can use:

  module.exports = function (str) {
    var m = /...your regex goes here.../.exec(str)
    return m ? m[1] : null
  }

Use `(` and `)` to create a capture group like before.

You can use a special type of anchor, `\b` to match when there is a break in a
word.

To verify your solution, run:

  regex-adventure verify solution.js

  // Here is the reference solution:

    module.exports = function (str) {
      var m = /\bx=(\d+)\b/.exec(str)
      return m ? m[1] : null
    }


  TAP version 13
  # (anonymous)
  ok 1 x=5
  ok 2 x=5
  ok 3 fox=123
  ok 4 x=abc
  ok 5 x=33qrs
  ok 6 3x=33
  ok 7 beep x=123123 boop

  1..7
  # tests 7
  # pass  7

  # ok


  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@     YOUR SOLUTION IS CORRECT!     @@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



incorrect solution:

  module.exports = function (str) {
    var m = /\W\bx=(\d+)\b\W/.exec(str)
    return m ? m[1] : null
  }

  TAP version 13
# (anonymous)
not ok 1 x=5
  ---
    operator: equal
    expected: '5'
    actual:   null
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 2 x=5
  ---
    operator: equal
    expected: '5'
    actual:   null
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
ok 3 fox=123
ok 4 x=abc
ok 5 x=33qrs
ok 6 3x=33
ok 7 beep x=123123 boop

1..7
# tests 7
# pass  5
# fail  2

#########################################
###   YOUR SOLUTION IS NOT CORRECT!   ###
#########################################
