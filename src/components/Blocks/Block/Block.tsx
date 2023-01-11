import { Box, Checkbox, FormControlLabel, Paper, Typography } from '@mui/material';
import React from 'react';
import { BlockItem } from './BlockItem/BlockItem';

interface IBlock {
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
      value: string | string[] | null;
      radio?: string[];
      checkboxText?: string;
      multiple?: boolean;
      button?: boolean;
      buttonDelete?: boolean;
      buttonAdd?: boolean;
      group?: number[];
      checkboxGroup?: string[];
      options?: string[];
      endAdornment?: string;
      label?: string;
      buttons?: boolean[];
      groupBlock?: number[];
      count?: number;
      files?: string[];
      groupblockAdd?: number[];
      countBlock?: number;
      pattern?: string;
      numeric?: boolean;
      freeSolo?: boolean;
      error?: boolean;
    }[];
  }[];
  onChangeBlock: (id: number) => void;
}

export const Block: React.FC<IBlock> = ({ blocksItem, onChangeBlock }) => {
  return (
    <Box>
      {blocksItem.map((item, index) => {
        return (
          <Box key={index}>
            <Paper
              elevation={10}
              sx={{
                marginBottom: '15px',
                padding: ' 15px 20px',
                borderRadius: 1,
                gap: 2,
                border: 'solid #bdbdbd 1px'
              }}
            >
              <Typography variant='h6' component='h6' gutterBottom color='black'>
                {item.blockName}
              </Typography>

              {item.checkbox ? (
                item.check ? (
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={() => onChangeBlock(item.id)}
                        checked={item.check}
                      ></Checkbox>
                    }
                    label='Отсутствует'
                  />
                ) : (
                  <>
                    <FormControlLabel
                      control={
                        <Checkbox
                          onChange={() => onChangeBlock(item.id)}
                          checked={item.check}
                        ></Checkbox>
                      }
                      label='Отсутствует'
                    />
                    <BlockItem blockItem={item.blockItem}></BlockItem>
                  </>
                )
              ) : (
                <BlockItem blockItem={item.blockItem}></BlockItem>
              )}
            </Paper>
          </Box>
        );
      })}
    </Box>
  );
};
