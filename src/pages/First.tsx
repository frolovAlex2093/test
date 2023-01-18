import React from 'react';
import { Box } from '@mui/material';
import { LinkList } from '../components';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import { linkList } from '../interfaces/interfaces';

const firstLinkList: linkList[] = [
  {
    page: '/fifth',
    text: 'Самоходные машины',
    id: 0
  }
];

export const First: React.FC = () => {
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
