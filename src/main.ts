import calculatePaintForArtwork from "./calculatePaintForArtwork";


function main() {
  const length = 3;            // meters
  const width = 2;             // meters
  const copies = 5000;         // number of artworks
  const coats = 2;             // number of coats
  const coveragePerLiter = 11.4;
  const costPerLiter = 5;      // currency units
  const laborCost = 2000;      // currency units

  const { totalArea, paintRequired, paintCost, totalCost } =
    calculatePaintForArtwork(
      length,
      width,
      copies,
      coats,
      coveragePerLiter,
      costPerLiter,
      laborCost
    );

  console.log(`Total area: ${totalArea} m²`);
  console.log(`Paint required: ${paintRequired} liters`);
  console.log(`Paint cost: ${paintCost}`);
  console.log(`Total cost (including labor): ${totalCost}`);
}

main();
