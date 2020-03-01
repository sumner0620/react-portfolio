import { add, subtract } from "../math";

describe("Math lib", () => {
  it("can add two numbers", () => {
    const result = add(5, 7);
    expect(result).toEqual(12);
  });
  it("can subtract two numbers", () => {
    const result = subtract(9, 3);
    expect(result).toEqual(6);
  });
});
