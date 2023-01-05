import axios from "axios";

const URL = "https://localhost:44302/api";

export default class Service {
  static async getProducts() {
    const response = await axios.get(`${URL}/products/`);
    return response;
  }

  static async getNumber() {
    const response = await axios.get(`${URL}/nextnumber/`);
    return response;
  }

  static async addOrder(newOrder) {
    await axios.post(`${URL}/order/`, newOrder);
  }

  static async getOrders() {
    const response = await axios.get(`${URL}/orders/`);
    return response;
  }

  static async delOrder(id) {
    await axios.delete(`${URL}/order/${id}/`);
  }
}