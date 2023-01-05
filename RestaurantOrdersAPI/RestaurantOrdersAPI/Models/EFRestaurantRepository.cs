using Microsoft.EntityFrameworkCore;
using RestaurantOrdersAPI.Data;
using static System.Runtime.InteropServices.JavaScript.JSType;
using Number = RestaurantOrdersAPI.Data.Number;

namespace RestaurantOrdersAPI.Models
{
    public class EFRestaurantRepository : IRestaurantRepository
    {
        /// <summary>
        /// Контекст базы данных
        /// </summary>
        private RestaurantDbContext context;

        private GetNumber getNumber;

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="context">Контекст базы данных</param>
        public EFRestaurantRepository(RestaurantDbContext context)
        {
            this.context = context;
            this.getNumber = GetNumber.getInstance(context.NextNumber.Where(n => n.NextNumberId == 1).FirstOrDefault()?.NextNumber ?? "0");
            /*context.NextNumber.Add(new Number() { NextNumber = "1" });
            context.SaveChanges();*/
        }

        public string NextNumber
        {
            get
            {
                Number? num = context.NextNumber.Where(n => n.NextNumberId == 1).FirstOrDefault();
                if (num == null)
                    return "0";
                num.NextNumber = getNumber.NextNumber;
                context.SaveChanges();
                return num.NextNumber;
            }
        }

        public List<Order> Orders => context.Orders.Include(o => o.Products).ThenInclude(p => p.Product).ToList();

        public List<Product> Products => context.Products.ToList();

        public void AddOrder(Order order)
        {
            List<ProductDetails> products = new List<ProductDetails>();
            foreach (var product in order.Products)
            {
                products.Add(new ProductDetails()
                {
                    Quantity = product.Quantity,
                    Product = context.Products.Find(product.Product.ProductId) ?? new Product(),
                });
            }
            Order newOrder = new Order
            {
                Number = order.Number,
                PaymentMethod = order.PaymentMethod,
                Products = products,
            };
            context.Orders.Add(newOrder);
            context.SaveChanges();
        }

        public void RemoveOrder(int orderId)
        {
            Order order = context.Orders.Where(p => p.OrderId == orderId).Include(e => e.Products).ToList()[0];

            foreach(var product in order.Products)
            {
                context.Remove(product);
            }

            context.Remove(order);
            context.SaveChanges();
        }
    }
}
