import calculateArtworkArea from "./calculateArtworkArea";

describe("calculateArtworkArea", () => {
  test("calculates correct area for 1 copy", () => {
    // Rectangle area = 3*2 = 6
    // Triangle base = 1 => triangle total = 1*2 = 2
    // Total per copy = 8
    expect(calculateArtworkArea(3, 2, 1)).toBeCloseTo(8);
  });

  test("calculates correct area for multiple copies", () => {
    expect(calculateArtworkArea(3, 2, 5000)).toBeCloseTo(40000);
  });

  test("handles zero copies", () => {
    expect(calculateArtworkArea(3, 2, 0)).toBe(0);
  });

  test("handles zero dimensions", () => {
    expect(calculateArtworkArea(0, 2, 10)).toBe(0);
    expect(calculateArtworkArea(3, 0, 10)).toBe(0);
  });

  test("handles decimal dimensions", () => {
    // Rectangle area = 2.5*1.5 = 3.75
    // Triangle base = 0.833... => triangle total = 1.25
    // Total per copy = 5
    expect(calculateArtworkArea(2.5, 1.5, 2)).toBeCloseTo(10);
  });

  test("handles negative dimensions as absolute values", () => {
    // Same as 3, 2, 1
    expect(calculateArtworkArea(-3, 2, 1)).toBeCloseTo(8);
    expect(calculateArtworkArea(3, -2, 1)).toBeCloseTo(8);
    expect(calculateArtworkArea(-3, -2, 1)).toBeCloseTo(8);
  });

  test("handles fractional copies", () => {
    // e.g., if doing half the work
    expect(calculateArtworkArea(3, 2, 0.5)).toBeCloseTo(4);
  });
});
