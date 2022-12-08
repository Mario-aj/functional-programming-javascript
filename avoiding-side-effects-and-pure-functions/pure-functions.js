/** Pure Functions
 * The function depends on the input provided and not on external data that changes.
 * The funcion does not cause side effects. It does not cause change beyond its scope.
 * Given the same input the function will always return the same output
 */

let incrementWithoutSideEffect = function (number) {
  return number + 1;
};

let avarage = function (scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) total += scores[i];

  return total / scores.length;
};

console.log(avarage([90, 30, 40, 50, 60]));
console.log(avarage([90, 30, 40, 50, 60]));
console.log(avarage([90, 30, 40, 50, 60]));

console.log(incrementWithoutSideEffect(3));
console.log(incrementWithoutSideEffect(3));
console.log(incrementWithoutSideEffect(3));
