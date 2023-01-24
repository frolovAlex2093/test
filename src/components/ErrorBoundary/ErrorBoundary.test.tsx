import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { First } from '../../pages';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary component', () => {
  it('ErrorBoundary component render', () => {
    render(
      <MemoryRouter>
        <ErrorBoundary>
          <First></First>
        </ErrorBoundary>
      </MemoryRouter>
    );
    expect(screen.getByText('Самоходные машины')).toBeInTheDocument();
  });

  it('ErrorBoundary component snapShot', () => {
    const errorBoundarySnap = render(
      <MemoryRouter>
        <ErrorBoundary>
          <First></First>
        </ErrorBoundary>
      </MemoryRouter>
    );
    expect(errorBoundarySnap).toMatchSnapshot();
  });

  it('ErrorBoundary component error render', () => {
    render(
      <ErrorBoundary>
        <First></First>
      </ErrorBoundary>
    );
    expect(screen.getByText('Sorry.. there was an error')).toBeInTheDocument();
  });

  it('ErrorBoundary component error snapshot', () => {
    const errorBoundaryErrorSnap = render(
      <ErrorBoundary>
        <First></First>
      </ErrorBoundary>
    );
    expect(errorBoundaryErrorSnap).toMatchSnapshot();
  });
});
