using System.ComponentModel.DataAnnotations;

namespace RestaurantOrdersAPI.Data
{
    /// <summary>
    /// Детали о товаре, нужен, чтобы можно было указать количество товара
    /// </summary>
    public class ProductDetails
    {
        /// <summary>
        /// Id, однозначный ключ
        /// </summary>
        [Key]
        public int? ProductDetailsId { get; set; }

        /// <summary>
        /// Товар
        /// </summary>
        public Product Product { get; set; }

        /// <summary>
        /// Количество товара, добавленного в заказ
        /// </summary>
        public int Quantity { get; set; }
    }
}
