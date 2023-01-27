import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { IDict, ILinkListItem } from '../../../interfaces/interfaces';

export const LinkListItem: React.FC<ILinkListItem> = ({ listItem, page }) => {
  const [active, setActive] = useState<IDict>({ textDecoration: 'none' });

  useEffect(() => {
    if (
      listItem === 'Изготовление транспортного средства (шасси, машины)' ||
      listItem ===
        'Ввоз транспортного средства (шасси, машины) на таможенную территорию Союза из государства, не являющегося членом Союза'||
      listItem === 'Шаблон электронного паспорта самоходной машины. Полная форма без проверки полей'
    ) {
      setActive({ textDecoration: 'none', opacity: '0.4', pointerEvents: 'none' });
    }
  }, [listItem]);

  return (
    <Link to={page} style={active}>
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
