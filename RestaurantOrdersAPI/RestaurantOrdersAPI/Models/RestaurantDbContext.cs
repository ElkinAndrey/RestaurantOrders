using Microsoft.EntityFrameworkCore;
using RestaurantOrdersAPI.Data;

namespace RestaurantOrdersAPI.Models
{
    public class RestaurantDbContext : DbContext
    {
        public DbSet<Number> NextNumber { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<ProductDetails> ProductsDetails { get; set; }
        public DbSet<Product> Products { get; set; }
        public RestaurantDbContext(DbContextOptions<RestaurantDbContext> options) : base(options) { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Order>()
                .HasMany(o => o.Products);
            modelBuilder.Entity<ProductDetails>()
                .HasOne(p => p.Product);
        }
    }
}
