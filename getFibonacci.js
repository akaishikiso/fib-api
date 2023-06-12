// const getFibonacci = (n) => {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return getFibonacci(n - 1) + getFibonacci(n - 2);
//   }
// };
module.exports = function getFibonacci(n) {
  const fibonacci = {};
  if (!Number.isInteger(n)) return "Please input an integer";
  else if (n < 1) return "Please input a positive integer";
  else if (n < 3) return 1;
  if (fibonacci[n]) return fibonacci[n];
  return (fibonacci[n] = getFibonacci(n - 1) + getFibonacci(n - 2));
};
