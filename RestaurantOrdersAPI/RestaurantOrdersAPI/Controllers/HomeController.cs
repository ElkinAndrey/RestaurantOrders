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
        public IEnumerable<Order> Orders() => 
            restaurantRepository.Orders;

        /// <summary>
        /// Получить заказ по номеру
        /// </summary>
        /// <param name="number">Номер заказа</param>
        /// <returns>JSON по адресу api/orders/{номер заказа}</returns>
        [HttpGet]
        [Route("orders/{number}")]
        public Order Orders(string number) => 
            restaurantRepository.GetOrder(number);

        /// <summary>
        /// Получить список товаров
        /// </summary>
        /// <returns>JSON по адресу api/products</returns>
        [HttpGet]
        [Route("products")]
        public IEnumerable<Product> Products() => 
            restaurantRepository.Products;

        /// <summary>
        /// Добавить новый закак
        /// </summary>
        /// <param name="order">Новый заказ</param>
        /// <returns></returns>
        [HttpPost]
        [Route("order")]
        public Order Order([FromBody] Order order)
        {
            restaurantRepository.AddOrder(order);
            return order;
        }

        /// <summary>
        /// Получить уникальный номер
        /// </summary>
        /// <returns>Строка по адресу api/nextnumber</returns>
        [HttpGet]
        [Route("nextnumber")]
        public string NextNumber() =>
            restaurantRepository.NextNumber;

        /// <summary>
        /// Удалить заказ
        /// </summary>
        /// <param name="number">Номер удаляемого заказа</param>
        [HttpDelete("order/{number}")]
        public void RemoveOrder(string number) {
            try
            {
                restaurantRepository.RemoveOrder(number);
            }
            catch(Exception ex)
            {
                // Обработка ошибки, если нет элемента с нужным номером
            }
        }
    }
}