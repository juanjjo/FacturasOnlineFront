import { TableProducts } from "../components/TableProducts";
import React, { useEffect, useState, useRef } from "react";

export const InvoicePage = () => {
  const [products, setProducts] = useState([]); // Estado para manejar los 
  
  const onDeleteProduct = (productToDelete) => {
    const updatedProducts = products.filter(product => product.key !== productToDelete.key);
    setProducts(updatedProducts); // Actualiza la lista de productos sin el producto eliminado
  };

    console.log('invoice')
  return (
    <>
                 <TableProducts
                   products={products}
                   onDeleteProduct={onDeleteProduct}
                 ></TableProducts>
    </>
  )
}
