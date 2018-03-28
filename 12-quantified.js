Export a function that takes a string argument and returns whether the string
contains exactly 8 columns of hex codes formatted like: 0xFF with one or more
characters of trailing whitespace after each hex code to separate the columns.

The hex codes begin with `0x` and have exactly 2 more characters, which may be
uppercase `A-F` or lowercase `a-f` or any digit.

Here's a template that you can use:

  module.exports = function (str) {
    return /.../.test(str)
  }

Quantifiers work equally well with capture groups as they do with characters and
character classes. There are more quantifiers aside from `+`, `*`, and `?`:

  {n,m}  must occur at least n times but no more than m times
  {n,}   must occur at least n times
  {n}    must occur exactly n times

To verify your solution, run:

  regex-adventure verify solution.js



incorrect solution:

module.exports = function (str) {
  return /^(0x(\d\w)?(\d\w)?)\s+{8}/.test(str)
}


TAP version 13
# (anonymous)
not ok 1 SyntaxError: Invalid regular expression: /^(0x(\d\w)?(\d\w)?)\s+{8}/: Nothing to repeat
  ---
    operator: error
    expected:
      undefined
    actual:
      [SyntaxError: Invalid regular expression: /^(0x(\d\w)?(\d\w)?)\s+{8}/: Nothing to repeat]
    stack:
      SyntaxError: Invalid regular expression: /^(0x(\d\w)?(\d\w)?)\s+{8}/: Nothing to repeat
        at module.exports (/Users/adrianshepelavey/nodeschool/regex-adventure/quantified.js:2:3)
        at /usr/local/lib/node_modules/regex-adventure/problems/quantified_group/index.js:11:8
        at Test.<anonymous> (/usr/local/lib/node_modules/regex-adventure/node_modules/adventure-verify/index.js:48:40)
        at Test.bound [as _cb] (/usr/local/lib/node_modules/regex-adventure/node_modules/tape/lib/test.js:60:32)
        at Test.run (/usr/local/lib/node_modules/regex-adventure/node_modules/tape/lib/test.js:74:14)
        at Test.bound [as run] (/usr/local/lib/node_modules/regex-adventure/node_modules/tape/lib/test.js:60:32)
        at Immediate.next (/usr/local/lib/node_modules/regex-adventure/node_modules/tape/lib/results.js:66:15)
        at runCallback (timers.js:672:20)
        at tryOnImmediate (timers.js:645:5)
        at processImmediate [as _immediateCallback] (timers.js:617:5)
  ...
not ok 2 plan != count
  ---
    operator: fail
    expected: 6
    actual:   1
  ...

1..2
# tests 2
# pass  0
# fail  2

#########################################
###   YOUR SOLUTION IS NOT CORRECT!   ###
#########################################
