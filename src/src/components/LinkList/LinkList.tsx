import React from 'react';
import { Box } from '@mui/material';
import { LinkListItem } from './LinkListItem/LinkListItem';
import { ILinkList } from '../../interfaces/interfaces';

export const LinkList: React.FC<ILinkList> = ({ linkList }) => {
  return (
    <Box>
      {linkList.map((item) => {
        return <LinkListItem listItem={item.text} page={item.page} key={item.id} id={item.id} />;
      })}
    </Box>
  );
};
