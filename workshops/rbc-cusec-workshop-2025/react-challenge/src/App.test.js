import { render, screen } from '@testing-library/react';
import App from './App';

// Mock require.context
jest.mock('./components/Gallery', () => () => <div role="list">Gallery</div>);

test('header renders', () => {
  render(<App />);
  const headerElement = screen.getByText(/watch list/i);
  expect(headerElement).toBeInTheDocument();
});

test('Gallery component is defined', () => {
  render(<App />);
  const galleryElement = screen.getByRole('list');
  expect(galleryElement).toBeInTheDocument();
});
