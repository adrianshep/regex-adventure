Write a module that accepts a string as its argument and returns an array of
the quoted strings contained in the input. Strings will be quoted with double
quotes. Your program should include the double quotes in its output.

For example, given the string: 'cool "beans" "beep boop" whatever "yay"'
your program should return: ['"beans"', '"beep boop"', '"yay"']

Here is a template that you can use:

  module.exports = function (str) {
    return str.match(/.../g)
  }

You can use `str.match(regex)` to return an array string matches for `regex`
when the `regex` has `/g` flag enabled.

Negated character classes may be useful here.

To verify your solution, run:

  regex-adventure verify solution.js

  module.exports = function (str) {
    return str.match(/"[^""]*"/g)
  }


  TAP version 13
  # (anonymous)
  ok 1 one "two three four" five six "seven eight" nine
  ok 2 "beep boop" whatever "tacos" eleven "eighty"
  ok 3 empty ""

  1..3
  # tests 3
  # pass  3

  # ok


  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@     YOUR SOLUTION IS CORRECT!     @@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@


incorrect solution:

  module.exports = function (str) {
    return str.match(/("\W+"){+}/g)
  }


  TAP version 13
# (anonymous)
not ok 1 one "two three four" five six "seven eight" nine
  ---
    operator: deepEqual
    expected: [ '"two three four"', '"seven eight"' ]
    actual:   null
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 2 "beep boop" whatever "tacos" eleven "eighty"
  ---
    operator: deepEqual
    expected: [ '"beep boop"', '"tacos"', '"eighty"' ]
    actual:   null
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 3 empty ""
  ---
    operator: deepEqual
    expected: [ '""' ]
    actual:   null
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...

1..3
# tests 3
# pass  0
# fail  3

#########################################
###   YOUR SOLUTION IS NOT CORRECT!   ###
#########################################
