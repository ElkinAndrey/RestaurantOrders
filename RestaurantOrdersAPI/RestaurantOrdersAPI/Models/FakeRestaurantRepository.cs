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
        }

        public void ChangeOrder(Order order)
        {
            throw new NotImplementedException();
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
