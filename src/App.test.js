import { render, screen } from '@testing-library/react';
import App from './App';

test('renders experimentality test', () => {
  render(<App />);
  const linkElement = screen.getByText(/experimentality/i);
  expect(linkElement).toBeInTheDocument();
});
