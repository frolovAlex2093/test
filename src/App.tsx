import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import { First, Second, Third, Fourth } from './pages';

export const App: React.FC = () => {
  const [id, setId] = React.useState<number>(0);

  const onClickSecond = (id: number) => {
    setId(id);
  };

  return (
    <Routes>
      <Route element={<First onClickSecond={onClickSecond} />} path='/' />
      <Route element={<Second onClickSecond={onClickSecond} />} path='/second' />
      <Route element={<Third id={id} />} path='/third' />
      <Route element={<Fourth />} path='/fourth' />
    </Routes>
  );
};

export default App;
