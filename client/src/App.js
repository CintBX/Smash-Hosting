import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNav from './components/layout/AppNav';
import AppProfile from './components/layout/AppProfile';

function App() {
  return (
    <div className="App">
      <AppNav/>
      <AppProfile/>
    </div>
  );
}

export default App;