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

        public List<Order> Orders => throw new NotImplementedException();

        public List<Product> Products => throw new NotImplementedException();

        public void AddOrder(Order order)
        {
            throw new NotImplementedException();
        }

        public void RemoveOrder(int orderId)
        {
            throw new NotImplementedException();
        }
    }
}
