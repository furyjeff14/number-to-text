import { render, screen } from "@testing-library/react";
import App from "./App";
const { numToWords } = require("./NumbersToWords.js");

test("word to numbers", () => {
  expect(numToWords(1) == "one");

  expect(numToWords(12) == "twelve");

  expect(numToWords(153) == "one hundred fifty three");

  expect(numToWords(2000) == "two thousand");

  expect(numToWords(12468) == "twelve thousand four hundred sixty eight");

  expect(numToWords(500696) == "five hundred thousand six hundred ninety six");
});
