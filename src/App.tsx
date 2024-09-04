import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { First, Second, Third, Fourth, Authorization, Sixth, Fifth, Seventh, Eighth, Ninth, Tenth, Eleventh } from './pages';


export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<First />} path='/'  />
      <Route element={<Second />} path='/second' />
      <Route element={<Third />} path='/NoOwner_03' />
      <Route element={<Fourth />} path='/Owner_03' />
      <Route element={<Fifth />} path='/fifth' />
      <Route element={<Sixth />} path='/sixth' />
      <Route element={<Seventh />} path='/NoOwner_01' />
      <Route element={<Eighth />} path='/Owner_01' />
      <Route element={<Ninth />} path='/ninth' />
      <Route element={<Tenth />} path='/NoOwner_02' />
      <Route element={<Eleventh />} path='/Owner_02' />

      <Route element={<Authorization />} path='/authorization' />
    </Routes>
  );
};

export default App;
