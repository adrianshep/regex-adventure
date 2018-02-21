This time your regex should match only when the given string ends with
"BANANAS".

Here is a template that you can use:

  module.exports = function (str) {
    /* return whether str ends with "BANANAS" */
  }

Use a `$` character to anchor on the end of a piece of text.

Remember from the previous adventure that regexes in javascript are between two
`/` characters and they have a `.test()` method.

To verify your solution, run:

  regex-adventure verify solution.js

  TAP version 13
# (anonymous)
ok 1 THIS SHIITAKE IS BANANAS
ok 2 BANANAS
ok 3 BANANAS ARE GREEN OR YELLOW
ok 4 NOTHING
ok 5 EVERYTHING IS BANANAS.
ok 6 EVERYTHING IS BANANAS

1..6
# tests 6
# pass  6

# ok


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@     YOUR SOLUTION IS CORRECT!     @@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// Here is the reference solution:

  module.exports = function (str) {
    return /BANANAS$/.test(str)
  }
