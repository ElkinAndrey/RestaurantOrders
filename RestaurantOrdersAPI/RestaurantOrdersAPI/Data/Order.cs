using System.ComponentModel.DataAnnotations;

namespace RestaurantOrdersAPI.Data
{
    /// <summary>
    /// Заказ
    /// </summary>
    public class Order
    {
        /// <summary>
        /// Id, однозначный ключ
        /// </summary>
        [Key]
        public int OrderId { get; set; }

        /// <summary>
        /// Номер заказа
        /// </summary>
        public string Number { get; set; }

        /// <summary>
        /// Полная стоимость заказа
        /// </summary>
        public decimal TotalPrice { get; set; }

        /// <summary>
        /// Способ оплаты
        /// </summary>
        public string? PaymentMethod { get; set; }

        /// <summary>
        /// Список продуктов
        /// </summary>
        public List<ProductDetails> Products { get; set; }
    }
}
