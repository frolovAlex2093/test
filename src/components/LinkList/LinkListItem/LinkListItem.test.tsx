import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import { LinkListItem } from './LinkListItem';

const listItem = "LinkListItem"
const page = "1"

describe('LinkListItem component', () => {
    it('LinkListItem render', () => {
        render(
            <MemoryRouter>
                <LinkListItem listItem={listItem} page={page} id={0}></LinkListItem>
            </MemoryRouter>
        )

        expect(screen.getByText('LinkListItem')).toBeInTheDocument();
    })
    it("LinkListItem snapshot", () => {
        const linkListItemSnap = render(
            <MemoryRouter>
                <LinkListItem listItem={listItem} page={page} id={0}></LinkListItem>
            </MemoryRouter>
        )
        expect(linkListItemSnap).toMatchSnapshot();
    })
})