import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App'; // Adjust the path accordingly

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
