import { render, screen } from '@testing-library/react';
import { act } from 'react'; 
import App from './App';

test('renders awesome kanban board text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Awesome Kanban Board/i);
  expect(linkElement).toBeInTheDocument();
});
