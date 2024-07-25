import React, { useState, useEffect } from 'react'
import { useAuth} from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../helpers/axios_helper';


const Dashboard = () => {

  const navigate = useNavigate();
  const auth = useAuth();

  console.log(getAuthToken());

  useEffect(() => {
    if (!auth?.user) {
      return navigate("*");
    }
  }, [auth, navigate]);

  return (
    <div>
      Dashboard 
    </div>
  )
}

export default Dashboard
