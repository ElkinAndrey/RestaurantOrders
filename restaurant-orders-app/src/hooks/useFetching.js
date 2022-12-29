import { useState } from "react";
 
export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false); // Равно true, если данные пока, что получаются
    const [error, setError] = useState(""); // Если возникнет ошибка
  
    // Получение данных
    const fetching = async (...args) => {
      try {
        setIsLoading(true);
        await callback(...args); // Начать получение данных
      } catch (e) {
        setError(e.message);
      } finally {
        setIsLoading(false);
      }
    };  
  
    return [fetching, isLoading, error];
  };