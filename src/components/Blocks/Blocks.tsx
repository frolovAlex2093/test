import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { IBlocks } from '../../interfaces/interfaces';
import { Block } from './Block/Block';

export const Blocks: React.FC<IBlocks> = ({ blocks, onChangeBlock, onclickSubmit }) => {
  return (
    <Box
      component='form'
      width={870}
      onSubmit={() => {
        onclickSubmit();
      }}
    >
      {blocks.map((item, index) => {
        return (
          <Box key={index}>
            <Typography variant='h5' component='h5' gutterBottom color='black'>
              {item.blocksName}
            </Typography>
            <Block blocksItem={item.blocksItem} onChangeBlock={onChangeBlock}></Block>
          </Box>
        );
      })}
      <Button sx={{ margin: '0 auto' }} variant='contained' size='large' type='submit'>
        Сгенерировать XML
      </Button>
    </Box>
  );
};
