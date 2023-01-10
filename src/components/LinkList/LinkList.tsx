import React from 'react';
import { Box } from '@mui/material';
import { LinkListItem } from './LinkListItem/LinkListItem';
import { linkList } from '../../pages/First';

interface ILinkList {
  linkList: linkList[];
  onClickSecond: (id: number) => void;
}

export const LinkList: React.FC<ILinkList> = ({ linkList, onClickSecond }) => {
  return (
    <Box>
      {linkList.map((item) => {
        return (
          <LinkListItem
            listItem={item.text}
            page={item.page}
            key={item.id}
            id={item.id}
            onClickSecond={onClickSecond}
          />
        );
      })}
    </Box>
  );
};
