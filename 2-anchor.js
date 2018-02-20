This time your regex should match only when the given string begins with
"LITERALLY".

Here is a template that you can use:

  module.exports = function (str) {
    /* return whether str begins with the string "LITERALLY" */
  }

Use a `^` character to anchor on the beginning of a piece of text.

Remember from the previous adventure that regexes in javascript are between two
`/` characters and they have a `.test()` method.

To verify your solution, run:

  regex-adventure verify solution.js


  TAP version 13
# (anonymous)
ok 1 LITERALLY CAN'T EVEN
ok 2 FIGURATIVELY can't even
ok 3 I am LITERALLY on a roll down a hill right now
ok 4 literaturely
ok 5 litERALLY whatever
ok 6 LITERALLY WHATEVER

1..6
# tests 6
# pass  6

# ok


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@     YOUR SOLUTION IS CORRECT!     @@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// Here is the reference solution:

  module.exports = function (str) {
    return /^LITERALLY/.test(str)
  }
