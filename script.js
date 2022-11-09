function calculateBonus(a, b) {
  let bonus;
  const sum = a + b;
  debugger; // константе sum присвоено значение суммы переменнтых a и b (30). Переменная bonus не определена
  sum > 50 ? (bonus = 50) : (bonus = sum);
  debugger; // Переменной bonus присвоено значение исходя из условия выше (30)
  return bonus;
}

module.exports = calculateBonus;

// console.log(calculateBonus(1, 45));
