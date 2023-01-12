import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { First, Second, Third, Fourth } from './pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<First />} path='/' />
      <Route element={<Second />} path='/second' />
      <Route element={<Third />} path='/third' />
      <Route element={<Fourth />} path='/fourth' />
    </Routes>
  );
};

export default App;
