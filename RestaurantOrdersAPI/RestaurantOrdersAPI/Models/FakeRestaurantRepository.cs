using RestaurantOrdersAPI.Data;

namespace RestaurantOrdersAPI.Models
{
    public class FakeRestaurantRepository : IRestaurantRepository
    {
        public List<Order> Orders => throw new NotImplementedException();

        public List<Product> Product => throw new NotImplementedException();

        public void AddOrder(Order order)
        {
            throw new NotImplementedException();
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
