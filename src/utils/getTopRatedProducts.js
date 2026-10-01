export function getTopRatedProducts(products, count) {
    const sorted = [...products].sort((a, b) => b.rating - a.rating);
    return sorted.slice(0, count);
  }