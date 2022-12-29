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
        public void RemoveOrder(int orderNumber);
        
        /// <summary>
        /// Изменить заказ
        /// </summary>
        /// <param name="order">Изменяемый заказ</param>
        public void ChangeOrder(Order order);

        /// <summary>
        /// Получить заказ
        /// </summary>
        public Order GetOrder(int orderNumber);

    }
}
