import React from "react"

export const Product = ({ product, type }) => (
  <section className="product">
    <h3 className="product__name">{product.name}</h3>
    <p className="product__price"><strong>Price: </strong>{product.price}</p>
    <p className="product__type">Type: {type.name}</p>
  </section>
)