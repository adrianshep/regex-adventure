Write a module that returns true only when:

  the first character is not a digit
  and the second character is not a capital letter.

Here is a template that you can use:

  module.exports = function (str) {
    // ...
  }

Negating a character class makes it match the opposite characters.
To negate a character class, include a `^` as the first character inside the
`[]`s.

You will not need these right now, but there are some handy shortcuts for character
classes:

  * \d - [0-9]        any digit
  * \w - [A-Za-z_]    word character
  * \s - [ \t\r\n\f]  whitespace

Capitalize the shortcut escape characters to negate them:

  * \D - [^0-9]        not a digit
  * \W - [^A-Za-z_]    not a word character
  * \S - [^ \t\r\n\f]  not whitespace

There is a special character class `.` that matches any character, except for
newlines (under some conditions).

To verify your solution, run:

  regex-adventure verify solution.js

  TAP version 13
  # (anonymous)
  ok 1 1A
  ok 2 A1
  ok 3 ABC
  ok 4 abc
  ok 5 555
  ok 6 5z
  ok 7 ...

  1..7
  # tests 7
  # pass  7

  # ok


  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@     YOUR SOLUTION IS CORRECT!     @@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



  // Here is the reference solution:

    module.exports = function (str) {
      return /^[^0-9][^A-Z]/.test(str)
    }
