import React from 'react';
import { LinkList } from '../components';
import { Box } from '@mui/material';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { linkList } from '../interfaces/interfaces';

const ninthLinkList: linkList[] = [
  {
    page: '/tenth',
    text: 'Оформить ЭП СМ',
    id: 3
  },
  {
    page: '/eleventh',
    text: 'Оформить ЭП СМ с собственником',
    id: 4
  }
];

export const Ninth: React.FC = () => {
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
          <LinkList linkList={ninthLinkList}></LinkList>
        </Box>
      </Box>
    </ErrorBoundary>
  );
};
