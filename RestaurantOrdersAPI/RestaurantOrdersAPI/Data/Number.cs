using System.ComponentModel.DataAnnotations;

namespace RestaurantOrdersAPI.Data
{
    /// <summary>
    /// Число
    /// </summary>
    public class Number
    {
        /// <summary>
        /// Однозначный ключ
        /// </summary>
        [Key]
        public int? NextNumberId { get; set; }

        /// <summary>
        /// Число
        /// </summary>
        public string? NextNumber { get; set; }
    }
}
