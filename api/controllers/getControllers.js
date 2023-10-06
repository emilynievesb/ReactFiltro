import { getProductos } from "../services/getServices.js";

const getProductoController = async (req, res, next) => {
  try {
    const result = await getProductos();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export { getProductoController };
