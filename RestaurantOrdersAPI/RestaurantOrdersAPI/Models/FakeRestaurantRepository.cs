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

            FakeDataBase.Orders.Add(order);
            FakeDataBase.ProductsDetails.AddRange(order.Products);
        }

        public void ChangeOrder(Order order)
        {
            Order? oldOrder = FakeDataBase.Orders.FirstOrDefault(o => o.OrderId == order.OrderId);

            if (oldOrder == null)
                throw new Exception("Заказ не найден");

            oldOrder.PaymentMethod = order.PaymentMethod;
            oldOrder.TotalPrice = order.TotalPrice;

            foreach (var item in oldOrder.Products) // Удаление старых товаров
                FakeDataBase.ProductsDetails.RemoveAll(p => p.ProductDetailsId == item.ProductDetailsId);
            FakeDataBase.ProductsDetails.AddRange(order.Products); // Добавление новых товаров
            oldOrder.Products = order.Products;
        }

        public Order GetOrder(int orderNumber)
        {
            Order? order = FakeDataBase.Orders.FirstOrDefault(o => o.OrderId == orderNumber);

            if (order == null)
                throw new Exception("Заказ не найден");

            return order;
        }

        public void RemoveOrder(int orderNumber)
        {
            Order? oldOrder = FakeDataBase.Orders.FirstOrDefault(o => o.OrderId == orderNumber);

            if (oldOrder == null)
                throw new Exception("Заказ не найден");

            foreach (var item in oldOrder.Products) // Удаление товаров внутри заказа
                FakeDataBase.ProductsDetails.RemoveAll(p => p.ProductDetailsId == item.ProductDetailsId);
            FakeDataBase.Orders.RemoveAll(o => o.OrderId == orderNumber); // Удаление заказа
        }

        ~FakeRestaurantRepository()
        {
            FakeDataBase.NextNumber[0] = this.NextNumber;
        }
    }
}
