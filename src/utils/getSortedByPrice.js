export function getSortedByPrice(products, order){
    const sorted = [...products].sort((a,b)=>order==="asc"?a.price - b.price: b.price - a.price);

    return sorted
}