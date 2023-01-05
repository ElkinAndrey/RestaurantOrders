using RestaurantOrdersAPI.Data;
using System.Security.Principal;

namespace RestaurantOrdersAPI.Models
{
    /// <summary>
    /// Интерфейс для доступа к базе данных ресторана
    /// </summary>
    public interface IRestaurantRepository
    {
        /// <summary>
        /// Получить уникальный номер
        /// </summary>
        public string NextNumber { get; }

        /// <summary>
        /// Получить список заказов
        /// </summary>
        public List<Order> Orders { get; }

        /// <summary>
        /// Получить список товаров
        /// </summary>
        public List<Product> Products { get; }

        /// <summary>
        /// Добавить заказ
        /// </summary>
        /// <param name="order">Заказ</param>
        public void AddOrder(Order order);

        /// <summary>
        /// Удалить заказ
        /// </summary>
        /// <param name="orderNumber">Номер удаляемого заказа</param>
        public void RemoveOrder(int orderId);

    }
}
