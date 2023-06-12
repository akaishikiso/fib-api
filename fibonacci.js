const getFibonacci = require("./getFibonacci");

module.exports = function Fibonacci(n, res) {
  const result = getFibonacci(n);
  console.log(result);
  if (typeof result !== "number") {
    return res.status(400).send({
      status: 400,
      message: result,
    });
  } else {
    return res.status(200).json({ result });
  }
};
