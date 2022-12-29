using Microsoft.AspNetCore.Mvc;

namespace RestaurantOrdersAPI.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        [Route("/")]
        public string[] Get() 
        {
            Thread.Sleep(1000); // Таймер, имитация работы сервера
            return new string[] { "Hello world", "Hello world 2" };
        }
    }
}