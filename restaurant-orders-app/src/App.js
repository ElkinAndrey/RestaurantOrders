import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Service from "./API";
import { useFetching } from "./hooks/useFetching";

function App() {
  const [helloWorld, setHelloWorld] = useState([]); // Массив с информацией

  const [fetchHelloWorld, isHelloWorldLoading, helloWorldError] = useFetching(
    async () => {
      const response = await Service.getHelloWorld();
      setHelloWorld(response.data);
    }
  );

  useEffect(() => {
    fetchHelloWorld();
  }, []);

  return (
    <div>      
      {helloWorldError && <div>Произошла ошибка ${helloWorldError}</div>} {/*При Возникновении ошибки (например, если не найдет url сервера)*/}
      {isHelloWorldLoading ? (
        <div>Загрузка...</div> // Пока данные получаются с сервера
      ) : (
        <div>
          {/* Данные */}
          {helloWorld.map((helloWorld) => (
            <div key={helloWorld}>{helloWorld}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
