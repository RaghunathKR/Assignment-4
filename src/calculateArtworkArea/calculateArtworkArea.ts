export default function calculateArtworkArea(
  length: number,
  width: number,
  copies: number
): number {
  const absLength = Math.abs(length);
  const absWidth = Math.abs(width);
  const absCopies = Math.abs(copies);

  const rectangleArea = absLength * absWidth;
  const triangleBase = absLength / 3;
  const triangleAreaTotal = triangleBase * absWidth; // since 2 triangles

  const totalPerCopy = rectangleArea + triangleAreaTotal;
  return totalPerCopy * absCopies;
}
