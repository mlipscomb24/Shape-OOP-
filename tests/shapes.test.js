const { Circle, Square, Triangle } = require("../shapes");

describe("Shape classes", () => {
  test("Circle renders correctly", () => {
    const circle = new Circle("ABC", "red", "blue");
    const svg = circle.render();
    expect(svg).toContain("<circle");
    expect(svg).toContain("ABC");
  });

  test("Square renders correctly", () => {
    const square = new Square("XYZ", "green", "yellow");
    const svg = square.render();
    expect(svg).toContain("<rect");
    expect(svg).toContain("XYZ");
  });

  test("Triangle renders correctly", () => {
    const triangle = new Triangle("123", "black", "white");
    const svg = triangle.render();
    expect(svg).toContain("<polygon");
    expect(svg).toContain("123");
  });
});
