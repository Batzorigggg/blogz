import React, { useState, useEffect } from 'react';

function Data() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/getData');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Data from MySQL</h1>
      <ul>
        {data.map(row => (
          <li key={row.categoryId}>
            <p>Category ID: {row.categoryId}</p>
            <p>Title: {row.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Data;
