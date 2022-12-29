var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ��������� �������� HTTP-��������
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapControllers();

app.UseCors(options =>
    options.WithOrigins("http://localhost:3000") // ���� ����� �������� ������ � �������
    .AllowAnyMethod()
    .AllowAnyHeader());

app.Run();
