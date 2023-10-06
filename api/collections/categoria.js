import { connection } from "../utils/connect.js";

class Categoria {
  constructor() {}
  async connect() {
    try {
      const result = await connection("categorias");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async getCategorias() {
    try {
      const connection = await this.connect();
      const resultado = await connection.find({}).toArray();
      return resultado;
    } catch (error) {
      throw error;
    }
  }

  async postCategoria(nombre) {
    try {
      const connection = await this.connect();
      const resultado = await connection.insertOne({
        nombre: nombre,
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}
export { Categoria };
