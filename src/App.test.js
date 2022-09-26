import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App.js';

describe('App tests', () => {
  it('should contains the counter', () => {
    render(<App />);
    const text = screen.getByText(/Counter/i);
    expect(text).toBeInTheDocument();
  });
});
