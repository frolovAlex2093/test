import { Box, Checkbox, FormControlLabel, Paper, Typography } from '@mui/material';
import React from 'react';
import { IBlock } from '../../../interfaces/interfaces';
import { BlockItem } from './BlockItem/BlockItem';

export const Block: React.FC<IBlock> = ({ blocksItem, onChangeBlock }) => {
  return (
    <>
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
    </>
  );
};
