import { MemoryRouter } from 'react-router-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { Blocks } from './Blocks';
import userEvent from '@testing-library/user-event';

const blocks = [
  {
    blocksName: 'test name 1',
    id: 0,
    blocksItem: [
      {
        blockName: 'test name 1_1',
        id: 0,
        blockItem: [
          {
            name: 'test name 1_1_1',
            type: 'TextField',
            id: 0,
            require: false,
            checkbox: false,
            disabled: false,
            value: ['']
          }
        ]
      }
    ]
  }
];

const onChangeBlock = jest.fn();
const onclickSubmit = jest.fn();

describe('Blocks component', () => {
  it('Blocks component render', () => {
    render(
      <Blocks blocks={blocks} onChangeBlock={onChangeBlock} onclickSubmit={onclickSubmit}></Blocks>
    );

    expect(screen.getByText('test name 1')).toBeInTheDocument();
    expect(screen.getByText('test name 1_1')).toBeInTheDocument();
    expect(screen.getByLabelText('test name 1_1_1')).toBeInTheDocument();
    expect(screen.getByText('Сгенерировать XML')).toBeInTheDocument();
  });

  it('Blocks component button', () => {
    render(
      <Blocks blocks={blocks} onChangeBlock={onChangeBlock} onclickSubmit={onclickSubmit}></Blocks>
    );

    fireEvent.submit(screen.getByText('Сгенерировать XML'));

    expect(onclickSubmit).toHaveBeenCalled();
  });

  it('Blocks component snapshot', () => {
    const blockSnap = render(
      <Blocks blocks={blocks} onChangeBlock={onChangeBlock} onclickSubmit={onclickSubmit}></Blocks>
    );
    expect(blockSnap).toMatchSnapshot();
  });
});
