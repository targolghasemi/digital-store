export function filterProductsByCategory(products, category){
    if (category.type === "all") {
        return products
    }

    if (category.type === "category") {
        return products.filter((product)=> product.category === category.value)
    }

    if (category.type === "keyword") {
        return products.filter((product)=>{
            const isAccessory = product.category === "mobile-accessories"
            const titleLower = product.title.toLowerCase();
            const matchesKeyword = category.keywords.some((keyword)=>
            titleLower.includes(keyword))

            return isAccessory &&  matchesKeyword
        })
    }

    return products
}