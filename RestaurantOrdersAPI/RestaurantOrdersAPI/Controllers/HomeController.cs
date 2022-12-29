using Microsoft.AspNetCore.Mvc;
using RestaurantOrdersAPI.Data;
using RestaurantOrdersAPI.Models;

namespace RestaurantOrdersAPI.Controllers
{
    [ApiController]
    [Route("api")]
    public class HomeController : ControllerBase
    {
        /// <summary>
        /// Хранилище ресторана
        /// </summary>
        private IRestaurantRepository restaurantRepository;

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="restaurantRepository">Храниличе ресторана</param>
        public HomeController(IRestaurantRepository restaurantRepository)
        {
            this.restaurantRepository = restaurantRepository;
        }

        /// <summary>
        /// Получить список заказов
        /// </summary>
        /// <returns>JSON по адресу api/orders</returns>
        [HttpGet]
        [Route("orders")]
        public IEnumerable<Order> Orders() => restaurantRepository.Orders;

        /// <summary>
        /// Получить список товаров
        /// </summary>
        /// <returns>JSON по адресу api/products</returns>
        [HttpGet]
        [Route("products")]
        public IEnumerable<Product> Products() => restaurantRepository.Products;
    }
}