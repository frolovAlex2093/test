import { fireEvent, render, screen } from '@testing-library/react';

import { Context } from '../../../../pages';

import { BlockItem } from './BlockItem';
import userEvent from '@testing-library/user-event';

const handleRadio = jest.fn();
const handleChangeCheck = jest.fn();
const handleChangeValue = jest.fn();
const onClickDelete = jest.fn();
const onClickAdd = jest.fn();
const onCkickAddDopBlock = jest.fn();
const uploadImage = jest.fn();

const blockItem = [
  {
    name: 'test name 1',
    type: 'TextField',
    id: 0,
    require: false,
    checkbox: false,
    disabled: false,
    value: [''],
    endAdornment: 'endAdornment'
  },
  {
    name: 'test name 2',
    type: 'Autocomplete',
    id: 1,
    require: false,
    checkbox: false,
    disabled: false,
    value: [''],
    options: ['options 1', 'options 2']
  },
  {
    name: 'test name 3',
    type: 'checkbox',
    id: 2,
    require: false,
    checkbox: false,
    disabled: false,
    value: ['']
  },
  {
    name: 'test name 4',
    type: 'TextField',
    id: 3,
    require: true,
    checkbox: true,
    disabled: true,
    value: [''],
    pattern: '^[0-9]{4}$',
    numeric: true,
    error: true
  },
  {
    name: 'test name 5',
    type: 'TextField',
    id: 4,
    require: false,
    checkbox: false,
    disabled: false,
    value: [''],
    radio: ['radio 1', 'radio 2']
  },
  {
    name: 'test name 6',
    type: 'TextField',
    id: 5,
    require: false,
    checkbox: false,
    disabled: false,
    value: [''],
    button: true,
    buttonAdd: true,
    buttonDelete: true,
    buttons: [true, true]
  },
  {
    name: 'test name 7',
    type: 'date',
    id: 6,
    require: false,
    checkbox: false,
    disabled: false,
    value: ['']
  },
  {
    name: '',
    type: 'files',
    id: 7,
    require: true,
    checkbox: false,
    disabled: false,
    value: [''],
    files: [],
    pattern: 'false'
  },
  {
    name: 'test name 8',
    type: 'Autocomplete',
    id: 8,
    require: false,
    checkbox: false,
    disabled: false,
    multiple: true,
    value: [''],
    options: ['options 1', 'options 2', 'options 3', 'options 4']
  }
];

