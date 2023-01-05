using RestaurantOrdersAPI.Data;

namespace RestaurantOrdersAPI.Models
{
    public class FakeRestaurantRepository : IRestaurantRepository
    {
        private GetNumber getNumber;

        public FakeRestaurantRepository()
        {
            this.getNumber = GetNumber.getInstance(FakeDataBase.NextNumber[0]);
        }

        public string NextNumber
        {
            get
            {
                return getNumber.NextNumber;
            }
        }

        public List<Order> Orders
        {
            get
            {
                return FakeDataBase.Orders;
            }
        }

        public List<Product> Products
        {
            get
            {
                return FakeDataBase.Products;
            }
        }

        public void AddOrder(Order order)
        {
            order.OrderId = int.Parse(order.Number);
            FakeDataBase.Orders.Add(order);
            FakeDataBase.ProductsDetails.AddRange(order.Products);
        }

        public void RemoveOrder(int orderId)
        {
            Order? oldOrder = FakeDataBase.Orders.FirstOrDefault(o => o.OrderId == orderId);

            if (oldOrder == null)
                throw new Exception("Заказ не найден");

            foreach (var item in oldOrder.Products) // Удаление товаров внутри заказа
                FakeDataBase.ProductsDetails.RemoveAll(p => p.ProductDetailsId == item.ProductDetailsId);
            FakeDataBase.Orders.RemoveAll(o => o.OrderId == orderId); // Удаление заказа
        }

        ~FakeRestaurantRepository()
        {
            FakeDataBase.NextNumber[0] = this.NextNumber;
        }
    }
}
