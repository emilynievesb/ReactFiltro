import { postProducto } from "../services/postServices.js";

const postProductoController = async (req, res, next) => {
  try {
    const { nombre, imagen, valoracion, descripcion, precio, descuento } =
      req.body;
    const result = await postProducto(
      nombre,
      imagen,
      valoracion,
      descripcion,
      precio,
      descuento
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
const postCategoriaController = async (req, res, next) => {
  try {
    const { nombre } = req.body;
    const result = await postProducto(nombre);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { postProductoController, postCategoriaController };
