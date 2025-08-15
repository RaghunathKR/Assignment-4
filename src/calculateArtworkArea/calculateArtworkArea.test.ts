import calculateArtworkArea from "./calculateArtworkArea";

describe("calculateArtworkArea", () => {
  test("calculates correct area for given dimensions and copies", () => {
    expect(calculateArtworkArea(3, 2, 1)).toBeCloseTo(8);
    expect(calculateArtworkArea(3, 2, 5000)).toBeCloseTo(40000);
  });
});
