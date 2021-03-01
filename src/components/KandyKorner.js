import React from "react"
import { NavBar } from "./Nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"
import { LocationProvider } from "./Locations/LocationProvider"
import {LocationList} from "./Locations/LocationList"
import { ProductProvider } from "./Products/ProductProvider"
import { ProductList } from "./Products/ProductList"
import { ProductTypeProvider } from "./ProductTypes/ProductTypeProvider"
export const KandyKorner = () => (
  <>
    <NavBar />
    <ApplicationViews />

    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>

    <h2>Products</h2>
    <ProductTypeProvider>
      <ProductProvider>
        <ProductList />
      </ProductProvider>
    </ProductTypeProvider>
  </>
);
