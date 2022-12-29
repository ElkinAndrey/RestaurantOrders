using Microsoft.AspNetCore.Mvc;
using RestaurantOrdersAPI.Models;

namespace RestaurantOrdersAPI.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        private IRestaurantRepository restaurantRepository;

        public HomeController(IRestaurantRepository restaurantRepository)
        {
            this.restaurantRepository = restaurantRepository;
        }

        [HttpGet]
        [Route("/")]
        public string[] Get() 
        {
            Thread.Sleep(1000); // Таймер, имитация работы сервера
            return new string[] { "Hello world", "Hello world 2" };
        }
    }
}