import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { First, Second, Third, Fourth, Authorization, Sixth, Fifth, Seventh, Eighth, Ninth, Tenth, Eleventh } from './pages';


export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<First />} path='/'  />
      <Route element={<Second />} path='/second' />
      <Route element={<Third />} path='/third' />
      <Route element={<Fourth />} path='/fourth' />
      <Route element={<Fifth />} path='/fifth' />
      <Route element={<Sixth />} path='/sixth' />
      <Route element={<Seventh />} path='/seventh' />
      <Route element={<Eighth />} path='/eighth' />
      <Route element={<Ninth />} path='/ninth' />
      <Route element={<Tenth />} path='/tenth' />
      <Route element={<Eleventh />} path='/eleventh' />

      <Route element={<Authorization />} path='/authorization' />
    </Routes>
  );
};

export default App;
