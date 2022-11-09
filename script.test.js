//import calculateBonus from "./script.js";

const calculateBonus = require("./script");

describe("Тестирование расчёта бонуса", () => {
  it("Сумма больше 50", () => {
    expect(calculateBonus(20, 45)).toBe(50);
  });
  it("Сумма меньше 50", () => {
    expect(calculateBonus(20, 29)).toBe(49);
  });
  it("Сумма равна 50", () => {
    expect(calculateBonus(20, 30)).toBe(50);
  });
});
