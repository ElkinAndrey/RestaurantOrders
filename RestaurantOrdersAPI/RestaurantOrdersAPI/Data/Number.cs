using System.ComponentModel.DataAnnotations;

namespace RestaurantOrdersAPI.Data
{
    /// <summary>
    /// Число
    /// </summary>
    public class Number
    {
        /// <summary>
        /// Число
        /// </summary>
        [Key]
        public string? NextNumber { get; set; }
    }
}
