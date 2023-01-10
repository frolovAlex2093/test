import React from 'react';
import { Box } from '@mui/material';
import { LinkList } from '../components';

export type linkList = {
  page: string;
  text: string;
  id: number;
};

const firstLinkList: linkList[] = [
  {
    page: '/second',
    text: 'Самоходные машины',
    id: 0
  }
];

interface IFirst {
  onClickSecond: (id: number) => void;
}

export const First: React.FC<IFirst> = ({ onClickSecond }) => {
  return (
    <Box display='flex' marginTop={5} height='100%' justifyContent='center' alignItems='center'>
      <Box
        display='flex'
        flexDirection='column'
        maxWidth='700px'
        width='100%'
        padding='0 15px 0 15px'
      >
        <LinkList linkList={firstLinkList} onClickSecond={onClickSecond}></LinkList>
      </Box>
    </Box>
  );
};
