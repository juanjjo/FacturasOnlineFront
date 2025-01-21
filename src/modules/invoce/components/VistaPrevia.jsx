import React, { useState } from 'react'
import { TableProductsGenerate } from './TableProductsGenerate'
import { useEffect } from 'react'

export const VistaPrevia = ({products,dataForm}) => {
  useEffect(()=>{
    console.log(dataForm);
    console.log(products);
  },[])

  return (
    <div className=" p-6 flex-1 flex flex-col  border rounded-xl ">
      <h3 className='text-center'>Vista Previa de la factura</h3>
      <div className='flex flex-col justify-start'>
        <h1 className='text-lg'>Detalle de la factura</h1>
        <div className=' p-4 rounded-lg mt-6 bg-[#f3f4f6]' >
          <ul>
            <li>
              <span className='font-bold'>folio:</span> {dataForm.folio}
            </li>
            <li>
              <span className='font-bold'>Cliente:</span> {dataForm.cliente}
            </li>
            <li>
              <span className='font-bold'>Email:</span>  {dataForm.email}
            </li>
            <li>
              <span className='font-bold'>Observacion:</span>  {dataForm.observacion}
            </li>
          </ul>
        </div>

        <h1 className="headline my-6 text-lg">Productos</h1>

                  <TableProductsGenerate products={products}
                    ></TableProductsGenerate>
                  <div className='flex justify-end'>
                    <p className='p-4 text-lg'>Total: {products.reduce((total, product) => total + (product.price * product.fat), 0)}</p>
                  </div>
      </div>

    </div>
  )
}
