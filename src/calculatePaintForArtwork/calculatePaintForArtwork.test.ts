import calculatePaintForArtwork from "./calculatePaintForArtwork";

describe("calculatePaintForArtwork", () => {
  test("calculates correct values for normal case", () => {
    const result = calculatePaintForArtwork(3, 2, 10, 2, 11.4, 5, 100);

    expect(result.totalArea).toBeCloseTo(80);         // area for 10 copies
    expect(result.paintRequired).toBeCloseTo(14.04);  // area / coverage * coats
    expect(result.paintCost).toBeCloseTo(70.2);       // paintRequired * costPerLiter
    expect(result.totalCost).toBeCloseTo(170.2);      // paintCost + labor
  });

  test("handles zero copies", () => {
    const result = calculatePaintForArtwork(3, 2, 0, 2, 11.4, 5, 100);
    expect(result.totalArea).toBe(0);
    expect(result.paintRequired).toBe(0);
    expect(result.paintCost).toBe(0);
    expect(result.totalCost).toBe(100); // only labor cost
  });

  test("handles zero coats", () => {
    const result = calculatePaintForArtwork(3, 2, 5, 0, 11.4, 5, 50);
    expect(result.paintRequired).toBe(0);
    expect(result.paintCost).toBe(0);
    expect(result.totalCost).toBe(50);
  });

  test("handles negative inputs as absolute", () => {
    const result = calculatePaintForArtwork(-3, -2, -5, -2, 11.4, -5, -100);
    expect(result.totalArea).toBeGreaterThan(0);
    expect(result.paintRequired).toBeGreaterThan(0);
  });
});
