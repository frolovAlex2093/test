import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import { Context } from '../../../../pages/Third';

const pp = [''];

interface IBlockItem {
  blockItem: {
    name: string;
    id: number;
    type: string;
    require?: boolean;
    checkbox?: boolean;
    disabled: boolean;
    multiple?: boolean;
    value: string | string[] | null;
    radio?: string[];
    checkboxText?: string;
    button?: boolean;
    buttonDelete?: boolean;
    buttonAdd?: boolean;
    group?: number[];
    buttonGroup?: boolean;
    checkboxGroup?: string[];
    options?: string[];
    endAdornment?: string;
    label?: string;
    buttons?: boolean[];
    groupBlock?: number[];
    count?: number;
    files?: any[];
    groupblockAdd?: number[];
    countBlock?: number;
    buttonText?: string;
    pattern?: string;
    numeric?: boolean;
    freeSolo?: boolean;
    error?: boolean;
  }[];
}

export const BlockItem: React.FC<IBlockItem> = ({ blockItem }) => {
  const {
    handleChange,
    handleChangeValue,
    handleRadio,
    handleMultiple,
    onClickDelete,
    onClickAdd,
    onCkickAddDopBlock,
    uploadImage
  } = React.useContext(Context);

  const [items, setItem] = React.useState(blockItem);
  let p: string[] = [];
  return (
    <Box display='flex' flexDirection='column'>
      {items.map((item, index) => {
        if (item.options !== undefined) p = item.options;
        //item.require = false;
        return (
          <Box key={index} display='flex' flexDirection='column'>
            {item.label ? (
              <Typography
                variant='subtitle1'
                sx={{ marginBottom: '-8px' }}
                gutterBottom
                color='black'
              >
                {item.label}
              </Typography>
            ) : (
              ''
            )}
            {item.radio ? (
              <RadioGroup
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginBottom: '-10px',
                  marginTop: '10px'
                }}
                name='controlled-radio-buttons-group'
                onChange={(event, value) => {
                  handleRadio?.(item.id, value);
                }}
                defaultValue={item.radio[0]}
              >
                <FormControlLabel value={item.radio[0]} control={<Radio />} label={item.radio[0]} />
                <FormControlLabel value={item.radio[1]} control={<Radio />} label={item.radio[1]} />
              </RadioGroup>
            ) : item.checkboxText ? (
              <Box display='flex' marginBottom='-10px' alignItems='center'>
                <FormControlLabel
                  control={<Checkbox onChange={() => handleMultiple?.(item.id)}></Checkbox>}
                  label={item.checkboxText}
                />
              </Box>
            ) : (
              ''
            )}
            <Box display='flex' flexDirection='row' margin='10px 0' alignItems='center'>
              {item.type === 'Autocomplete' ? (
                item.multiple ? (
                  <Autocomplete
                    freeSolo={item.freeSolo}
                    multiple={item.multiple}
                    onChange={(event, value) => handleChangeValue?.(item.id, value)}
                    disabled={item.disabled}
                    size='small'
                    id={item.id + ''}
                    options={item.options ? item.options : pp}
                    sx={{ width: '100%', maxWidth: '830px' }}
                    disablePortal
                    renderInput={(params) => (
                      <TextField
                        required={
                          item.value !== null && item.value[0] !== '' && item.value.length >= 1
                            ? false
                            : item.require
                        }
                        {...params}
                        label={item.name}
                      />
                    )}
                  />
                ) : (
                  <Autocomplete
                    freeSolo={item.freeSolo}
                    onChange={(event, value) => handleChangeValue?.(item.id, value)}
                    disabled={item.disabled}
                    size='small'
                    id={item.id + ''}
                    options={item.options ? item.options : pp}
                    sx={{ width: '100%', maxWidth: '830px' }}
                    disablePortal
                    renderInput={(params) => (
                      <TextField
                        required={item.require}
                        {...params}
                        label={item.name}
                        onBlur={
                          item.freeSolo
                            ? (value) => {
                                handleChangeValue?.(item.id, value.target.value);
                              }
                            : () => {}
                        }
                      />
                    )}
                  />
                )
              ) : item.type === 'checkbox' ? (
                <>
                  {' '}
                  <FormControlLabel
                    sx={{}}
                    disabled={item.disabled}
                    control={
                      <Checkbox
                        onChange={(event) => handleChange?.(item.id, event.target.checked)}
                      ></Checkbox>
                    }
                    label={item.name}
                  />
                </>
              ) : item.type === 'files' ? (
                ''
              ) : item.type === 'date' ? (
                <TextField
                  label='Дата документа'
                  type='date'
                  onBlur={(value) => {
                    handleChangeValue?.(item.id, value.target.value);
                  }}
                  sx={{ width: '100%', maxWidth: '830px' }}
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              ) : (
                <TextField
                  onBlur={(value) => {
                    handleChangeValue?.(item.id, value.target.value);
                  }}
                  inputProps={{
                    pattern: item.pattern ? item.pattern : '.{0,}'
                  }}
                  error={item.error}
                  disabled={item.disabled}
                  required={item.require}
                  id={item.id + ''}
                  label={item.name}
                  variant='outlined'
                  size='small'
                  sx={{ width: '100%', maxWidth: '830px' }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        {item.endAdornment ? item.endAdornment : ''}
                      </InputAdornment>
                    )
                  }}
                />
              )}
              {item.checkbox ? (
                <>
                  {' '}
                  <FormControlLabel
                    sx={{ marginLeft: '8px' }}
                    control={
                      <Checkbox
                        onChange={(event) => handleChange?.(item.id, event.target.checked)}
                      ></Checkbox>
                    }
                    label='Отсутствует'
                  />
                </>
              ) : (
                ''
              )}
            </Box>
            {item.error ? (
              <Alert variant='filled' severity='error' sx={{ marginBottom: '10px' }}>
                {item.pattern === '^[0-9]{4}$' ? 'Некорректный год' : ''}
                {item.pattern === '^.{0,50}$' ? 'Не больше 50 символов' : ''}
                {item.pattern === '^.{0,20}$' ? 'Не больше 20 символов' : ''}
                {item.pattern === '^.{0,120}$' ? 'Не больше 120 символов' : ''}
                {item.pattern === '^.{0,200}$' ? 'Не больше 200 символов' : ''}
                {item.pattern === '^.{0,500}$' ? 'Не больше 500 символов' : ''}
                {item.pattern === '^.{0,1000}$' ? 'Не больше 1000 символов' : ''}
                {item.pattern === '^[0-9]{0,4}$' ? 'Не больше 4 цифр' : ''}
                {item.pattern === '^[0-9]{0,24}((.|,)[0-9]{1,6})?$'
                  ? 'Не больше 24 цифр и 6 после запятой'
                  : ''}
                {item.pattern === '^[0-9]{0,5}((.|,)[0-9]{1,3})?$'
                  ? 'Не больше 5 цифр и 3 после запятой'
                  : ''}
                {item.pattern === '^[0-9]{0,20}$' ? 'Не больше 20 цифр' : ''}
              </Alert>
            ) : (
              ''
            )}

            {item.button ? (
              item.buttonDelete && item.buttonAdd ? (
                <Box display='flex' alignItems='center'>
                  <Button
                    onClick={() => onClickAdd?.(item.id, item.group)}
                    size='small'
                    sx={{
                      width: 'min-content',
                      marginRight: '10px',
                      marginTop: '-5px',
                      height: '25px',
                      alignItems: 'center',
                      whiteSpace: 'nowrap'
                    }}
                    variant='outlined'
                  >
                    {item.buttonText ? item.buttonText : 'Добавить'}
                  </Button>
                  <Button
                    color='error'
                    onClick={() => onClickDelete?.(item.id, item.group)}
                    size='small'
                    sx={{
                      width: 'min-content',
                      marginTop: '-5px',
                      height: '25px',
                      alignItems: 'center'
                    }}
                    variant='outlined'
                  >
                    Удалить
                  </Button>
                </Box>
              ) : item.buttonAdd ? (
                <Button
                  onClick={() => onClickAdd?.(item.id, item.group)}
                  size='small'
                  sx={{
                    width: 'min-content',
                    marginTop: '-5px',
                    height: '25px',
                    alignItems: 'center',
                    whiteSpace: 'nowrap'
                  }}
                  variant='outlined'
                >
                  {item.buttonText ? item.buttonText : 'Добавить'}
                </Button>
              ) : item.buttonDelete ? (
                <Button
                  color='error'
                  onClick={() => onClickDelete?.(item.id, item.group)}
                  size='small'
                  sx={{
                    width: 'min-content',
                    marginTop: '-5px',
                    height: '25px',
                    alignItems: 'center'
                  }}
                  variant='outlined'
                >
                  Удалить
                </Button>
              ) : (
                ''
              )
            ) : (
              ''
            )}
            {item.buttons ? (
              item.buttons[1] ? (
                <Box display='flex' alignItems='center'>
                  <Button
                    onClick={() => onCkickAddDopBlock?.(item.id, item.groupblockAdd)}
                    size='small'
                    sx={{
                      width: 'min-content',
                      marginRight: '10px',
                      marginTop: '20px',
                      height: '25px',
                      alignItems: 'center',
                      marginBottom: '10px',
                      whiteSpace: 'nowrap'
                    }}
                    variant='outlined'
                  >
                    Добавить группу
                  </Button>
                  <Button
                    color='error'
                    onClick={() => onClickDelete?.(item.id, item.groupBlock)}
                    size='small'
                    sx={{
                      width: 'min-content',
                      marginTop: '20px',
                      height: '25px',
                      alignItems: 'center',
                      marginBottom: '10px'
                    }}
                    variant='outlined'
                  >
                    Удалить
                  </Button>
                </Box>
              ) : item.buttons[0] ? (
                <Button
                  onClick={() => onCkickAddDopBlock?.(item.id, item.groupblockAdd)}
                  size='small'
                  sx={{
                    width: 'min-content',
                    marginTop: '20px',
                    height: '25px',
                    alignItems: 'center',
                    marginBottom: '10px',
                    whiteSpace: 'nowrap'
                  }}
                  variant='outlined'
                >
                  Добавить группу
                </Button>
              ) : (
                ''
              )
            ) : (
              ''
            )}
            {item.type === 'files' ? (
              <TextField
                required={item.require}
                variant='outlined'
                type='file'
                inputProps={{ multiple: true, accept: 'image/png, image/jpeg' }}
                onChange={(event) => {
                  uploadImage?.(event, item.id);
                }}
              ></TextField>
            ) : (
              ''
            )}
          </Box>
        );
      })}
    </Box>
  );
};
