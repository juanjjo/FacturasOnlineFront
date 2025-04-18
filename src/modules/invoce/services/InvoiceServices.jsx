// services/invoiceService.js
import { data } from "autoprefixer";
import axios from "axios";

//const API_URL = "http://localhost:9000/factura"; // Reemplaza con tu endpoint
const API_URL = import.meta.env.VITE_API_URL;
/**
 * Guarda la factura en el backend.
 * @param {Object} invoiceData - Los datos de la factura a guardar.
 * @returns {Promise} - Promesa que se resuelve con la respuesta del servidor.
 */
export const saveInvoice = async (invoiceData) => {
    const invoiceDataMapped = makeInvoiceData(invoiceData);
  try {
    const response = await axios.post(API_URL, invoiceDataMapped, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Datos de la respuesta
  } catch (error) {
    console.error("Error al guardar la factura:", error);
    throw error; // Propaga el error para manejarlo en el componente
  }
};

const makeInvoiceData = (data) => {
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Los meses empiezan desde 0
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

    return {
      folio: 213323,
      descripcion: data.descripcion,
      observacion: data.observacion,
      fecha: formatDate(data.fecha), // Formato de fecha aquí
      cliente: {
        name: data.nombre,
        lastName: data.apellido,
        eMail: data.email,
      },
      detalle: data.products.map((product, index) => ({
        cantidad: parseInt(product.fat), // Definir cantidad según tu requerimiento
        producto: {
          nombre: product.name,
          precio: parseFloat(product.price), // Convertir precio a número
        },
      })),
    };
  };