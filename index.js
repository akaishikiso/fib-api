const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const Fibonacci = require("./fibonacci.js");

app.get("/", (req, res) => res.send("URLに/fib/数字を入れてください"));

app.get("/fib/:n", (req, res) => {
  const n = parseInt(req.params.n);
  Fibonacci(n, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
