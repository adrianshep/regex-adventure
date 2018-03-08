Strings in javascript have a `.split()` method. `.split()` takes an argument
that can be a string or a regex.

Write a module that accepts a string as its argument and returns an array that
splits the string on commas separated by arbitrary amounts of whitespace.

Here is a template that you can use:

  module.exports = function (str) {
    return str.split(/* ... your regex goes here ... */)
  }

Remember that `\s` is a shortcut for whitespace characters `[ \t\r\n\f]`.

To verify your solution, run:

  regex-adventure verify solution.js



  This solution is incorrect:

  module.exports = function (str) {
    return str.split(/\s,\s/)
  }

  TAP version 13
# (anonymous)
not ok 1 1,2,3
  ---
    operator: deepEqual
    expected: [ '1', '2', '3' ]
    actual:   [ '1,2,3' ]
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 2 4, 5, 6, 7
  ---
    operator: deepEqual
    expected: [ '4', '5', '6', '7' ]
    actual:   [ '4, 5, 6, 7' ]
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
ok 3 1337
not ok 4 a,\nb,\nc,\nd
  ---
    operator: deepEqual
    expected: [ 'a', 'b', 'c', 'd' ]
    actual:   [ 'a,\nb,\nc,\nd' ]
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...
not ok 5 q\r\n ,\r\n r\r\n ,\r\n s
  ---
    operator: deepEqual
    expected: [ 'q', 'r', 's' ]
    actual:   [ 'q\r\n ', '\n  r\r\n ', '\n  s' ]
    at: Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
  ...

1..5
# tests 5
# pass  1
# fail  4

#########################################
###   YOUR SOLUTION IS NOT CORRECT!   ###
#########################################
