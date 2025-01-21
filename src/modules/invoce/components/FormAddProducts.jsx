import { Divider, TextField } from "@mui/material";
import dayjs from "dayjs"; // Importa dayjs

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TableProducts } from "./TableProducts";

import "animate.css";
import { CardProductos } from "./CardProductos";
export const FormAddProducts = ({ products, addProducts, onDeleteProduct }) => {
  const [date, setDate] = React.useState(dayjs());

  //const [products, setProducts] = useState([]); // Estado para manejar los productos

  
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newProduct = {
      key: products.length + 1,
      name: data.nameProduct, // Ajusta según lo que captures en el form
      price: data.price, // Ajusta para "precio"
      fat: data.quantity, // Ajusta para "cantidad"
      carbs: 0, // Puedes ajustar o eliminar este campo si no es necesario
      protein: 0,
    };
    addProducts(newProduct); // Agrega el nuevo producto al estado
    console.log(products);
    reset();
    //onFormValidationChange(true);
  };

  useEffect(() => {
    console.log("Productos actualizados", products);
    // Podrías actualizar la tabla o realizar otras acciones
  }, [products]);

  // Función para eliminar un producto

  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <div className="flex-col justify-center mt-6 md:mt-8 max-w-3xl mx-auto border  pb-2 rounded-xl">
          <div className="px-4 py-2">
            <h4 className="text-base md:text-xl">Agregar Productos</h4>
          </div>
          <Divider />
          <div className="px-4 mt-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <TextField
                  label="Nombre"
                  {...register("nameProduct", {
                    required: "El producto es obligatorio",
                  })}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      height: "0.5em",
                    },
                  }}
                  className="margin-top-desktop"
                  error={!!errors.nameProduct}
                  helperText={errors.nameProduct?.message}
                />
                <TextField
                  id="outlined-basic"
                  label="Precio"
                  variant="outlined"
                  {...register("price", {
                    required: "El precio es obligatorio",
                  })}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      height: "0.5em",
                    },
                  }}
                  className="margin-top-desktop"
                  error={!!errors.price}
                  helperText={errors.price?.message}
                />
                <TextField
                  id="outlined-basic"
                  label="Cantidad"
                  variant="outlined"
                  {...register("quantity", {
                    required: "La cantidad es obligatorio",
                  })}
                  className="margin-top-desktop"
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-input": {
                      height: "0.5em",
                    },
                  }}
                  error={!!errors.quantity}
                  helperText={errors.quantity?.message}
                />
                <div className="flex justify-center lg:py-4">
                  <button className="border border-primary w-28 text-primary font-bold py-1 px-4 rounded">
                    Agregar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-4">
          <h3
            className="text-start text-xl md:text-xl"
            style={{ marginLeft: "0.5em" }}
          >
            Productos
          </h3>
          <div className="block lg:hidden">
            <CardProductos></CardProductos>
          </div>
                          
          {products.length === 0 ? (
            <div className="flex justify-center">
              <p>No hay productos cargados aún.</p>
            </div>
          ) : (
            <div className="hidden lg:block mt-4">
            <TableProducts
              products={products}
              onDeleteProduct={onDeleteProduct}
            ></TableProducts>
          </div>
          )}
        </div>
      </div>
    </>
  );
};
