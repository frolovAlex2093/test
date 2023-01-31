import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material';
import React from 'react';
import { IBlockItem } from '../../../../interfaces/interfaces';
import { Context } from '../../../../pages/Third';
import CloseIcon from '@mui/icons-material/Close';

export const BlockItem: React.FC<IBlockItem> = ({ blockItem }) => {
  const {
    handleChangeCheck,
    handleChangeValue,
    handleRadio,
    onClickDelete,
    onClickAdd,
    onClickAddDopBlock,
    uploadImage,
    deleteFile
  } = React.useContext(Context);

  document.querySelector('.file');

  return (
    <Box display='flex' flexDirection='column'>
      {blockItem.map((item, index) => {
        item.require = false;
        const options = item.options !== undefined ? item.options : [''];

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
                  control={
                    <Checkbox
                      onChange={
                        () => {}
                        // handleMultiple?.(item.id)
                      }
                    ></Checkbox>
                  }
                  label={item.checkboxText}
                />
              </Box>
            ) : (
              ''
            )}
            <Box
              display={item.hidden ? 'none' : 'flex'}
              flexDirection='row'
              margin='10px 0'
              alignItems='center'
            >
              {item.type === 'Autocomplete' ? (
                item.multiple ? (
                  <Autocomplete
                    freeSolo={item.freeSolo}
                    multiple={item.multiple}
                    getOptionDisabled={(option) =>
                      item.value !== null &&
                      item.name === 'Цвет кузова (кабины, прицепа)' &&
                      item.value.length === 3
                        ? // ||
                          // item.value.includes(option)
                          true
                        : false
                    }
                    onChange={(event, value) => handleChangeValue?.(item.id, value)}
                    disabled={item.disabled}
                    size='small'
                    id={item.id + ''}
                    options={options}
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
                    isOptionEqualToValue={(option, value) => option === value}
                    value={(item.value !== null && item.value[0]) || null}
                    defaultValue={
                      item.name === 'Вид массы' && item.value !== null && item.value[0] !== ''
                        ? options[2]
                        : null
                    }
                    id={item.id + ''}
                    options={options}
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
                    sx={{ height: '23px' }}
                    disabled={item.disabled}
                    control={
                      <Checkbox
                        onChange={(event) => handleChangeCheck?.(item.id, event.target.checked)}
                      ></Checkbox>
                    }
                    label={item.name}
                  />
                </>
              ) : item.type === 'files' ? (
                ''
              ) : item.type === 'date' ? (
                <TextField
                  data-testid='date'
                  label='Дата документа'
                  type='date'
                  required={item.require}
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
                  value={item.defaultValue}
                  error={item.error}
                  disabled={item.disabled}
                  required={item.require}
                  id={item.id + ''}
                  label={item.name}
                  variant='outlined'
                  size='small'
                  sx={{
                    width: '100%',
                    maxWidth: '830px'
                  }}
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
                        onChange={(event) => handleChangeCheck?.(item.id, event.target.checked)}
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
              //алерты
              <Alert variant='filled' severity='error' sx={{ marginBottom: '10px' }}>
                {item.pattern === '^[0-9]{4}$' ? 'Некорректный год' : ''}
                {item.pattern === '^.{0,50}$' ? 'Не больше 50 символов' : ''}
                {item.pattern === '^.{0,20}$' ? 'Не больше 20 символов' : ''}
                {item.pattern === '^.{0,300}$' ? 'Не больше 3000 символов' : ''}
                {item.pattern === '^.{0,120}$' ? 'Не больше 120 символов' : ''}
                {item.pattern === '^.{0,200}$' ? 'Не больше 200 символов' : ''}
                {item.pattern === '^.{0,500}$' ? 'Не больше 500 символов' : ''}
                {item.pattern === '^.{0,1000}$' ? 'Не больше 1000 символов' : ''}
                {item.pattern === '^.{0,4000}$' ? 'Не больше 4000 символов' : ''}
                {item.pattern === '^[0-9]{0,4}$' ? 'Не больше 4 цифр' : ''}
                {item.pattern === '^[0-9]+$' ? 'Не число' : ''}
                {item.pattern === '^[0-9]+(,|.)[0-9]{2}$'
                  ? 'Положительное число с двумя знаками после запятой'
                  : ''}

                {item.pattern ===
                '^(([a-zA-Z0-9_]|[^a-zA-Z0-9_])+)@([a-zA-Z0-9_]+).([a-zA-Z0-9_]+)$'
                  ? 'Введите корректный Email'
                  : ''}
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
            {/* //buttons */}
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
                    aria-label='add'
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
                    aria-label='delete'
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
                  aria-label='add'
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
                  aria-label='delete'
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
                    onClick={() => onClickAddDopBlock?.(item.id, item.groupBlockAdd)}
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
                    aria-label='addGroup'
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
                    aria-label='deleteGroup'
                  >
                    Удалить
                  </Button>
                </Box>
              ) : item.buttons[0] ? (
                <Button
                  onClick={() => onClickAddDopBlock?.(item.id, item.groupBlockAdd)}
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
                  aria-label='addGroup'
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
              <>
                <TextField
                  
                  className='file'
                  data-testid='files'
                  sx={{ marginTop: '-25px', color:"transparent"}}
                  error={item.pattern !== 'false'}
                  required={item.require}
                  variant='outlined'
                  type='file'
                  inputProps={{style: {color:'transparent'}, title:'', multiple: true, accept: 'image/png, image/jpeg' }}
                  onChange={(event) => {
                    // clear();
                    // event.target.value = ""
                    uploadImage?.(event, item.id);
                    // event.target.value = ""
                  }}
                ></TextField>
                {item.files !== null &&
                Array.isArray(item.files) &&
                item.files !== undefined &&
                item.files[0] !== ''
                  ? item.files.map((i: string, index) => {
                      return (
                        <Box
                          key={index}
                          display='flex'
                          flexDirection='row'
                          alignItems='center'
                          marginLeft='15px'
                        >
                          <Typography sx={{ marginRight: '10px' }}>{i}</Typography>
                          <IconButton color='error' onClick={() => deleteFile?.(i)}>
                            <CloseIcon />
                          </IconButton>
                        </Box>
                      );
                    })
                  : ''}
                {item.pattern === 'false' ? (
                  ''
                ) : item.pattern === 'Приложите от 4 до 6 файлов' ||
                  item.pattern === 'Присутствуют файлы больше 512кб' ? (
                  <Alert
                    variant='filled'
                    severity='error'
                    sx={{ marginBottom: '10px', marginTop: '10px' }}
                  >
                    {item.pattern}
                  </Alert>
                ) : (
                  ''
                )}
              </>
            ) : (
              ''
            )}
          </Box>
        );
      })}
    </Box>
  );
};

// https://${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extension name}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage
