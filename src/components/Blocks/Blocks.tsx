import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { Block } from './Block/Block';

interface IBlock {
  blocks: {
    blocksName: string;
    id: number;
    blocksItem: {
      blockName: string;
      checkbox?: boolean;
      check?: boolean;
      id: number;
      button?: boolean;
      buttonAdd?: boolean;
      buttonDelete?: boolean;
      blockItem: {
        name: string;
        type: string;
        id: number;
        require?: boolean;
        checkbox?: boolean;
        disabled: boolean;
        pattern?: string;
        options?: string[];
        button?: boolean;
        multiple?: boolean;
        value: string[];
        radio?: string[];
        checkboxText?: string;
        buttonDelete?: boolean;
        buttonAdd?: boolean;
        group?: number[];
        endAdornment?: string;
        label?: string;
        buttons?: boolean[];
        groupBlock?: number[];
        count?: number;
        files?: string[];
        groupblockAdd?: number[];
        countBlock?: number;
        numeric?: boolean;
        freeSolo?: boolean;
        error?: boolean;
      }[];
    }[];
  }[];

  onChangeBlock: (id: number) => void;
  onclickSubmit: () => void;
}

export const Blocks: React.FC<IBlock> = ({ blocks, onChangeBlock, onclickSubmit }) => {
  const [blockss, setBlocks] = React.useState(blocks);
  return (
    <Box
      component='form'
      width={870}
      onSubmit={() => {
        onclickSubmit();
      }}
    >
      {blockss.map((item, index) => {
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
