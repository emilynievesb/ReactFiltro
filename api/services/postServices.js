import { Categoria } from "../collections/categoria.js";
import { Producto } from "../collections/producto.js";

const postProducto = async (
  nombre,
  imagen,
  valoracion,
  descripcion,
  precio,
  descuento
) => {
  const producto = new Producto();
  const result = await producto.postProducto(
    nombre,
    imagen,
    valoracion,
    descripcion,
    precio,
    descuento
  );
  return result;
};

const postCategoria = async (nombre) => {
  const categoria = new Categoria();
  const result = await categoria.postCategoria(nombre);
  return result;
};
export { postProducto, postCategoria };
