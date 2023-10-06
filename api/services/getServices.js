import { Producto } from "../collections/producto.js";

const getProductos = async () => {
  const producto = new Producto();
  const result = await producto.getProductos();
  return result;
};
export { getProductos };
