Export a function that takes a string argument and returns whether the string
ends with a literal `.` (dot).

Here's a template that you can use:

  module.exports = function (str) {
    /* ... */
  }

`.` is normally a special character in a regexp, but you can refer to a literal
`.` (dot) character by putting a \ (backslash) in front of it.

Whenever you want to refer to a literal one of these characters, you will need to
put a `\` before the character:

  . * + ? [ ] ( ) ^ $ { } | \

To verify your solution, run:

  regex-adventure verify solution.js

  TAP version 13
# (anonymous)
ok 1 abc.
ok 2 abc
ok 3 ...
ok 4 ...x
ok 5 ...\n

1..5
# tests 5
# pass  5

# ok


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@     YOUR SOLUTION IS CORRECT!     @@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// Here is the reference solution:

  module.exports = function (str) {
    return /\.$/.test(str)
  }
