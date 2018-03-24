Export a function that takes a string argument and returns whether the string
starts with `cat`, `dog`, or `robot` followed by a number to the end of the
string.

Here's a template that you can use:

  module.exports = function (str) {
    return /.../.test(str)
  }

You can use the alteration operator `|` to solve this adventure.

The alteration operator matches among possible options:

  /xyz|qrs|tuv/.test('tuv') // true

Alteration operators are often seen in capture groups:

  /0x(ff|00|80)/.test('0x80') // true

To verify your solution, run:

  regex-adventure verify solution.js


  TAP version 13
  # (anonymous)
  ok 1 cat5
  ok 2 dog5000
  ok 3 robot10
  ok 4 xrobot10
  ok 5 robot
  ok 6 robot1000f

  1..6
  # tests 6
  # pass  6

  # ok


  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@     YOUR SOLUTION IS CORRECT!     @@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



  // Here is the reference solution:

    module.exports = function (str) {
      return /^(cat|dog|robot)\d+$/.test(str)
    }



incorrect solution:

  module.exports = function (str) {
    return /(cat|dog|robot\d+)/.test(str)
  }

  TAP version 13
# (anonymous)
ok 1 cat5
ok 2 dog5000
ok 3 robot10
not ok 4 xrobot10
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
ok 5 robot
not ok 6 robot1000f
  ---
    operator: notOk
    expected: false
    actual:   true
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...

1..6
# tests 6
# pass  4
# fail  2

#########################################
###   YOUR SOLUTION IS NOT CORRECT!   ###
#########################################
