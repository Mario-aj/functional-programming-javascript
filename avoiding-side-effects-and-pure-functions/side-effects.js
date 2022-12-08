/** Side effects
 * Changing a value globally (variable, property or data structure).
 * Changing the original value of functions argument.
 * Throwing an exception.
 * Printing to the screen or logging.
 * Triggering an external process.
 * Invoking other functions that have side-effects.
 */

let count = 0;

let incrementWithSideEffect = function () {
  count++;

  return count;
};

let incrementWithoutSideEffect = function (number) {
  return number + 1;
};
