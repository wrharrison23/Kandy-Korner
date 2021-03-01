import React, { useContext, useEffect } from "react"
import { Product } from "./Product"
import { ProductContext } from "./ProductProvider"
import "./Product.css"
import { ProductTypeContext } from "../ProductTypes/ProductTypeProvider"

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)
  
  useEffect(() => {
    getProductTypes()
    .then(getProducts)
  }, [])

  return (
    <div className="product-list">
      {products.map((product) => {
        const productType = productTypes.find((p) => p.id === product.productTypeId)
        
        return <Product 
        key={product.id} 
        product={product}
        type={productType} />
      })}
    </div>
  )
}

