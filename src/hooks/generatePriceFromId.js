export function generatePriceFromId(id) {
  const prices = [4.99, 7.99, 9.99, 12.99, 14.99, 19.99];
  return prices[id % prices.length];
}
