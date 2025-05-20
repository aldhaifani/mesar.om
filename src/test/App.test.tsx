import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders the Button component from shadcn/ui', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /hello/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies TailwindCSS styling correctly', () => {
    render(<App />);
    const divElement = screen.getByRole('button').parentElement;
    expect(divElement).toHaveClass('flex');
    expect(divElement).toHaveClass('h-screen');
    expect(divElement).toHaveClass('items-center');
    expect(divElement).toHaveClass('justify-center');
  });
});
