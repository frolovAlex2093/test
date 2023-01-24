import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { Block } from './Block';
import userEvent from '@testing-library/user-event';

const onChangeBlock = jest.fn();

const blockItem = [
  {
    blockName: 'test name 1',
    id: 40,
    blockItem: [
      {
        name: 'test name 1_1',
        type: 'TextField',
        id: 145,
        require: false,
        checkbox: false,
        disabled: false,
        value: ['']
      }
    ]
  },
  {
    blockName: 'test name 2',
    id: 40,
    checkbox: true,
    check: false,
    blockItem: [
      {
        name: 'test name 2_1',
        type: 'TextField',
        id: 145,
        require: false,
        checkbox: false,
        disabled: false,
        value: ['']
      }
    ]
  }
];

describe('Block component', () => {
  it('Block component render', () => {
    render(<Block blocksItem={blockItem} onChangeBlock={onChangeBlock}></Block>);
    expect(screen.getByText('test name 1')).toBeInTheDocument();
    expect(screen.getByText('test name 2')).toBeInTheDocument();

    expect(screen.getByLabelText('test name 1_1')).toBeInTheDocument();
    expect(screen.getByLabelText('test name 2_1')).toBeInTheDocument();

    expect(screen.getByText('Отсутствует')).toBeInTheDocument();
  });
  it('Block component function', () => {
    render(<Block blocksItem={blockItem} onChangeBlock={onChangeBlock}></Block>);

    userEvent.click(screen.getByText('Отсутствует'));

    expect(onChangeBlock).toHaveBeenCalled();
  });
  it('Block component snapshot', () => {
    const blockSnap = render(<Block blocksItem={blockItem} onChangeBlock={onChangeBlock}></Block>);
    expect(blockSnap).toMatchSnapshot();
  });
});
