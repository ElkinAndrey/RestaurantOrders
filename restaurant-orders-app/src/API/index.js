import axios from "axios";

const URL = "https://localhost:44302";

export default class Service {
  static async getHelloWorld() {
    const response = await axios.get(
      `${URL}`
    );
    return response;
  }
}
