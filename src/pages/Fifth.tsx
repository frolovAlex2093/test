import React from 'react';
import { Box } from '@mui/material';
import { LinkList } from '../components';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { linkList } from '../interfaces/interfaces';
import { redirect } from 'react-router-dom';

const firstLinkList: linkList[] = [
  // {
  //   page: '/second',
  //   text: 'Изготовление транспортного средства (шасси, машины)',
  //   id: 0
  // },
  // {
  //   page: '/second',
  //   text: 'Ввоз транспортного средства (шасси, машины) на таможенную территорию Союза из государства, не являющегося членом Союза',
  //   id: 1
  // },
  // {
  //   page: '/second',
  //   text: 'Шаблон электронного паспорта самоходной машины. Полная форма без проверки полей',
  //   id: 0
  // },
  {
    page: '/second',
    text: 'Оформление электронного паспорта на самоходную машину, зарегистрированную органом регистрации (Основание 3)',
    id: 2
  }
];
const auth = true;

export const Fifth: React.FC = () => {
  return (
    <ErrorBoundary>
      <Box display='flex' marginTop={5} height='100%' justifyContent='center' alignItems='center'>
        <Box
          display='flex'
          flexDirection='column'
          maxWidth='700px'
          width='100%'
          padding='0 15px 0 15px'
        >
          <LinkList linkList={firstLinkList}></LinkList>
        </Box>
      </Box>
    </ErrorBoundary>
  );
};
