using RestaurantOrdersAPI.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<IRestaurantRepository, FakeRestaurantRepository>();

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
