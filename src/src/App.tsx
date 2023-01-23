import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { First, Second, Third, Fourth } from './pages';
import { Fifth } from './pages/Fifth';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<First />} path='/' />
      <Route element={<Second />} path='/second' />
      <Route element={<Third />} path='/third' />
      <Route element={<Fourth />} path='/fourth' />
      <Route element={<Fifth />} path='/fifth' />

    </Routes>
  );
};

export default App;
