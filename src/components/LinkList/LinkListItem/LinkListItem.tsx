import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface ILinkListItem {
  listItem: string;
  page: string;
  id: number;
  onClickSecond: (id: number) => void;
}

export const LinkListItem: React.FC<ILinkListItem> = ({ listItem, page, id, onClickSecond }) => {
  return (
    <Link
      to={page}
      style={{ textDecoration: 'none' }}
      onClick={() => {
        onClickSecond(id);
      }}
    >
      <Paper
        elevation={15}
        sx={{
          marginTop: '50px',
          marginBottom: '25px',
          padding: ' 15px 20px',
          borderRadius: 1,
          gap: 2,
          border: 'solid #bdbdbd 1px'
        }}
      >

        <Box textAlign='left'>
          <Typography
            sx={{ cursor: 'pointer' }}
            variant='h5'
            component='h5'
            gutterBottom
            color='black'
          >
            {listItem}
          </Typography>
        </Box>

      </Paper>
    </Link>
  );
};
