import React from 'react';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { useEffect, useState } from 'react';

function App() {
  let navigate = useNavigate();
  let [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) navigate('/name');
  }, []);

  return (
    <div className="App">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
