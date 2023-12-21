import React from 'react';
import { LinkList } from '../components';
import { Box } from '@mui/material';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { linkList } from '../interfaces/interfaces';

const sixthLinkList: linkList[] = [
  {
    page: '/NoOwner_01',
    text: 'Оформить ЭП СМ',
    id: 3
  },
  {
    page: '/Owner_01',
    text: 'Оформить ЭП СМ с собственником',
    id: 4
  }
];

export const Sixth: React.FC = () => {
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
          <LinkList linkList={sixthLinkList}></LinkList>
        </Box>
      </Box>
    </ErrorBoundary>
  );
};
