// src/App.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './Api';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error in fetchDataAsync:', error);
      }
    };

    fetchDataAsync();
  }, []);

  return (
    <div className="App">
      <h1>React App with Flask Backend</h1>
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default App;
