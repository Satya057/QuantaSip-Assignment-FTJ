import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import your global CSS file

const Dashboard = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'x-auth-token': token
        }
      };
      try {
        const res = await axios.get('http://localhost:5000/api/auth/dashboard', config);
        setMessage(res.data);
      } catch (err) {
        setMessage('Failed to fetch dashboard data');
      }
    };
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>{message}</p>
    </div>
  );
};

export default Dashboard;
