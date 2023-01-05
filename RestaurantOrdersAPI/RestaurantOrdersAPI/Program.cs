using RestaurantOrdersAPI.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<RestaurantDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddTransient<IRestaurantRepository, EFRestaurantRepository>();
/*builder.Services.AddEndpointsApiExplorer();*/


var app = builder.Build();

app.UseCors(options =>
    options.WithOrigins("http://localhost:3000") // Кому можно получать данные с сервера
    .AllowAnyMethod()
    .AllowAnyHeader());

// Настройте конвейер HTTP-запросов
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    app.UseSwagger();
    app.UseSwaggerUI();
}


app.UseRouting();

app.UseAuthorization();
/*app.UseHttpsRedirection();*/

app.MapControllers();



app.Run();
