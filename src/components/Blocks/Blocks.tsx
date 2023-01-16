import { Alert, Box, Button, Snackbar, Typography } from '@mui/material';
import React from 'react';
import { IBlocks } from '../../interfaces/interfaces';
import { Block } from './Block/Block';

export const Blocks: React.FC<IBlocks> = ({ blocks, onChangeBlock, onclickSubmit }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component='form'
      width={870}
      onSubmit={() => {
        onclickSubmit();
        handleClick();
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} variant='filled' severity='success' sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
  );
};
