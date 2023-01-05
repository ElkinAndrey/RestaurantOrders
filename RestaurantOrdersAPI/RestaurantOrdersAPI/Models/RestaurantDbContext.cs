using Microsoft.EntityFrameworkCore;
using RestaurantOrdersAPI.Data;

namespace RestaurantOrdersAPI.Models
{
    public class RestaurantDbContext : DbContext
    {
        /// <summary>
        /// Номер заказа
        /// </summary>
        public DbSet<Number> NextNumber { get; set; }

        /// <summary>
        /// Заказы
        /// </summary>
        public DbSet<Order> Orders { get; set; }

        /// <summary>
        /// Товары с количеством товара
        /// </summary>
        public DbSet<ProductDetails> ProductsDetails { get; set; }

        /// <summary>
        /// Товары
        /// </summary>
        public DbSet<Product> Products { get; set; }

        /// <summary>
        /// Конструктор
        /// </summary>
        /// <param name="options">Настройки</param>
        public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options) : base(options) { }
        
        /// <summary>
        /// Конфигурации
        /// </summary>
        /// <param name="modelBuilder"></param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>() // Указание того, что в заказе есть список товаров
                .HasMany(o => o.Products);
            modelBuilder.Entity<ProductDetails>() // Указание того, что в деталях о товаре есть товар
                .HasOne(p => p.Product);
        }
    }
}
