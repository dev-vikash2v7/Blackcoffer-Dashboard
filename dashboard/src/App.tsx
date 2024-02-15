import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Dashboard from './components/Dashboard';
import Header from './components/Header';

function App() {

  const [dashboardData, setDashboardData] = useState([]);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://blackcoffer-dashboard-backend.vercel.app/get-data');
      setDashboardData(response.data.result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
    <Header/>
      <Dashboard data={dashboardData}/>
    </>
  )
}

export default App
