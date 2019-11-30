import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import NavigationBar from './components/layout/NavigationBar';
import ProfileSidebar from './components/layout/ProfileSidebar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <ProfileSidebar />
    </div>
  );
}

export default App;