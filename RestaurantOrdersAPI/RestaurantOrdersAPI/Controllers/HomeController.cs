using Microsoft.AspNetCore.Mvc;

namespace RestaurantOrdersAPI.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        [HttpGet]
        [Route("/")]
        public string[] Get() => new string[] { "Hello world" };

    }
}