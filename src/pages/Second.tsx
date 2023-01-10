import React from 'react';
import { LinkList } from '../components';
import { Box } from '@mui/material';
import { linkList } from './First';

const secondLinkList: linkList[] = [
  {
    page: '/third',
    text: 'Оформить ЭП СМ',
    id: 3
  },
  {
    page: '/fourth',
    text: 'Оформить ЭП СМ с собственником',
    id: 4
  }
];

interface ISecond {
  onClickSecond: (id: number) => void;
}

export const Second: React.FC<ISecond> = ({ onClickSecond }) => {
  return (
    <Box display='flex' marginTop={5} height='100%' justifyContent='center' alignItems='center'>
      <Box
        display='flex'
        flexDirection='column'
        maxWidth='700px'
        width='100%'
        padding='0 15px 0 15px'
      >
        <LinkList linkList={secondLinkList} onClickSecond={onClickSecond}></LinkList>
      </Box>
    </Box>
  );
};
