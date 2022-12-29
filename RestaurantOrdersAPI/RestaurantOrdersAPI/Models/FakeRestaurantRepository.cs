using RestaurantOrdersAPI.Data;

namespace RestaurantOrdersAPI.Models
{
    public class FakeRestaurantRepository : IRestaurantRepository
    {
        public List<Order> Orders
        {
            get
            {
                return FakeDataBase.Orders;
            }
        }

        public List<Product> Product
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
            Order? oldOrder = FakeDataBase.Orders.FirstOrDefault(o => o.OrderNumber == order.OrderNumber);

            if (oldOrder == null)
                throw new Exception("Заказ не найден");

            oldOrder.PaymentMethod = order.PaymentMethod;
            oldOrder.TotalPrice = order.TotalPrice;

            foreach (var item in oldOrder.Products) // Удаление старых товаров
                FakeDataBase.ProductsDetails.RemoveAll(p => p.ProductDetailsId == item.ProductDetailsId);
            FakeDataBase.ProductsDetails.AddRange(order.Products); // Добавление новых товаров
            oldOrder.Products = order.Products;
        }

        public Order GetOrder()
        {
            throw new NotImplementedException();
        }

        public void RemoveOrder(int orderNumber)
        {
            throw new NotImplementedException();
        }
    }
}
