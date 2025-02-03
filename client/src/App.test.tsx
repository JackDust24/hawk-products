import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Renders main page correctly', () => {
  it('Should render the spinner and page correctly', async () => {
    render(<App />);

    const loadingSpinner = screen.getByLabelText('spinner');
    expect(loadingSpinner).toBeInTheDocument();

    const h1 = await screen.findByText('Featured Products');

    expect(h1).toBeInTheDocument();
  });
});
