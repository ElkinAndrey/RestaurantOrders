using System.ComponentModel.DataAnnotations;

namespace RestaurantOrdersAPI.Data
{
    /// <summary>
    /// Товар
    /// </summary>
    public class Product
    {
        /// <summary>
        /// Id, однозначный ключ
        /// </summary>
        [Key]
        public int? ProductId { get; set; }

        /// <summary>
        /// Название товара
        /// </summary>
        public string? ProductName { get; set; }

        /// <summary>
        /// Цена товара
        /// </summary>
        public decimal ProductPrice { get; set; }

    }
}
