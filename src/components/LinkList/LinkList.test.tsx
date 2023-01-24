import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { LinkList } from './LinkList';

const linkList = [
  {
    page: '/third',
    text: 'Оформить ЭП СМ',
    id: 3
  },
  {
    page: '/fourth',
    text: 'Оформить ЭП СМ с собственником',
    id: 4
  }
];

describe('LinkList component', () => {
  it('LinkList render', () => {
    render(
      <MemoryRouter>
        <LinkList linkList={linkList}></LinkList>
      </MemoryRouter>
    );

    expect(screen.getByText('Оформить ЭП СМ')).toBeInTheDocument();
    expect(screen.getByText('Оформить ЭП СМ с собственником')).toBeInTheDocument();
  });
  it('LinkList snapshot', () => {
    const linkListSnap = render(
      <MemoryRouter>
        <LinkList linkList={linkList}></LinkList>
      </MemoryRouter>
    );
    expect(linkListSnap).toMatchSnapshot();
  });
});
