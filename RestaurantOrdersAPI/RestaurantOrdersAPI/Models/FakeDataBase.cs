using RestaurantOrdersAPI.Data;

namespace RestaurantOrdersAPI.Models
{
    /// <summary>
    /// Фальшивая база данных
    /// </summary>
    static public class FakeDataBase
    {
        static public List<string> NextNumber = new List<string>() { "1234" };

        /// <summary>
        /// Таблица с продуктами
        /// </summary>
        static public List<Product> Products { get; set; } = new List<Product>
        { 
            new Product { ProductId = 1, ProductName = "Шаурма", ProductPrice = 220m },
            new Product { ProductId = 2, ProductName = "Курица гриль", ProductPrice = 151.33m },
            new Product { ProductId = 3, ProductName = "Шашлык из говядины", ProductPrice = 310m },
            new Product { ProductId = 4, ProductName = "Чак чак", ProductPrice = 1000000m },
        };

        /// <summary>
        /// Таблица с продуктами
        /// </summary>
        static public List<ProductDetails> ProductsDetails { get; set; } = new List<ProductDetails>
        {
            new ProductDetails { ProductDetailsId = 1, Product = Products[0], Quantity = 1 },
            new ProductDetails { ProductDetailsId = 2, Product = Products[1], Quantity = 2 },
            new ProductDetails { ProductDetailsId = 3, Product = Products[0], Quantity = 3 },
            new ProductDetails { ProductDetailsId = 4, Product = Products[2], Quantity = 2 },
            new ProductDetails { ProductDetailsId = 5, Product = Products[2], Quantity = 1 },
        };

        /// <summary>
        /// Таблица с заказами
        /// </summary>
        static public List<Order> Orders { get; set; } = new List<Order>
        {
            new Order 
            { 
                OrderId = 1, 
                Number = "1",
                PaymentMethod = "Наличные",
                TotalPrice = ProductsDetails[0].Product.ProductPrice + ProductsDetails[1].Product.ProductPrice,
                Products = new List<ProductDetails> { ProductsDetails[0], ProductsDetails[1] },      
            },
            new Order
            {
                OrderId = 2,
                Number = "2",
                PaymentMethod = "В рассрочку",
                TotalPrice = ProductsDetails[2].Product.ProductPrice + ProductsDetails[3].Product.ProductPrice,
                Products = new List<ProductDetails> { ProductsDetails[2], ProductsDetails[3] },
            },
            new Order
            {
                OrderId = 3,
                Number = "3",
                PaymentMethod = "В рассрочку",
                TotalPrice = ProductsDetails[4].Product.ProductPrice,
                Products = new List<ProductDetails> { ProductsDetails[4] },
            },
        };
    }
}
