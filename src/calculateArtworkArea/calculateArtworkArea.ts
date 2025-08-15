export default function calculateArtworkArea(
  length: number,
  width: number,
  copies: number
): number {
  const rectangleArea = length * width;
  const triangleBase = length / 3;
  const triangleAreaTotal = triangleBase * width; // since 2 triangles
  const totalPerCopy = rectangleArea + triangleAreaTotal;
  return totalPerCopy * copies;
}
