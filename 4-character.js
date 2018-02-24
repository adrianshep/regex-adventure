Write a module that returns true only when the input string starts with a
lower-case vowel or a digit.

Here is a template that you can use:

  module.exports = function (str) {
    /* return whether str starts with a vowel or a digit */
  }

For this adventure, use a character class anchored to the start of the input.

Character classes are lists of characters between square brackets
live inside square brackets `[...]`. Each character between the `[` and `]`
characters is a valid potential match for input.

For example, `[abcdexyz]` will match `a`, `b`, `c`, `d`, `e`, `x`, `y`, or `z`.
Sequential ranges can appear in character classes separated by `-`. For example,
`[abcdexyz]` can be shortened to read `[a-exyz]` or `[a-ex-z]`.

Remember from previous adventures that regexes in javascript are defined between
two `/` characters and they have a `.test()` method.

To verify your solution, run:

  regex-adventure verify solution.js

  TAP version 13
# (anonymous)
ok 1 az
ok 2 babbage
ok 3 AAA
ok 4 123
ok 5 abc123
ok 6 Q1
ok 7 under
ok 8 404x
ok 9 obelisk

1..9
# tests 9
# pass  9

# ok


@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@@@     YOUR SOLUTION IS CORRECT!     @@@
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// Here is the reference solution:

  module.exports = function (str) {
    return /^[aeiou0-9]/.test(str)
  }
