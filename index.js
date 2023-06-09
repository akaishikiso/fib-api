const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

//漸化式。これは再帰的であり数が大きくなるとパフォーマンスが悪い
// const getFibonacci = (n) => {
//   if (n <= 2) {
//     return 1;
//   } else {
//     return getFibonacci(n - 1) + getFibonacci(n - 2);
//   }
// };

const fibonacci = {};
const getFibonacci = (n) => {
  if (n <= 1) return n;
  if (fibonacci[n]) return fibonacci[n];
  return (fibonacci[n] = getFibonacci(n - 1) + getFibonacci(n - 2));
};

app.get("/", (req, res) => res.send("URLに/fib/数字を入れてください"));

app.get("/fib/:n", (req, res) => {
  const n = parseInt(req.params.n);
  if (!n) return;
  if (!Number.isInteger(n)) {
    res
      .status(400)
      .send({ status: 400, message: "Invalid input! This is not an integer" });
  } else if (n <= 0) {
    res.status(400).send({
      status: 400,
      message: "Invalid input number! This is not a positive integer",
    });
  } else {
    const result = getFibonacci(n);
    res.status(200).json({ result });
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
