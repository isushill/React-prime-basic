import React from 'react';
import UserList from './components/UserList';
import MenuBar from './components/Navbar';
import Form from './components/Form';
import Counter from './components/Counter';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/UserList" element={<UserList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
