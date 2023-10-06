import { connection } from "../utils/connect.js";

class Producto {
  constructor() {}
  async connect() {
    try {
      const result = await connection("producto");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getProductos() {
    try {
      const connection = await this.connect();
      const resultado = await connection.find({}).toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }

  async postProducto(
    nombre,
    imagen,
    valoracion,
    descripcion,
    precio,
    descuento
  ) {
    try {
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        nombre: nombre,
        imagen: imagen,
        valoracion: valoracion,
        descripcion: descripcion,
        precio: precio,
        descuento: descuento,
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
export { Producto };
