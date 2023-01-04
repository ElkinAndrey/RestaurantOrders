import axios from "axios";

const URL = "https://localhost:44302/api";

export default class Service {
  static async getProducts() {
    const response = await axios.get(`${URL}/products/`);
    return response;
  }
}
