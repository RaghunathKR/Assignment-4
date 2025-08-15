import calculateArtworkArea from "../calculateArtworkArea/calculateArtworkArea";
import paintRequiredForMultipleCoats from "../paintRequiredForMultipleCoats/paintRequiredForMultipleCoats";
import calculatePaintCost from "../calculatePaintCost/calculatePaintCost";
import calculateTotalCost from "../calculateTotalCost/calculateTotalCost";

export default function calculatePaintForArtwork(
  length: number,
  width: number,
  copies: number,
  coats: number,
  coveragePerLiter: number,
  costPerLiter: number,
  laborCost: number
) {
  // 1. Total area
  const totalArea = calculateArtworkArea(length, width, copies);

  // 2. Paint required for given coats
  const paintRequired = paintRequiredForMultipleCoats(
    totalArea,
    coveragePerLiter,
    coats
  );

  // 3. Paint cost
  const paintCost = calculatePaintCost(paintRequired, costPerLiter);

  // 4. Total cost (paint + labor)
  const totalCost = calculateTotalCost(paintCost, laborCost);

  return {
    totalArea,
    paintRequired,
    paintCost,
    totalCost
  };
}
