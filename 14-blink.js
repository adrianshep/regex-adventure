Implement a custom markdown operator that will translate all text between
`@@...@@` and into `<blink>...</blink>` tags.

For example, `@@whatever@@` becomes `<blink>whatever</blink>`.

In addition to the `@@...@@` operator, your code should support existing markdown
syntax, including inside `@@...@@` operators.

Your code should accept a string of markdown as input and return a string of
html output. Here is a template that you can use:

  module.exports = function (str) {
    /* return html string */
  }

For this task, use the `marked` module: `npm install marked`

To verify your solution, run:

  regex-adventure verify solution.js



incorrect solution:

module.exports = function (str) {
  /* return html string */
  return str.match(/<blink>[^@@]*</blink>/g)
}


  TAP version 13
# (anonymous)
not ok 1 SyntaxError: Invalid regular expression flags
  ---
    operator: error
    expected: undefined
    actual:   [SyntaxError: Invalid regular expression flags]
    stack:
      /Users/adrianshepelavey/nodeschool/regex-adventure/blink.js:3
      return str.match(/<blink>[^@@]*</blink>/g)
                       ^

    SyntaxError: Invalid regular expression flags
        at createScript (vm.js:56:10)
        at Object.runInThisContext (vm.js:97:10)
        at Module._compile (module.js:542:28)
        at Object.Module._extensions..js (module.js:579:10)
        at Module.load (module.js:487:32)
        at tryModuleLoad (module.js:446:12)
        at Function.Module._load (module.js:438:3)
        at Module.require (module.js:497:17)
        at require (internal/module.js:20:19)
        at /usr/local/lib/node_modules/regex-adventure/problems/blink/index.js:10:11
  ...
not ok 2 plan != count
  ---
    operator: fail
    expected: 4
    actual:   1
  ...

1..2
# tests 2
# pass  0
# fail  2

#########################################
###   YOUR SOLUTION IS NOT CORRECT!   ###
#########################################
