
// steper
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from '@fortawesome/free-solid-svg-icons';
import { FormDetalle } from "../components/FormDetalle";
import { FormAddProducts } from "../components/FormAddProducts";
import { VistaPrevia } from "../components/VistaPrevia";



export const GenerateInvoicePage = () => {

  const [stateForm, setStateForm] = useState({ state: 1, next: false, dataForm: {} });
  const [invoiceState, setInvoice] = useState({ state: 1 });

  const [products, setProducts] = useState([]); // Estado para manejar los productos

  const handleNextClick = () => {// paso 1 envia señal al formulario validar el siguiente
    console.log(stateForm);
    if (stateForm.state == 1 && stateForm.next == false) {
      setStateForm(prevState => ({
        ...prevState, // Mantenemos las propiedades previas
        next: true    // parametro para avisar al formulario hijo que queremos avanzar
      }));
    } else {
      if (stateForm.state == 2 && products.length > 0 && stateForm.next == false) {
        setStateForm(prevState => ({
          ...prevState, // Mantenemos las propiedades previas
          state: 3,
          next: true    // parametro para avisar al formulario hijo que queremos avanzar
        }));
      }
    }
  };

  const handleBackClick = () => {
    setStateForm(prevState => ({
      ...prevState,
      state: stateForm.state - 1,
      next: false,
    }))
  }


  const handleFormValidationChange = (newState) => {// paso 2 metodo validado ahora recien seteamos la data
    console.log(newState);
    if (newState.next === true && newState.stateForm == '2') {
      setStateForm(prevState => ({
        state: 2,
        next: false,    // Actualizamos solo lo que necesitamos
        dataForm: newState.dataForm
      }));
      console.log(stateForm);
    } else {
      if (newState.next === false && newState.stateForm == '1') {
        setStateForm(prevState => ({
          state: 1,
          next: false,    // Actualizamos solo lo que necesitamos
          dataForm: newState.dataForm
        }));
        console.log(stateForm);
      }
    }
  };

  const addProducts = (newProduct) => {
    setProducts([...products, newProduct]); // Agrega el nuevo producto al estado
  }


  useEffect(() => {// este con el [] es como ngOnit
  }, []);

  const onDeleteProduct = (productToDelete) => {
    const updatedProducts = products.filter(product => product.key !== productToDelete.key);
    setProducts(updatedProducts); // Actualiza la lista de productos sin el producto eliminado
  };

  return (
    <>
      <div className="flex-col  justify-center  max-w-3xl md:w-full lg:mt-2">
        <div className="flex items-center justify-center">
          <span className="w-12 h-12 rounded-full text-primary ltr:mr-4 rtl:ml-4 flex items-center justify-center bg-primary/10">
            <FontAwesomeIcon className="text-primary" style={{ fontSize: '1.2em' }} icon={faReceipt} aria-hidden="true" />
          </span>
          <h3 className="text-center text-2xl md:text-3xl" style={{ marginLeft: '0.5em' }}>Generador de facturas</h3>

        </div>

        <ol className="flex items-center mt-4 mb-4 sm:mb-5 w-3/4 md:mt-8">
          <li className="flex w-full items-center text-primary  after:content-[''] after:w-full after:h-1 after:border-b after:border-b after:border-4 after:inline-block after:border-primary">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full   shrink-0">
              <span className="text-white">1</span>
            </div>
          </li>
          <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-300">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full   shrink-0">
              2
            </div>
          </li>
          <li className="flex items-center w-full">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full   shrink-0">
              3
            </div>
          </li>
        </ol>
        <div>
          {stateForm.state === 1 ? (
            <FormDetalle stateForm={stateForm} onFormValidationChange={handleFormValidationChange} />
          ) : stateForm.state === 2 ? (
            <FormAddProducts products={products} addProducts={addProducts} onDeleteProduct={onDeleteProduct} />
          ) : stateForm.state === 3 ? (
            <VistaPrevia products={products} dataForm={stateForm.dataForm}/>
          ) : null}
        </div>
        <p className="flex justify-between mt-2 md:mt-4">
          <button className=" py-2 px-2  text-primary/60"
          >
            <span className="text-xl"
              onClick={handleBackClick}>Anterior</span>
          </button>
          <button className=" py-2 px-2 text-primary"
            onClick={handleNextClick}>
            <span className="text-xl">{stateForm.state == 3 ? 'Guardar' : 'Siguiente'}</span>
          </button>
        </p>
      </div>
    </>
  )
}
