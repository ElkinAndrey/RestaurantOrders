using System.Numerics;

namespace RestaurantOrdersAPI.Models
{
    /// <summary>
    /// Класс для получения уникального номера
    /// </summary>
    public class GetNumber
    {
        /// <summary>
        /// Единственный объект
        /// </summary>
        private static GetNumber instance;

        /// <summary>
        /// Изменяющийся номер
        /// </summary>
        private BigInteger nextNumber;

        /// <summary>
        /// Получить следующий номер в виде строки
        /// </summary>
        public string NextNumber 
        { 
            get 
            {
                nextNumber++;
                return nextNumber.ToString();
            } 
        }

        /// <summary>
        /// Получить первый номер
        /// </summary>
        /// <param name="firstNumber"></param>
        private GetNumber(string firstNumber) 
        {
            this.nextNumber = BigInteger.Parse(firstNumber);
        }

        /// <summary>
        /// Создание объекта при помощи синглтон
        /// </summary>
        /// <param name="firstNumber"></param>
        /// <returns></returns>
        public static GetNumber getInstance(string firstNumber = "0")
        {
            if (instance == null)
                instance = new GetNumber(firstNumber);
            return instance;
        }
    }
}