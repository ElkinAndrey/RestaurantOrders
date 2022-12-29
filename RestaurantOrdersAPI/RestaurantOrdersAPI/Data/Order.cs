using System.ComponentModel.DataAnnotations;

namespace RestaurantOrdersAPI.Data
{
    /// <summary>
    /// Заказ
    /// </summary>
    public class Order
    {
        /// <summary>
        /// Номер заказа, однозначный ключ
        /// </summary>
        [Key]
        public int OrderNumber { get; set; }

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
