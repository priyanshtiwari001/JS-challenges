function calculator(no1, no2, symbol) {
  switch (symbol) {
    case "*":
      return no1 * no2;
    case "+":
      return no1 + no2;
    case "-":
      return no1 - no2;
    case "/":
      return no1 / no2;
  }
}

module.exports = calculator;
