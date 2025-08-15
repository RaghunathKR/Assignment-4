import calculateArtworkArea from "./calculateArtworkArea/calculateArtworkArea";
import paintRequiredCalculator from "./paintRequiredCalculator";

function main() {
  const length = 3; // meters
  const width = 2;  // meters
  const copies = 5000;
  const coveragePerLiter = 11.4;

  const totalArea = calculateArtworkArea(length, width, copies);
  const paintRequired = paintRequiredCalculator(totalArea, coveragePerLiter);

  console.log(`Total area: ${totalArea} m²`);
  console.log(`Paint required: ${paintRequired} liters`);
}

main();