describe('BlockItem component', () => {
  it('BlockItem render elements', () => {
    render(
      <Context.Provider
        value={{
          handleRadio,
          handleChangeCheck,
          handleChangeValue,
          onClickDelete,
          onClickAdd,
          onCkickAddDopBlock,
          uploadImage
        }}
      >
        <BlockItem blockItem={blockItem} />
      </Context.Provider>
    );
    expect(screen.getByLabelText('test name 1')).toBeInTheDocument();
    expect(screen.getByLabelText('test name 2')).toBeInTheDocument();
    expect(screen.getByLabelText('test name 3')).toBeInTheDocument();
    expect(screen.getByLabelText('test name 4')).toBeInTheDocument();
    expect(screen.getByLabelText('test name 5')).toBeInTheDocument();
    expect(screen.getByLabelText('test name 6')).toBeInTheDocument();
    expect(screen.getByLabelText('test name 8')).toBeInTheDocument();

    expect(screen.getByText('endAdornment')).toBeInTheDocument();
    expect(screen.getByLabelText<HTMLInputElement>('test name 4').disabled).toBeTruthy();
    expect(screen.getByText('Некорректный год')).toBeInTheDocument();
  });
  it('BlockItem render buttons', () => {
    render(
      <Context.Provider
        value={{
          handleRadio,
          handleChangeCheck,
          handleChangeValue,
          onClickDelete,
          onClickAdd,
          onCkickAddDopBlock,
          uploadImage
        }}
      >
        <BlockItem blockItem={blockItem} />
      </Context.Provider>
    );

    expect(screen.getByText('radio 1')).toBeInTheDocument();
    expect(screen.getByText('radio 2')).toBeInTheDocument();

    expect(screen.getByText('Отсутствует')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'add' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'delete' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'addGroup' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'deleteGroup' })).toBeInTheDocument();
  });
  it('BlockItem buttons work', () => {
    render(
      <Context.Provider
        value={{
          handleRadio,
          handleChangeCheck,
          handleChangeValue,
          onClickDelete,
          onClickAdd,
          onCkickAddDopBlock,
          uploadImage
        }}
      >
        <BlockItem blockItem={blockItem} />
      </Context.Provider>
    );
    userEvent.click(screen.getByRole('button', { name: 'add' }));
    userEvent.click(screen.getByRole('button', { name: 'delete' }));

    userEvent.click(screen.getByRole('button', { name: 'addGroup' }));
    userEvent.click(screen.getByRole('button', { name: 'deleteGroup' }));

    userEvent.click(screen.getByText('radio 2'));
    userEvent.click(screen.getByText('radio 1'));

    userEvent.click(screen.getByText('Отсутствует'));

    expect(screen.getByLabelText('Отсутствует')).toBeTruthy();

    expect(handleRadio).toHaveBeenCalledTimes(2);
    expect(onClickDelete).toHaveBeenCalledTimes(2);
    expect(onClickAdd).toHaveBeenCalled();
    expect(onCkickAddDopBlock).toHaveBeenCalled();
    expect(handleChangeCheck).toHaveBeenCalled();
  });
  it('BlockItem handleChangeValue work', () => {
    render(
      <Context.Provider
        value={{
          handleRadio,
          handleChangeCheck,
          handleChangeValue,
          onClickDelete,
          onClickAdd,
          onCkickAddDopBlock,
          uploadImage
        }}
      >
        <BlockItem blockItem={blockItem} />
      </Context.Provider>
    );

    fireEvent.blur(screen.getByLabelText('test name 1'));
    userEvent.type(screen.getByLabelText('test name 2'), '1');
    expect(screen.getByText('options 1')).toBeInTheDocument();
    userEvent.click(screen.getByText('options 1'));

    expect(handleChangeValue).toHaveBeenCalledTimes(2);
  });
  it('BlockItem files', () => {
    render(
      <Context.Provider
        value={{
          handleRadio,
          handleChangeCheck,
          handleChangeValue,
          onClickDelete,
          onClickAdd,
          onCkickAddDopBlock,
          uploadImage
        }}
      >
        <BlockItem blockItem={blockItem} />
      </Context.Provider>
    );
    expect(screen.getByTestId('files')).toBeInTheDocument();
  });
  it('BlockItem snapshot', () => {
    const blockItemSnap = render(
      <Context.Provider
        value={{
          handleRadio,
          handleChangeCheck,
          handleChangeValue,
          onClickDelete,
          onClickAdd,
          onCkickAddDopBlock,
          uploadImage
        }}
      >
        <BlockItem blockItem={blockItem} />
      </Context.Provider>
    );
    expect(blockItemSnap).toMatchSnapshot();
  });
  it('BlockItem select multiple Options', () => {
    render(
      <Context.Provider
        value={{
          handleRadio,
          handleChangeCheck,
          handleChangeValue,
          onClickDelete,
          onClickAdd,
          onCkickAddDopBlock,
          uploadImage
        }}
      >
        <BlockItem blockItem={blockItem} />
      </Context.Provider>
    );
    userEvent.type(screen.getByLabelText('test name 8'), '1');
    userEvent.click(screen.getByText('options 1'));
    userEvent.type(screen.getByLabelText('test name 8'), '3');
    userEvent.click(screen.getByText('options 3'));
    userEvent.type(screen.getByLabelText('test name 8'), '4');
    userEvent.click(screen.getByText('options 4'));

    expect(screen.getByText('options 1')).toBeInTheDocument();
    expect(screen.getByText('options 3')).toBeInTheDocument();
    expect(screen.getByText('options 4')).toBeInTheDocument();

    expect(handleChangeValue).toHaveBeenCalledTimes(3);
  });
  it('BlockItem component calendar', () => {
    render(
      <Context.Provider
        value={{
          handleRadio,
          handleChangeCheck,
          handleChangeValue,
          onClickDelete,
          onClickAdd,
          onCkickAddDopBlock,
          uploadImage
        }}
      >
        <BlockItem blockItem={blockItem} />
      </Context.Provider>
    );
    expect(screen.getByTestId('date')).toBeInTheDocument();
  });
});
