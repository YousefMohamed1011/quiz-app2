import axios from 'axios';
import { useState, useEffect } from 'react';

export const Axios = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/users");
        console.log(res);
        
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getUsers();
  }, []);

  return (
    <div>
      <h1>Axios</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
