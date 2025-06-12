import { describe, it, expect, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

// Mock the document.body.style.backgroundColor assignment
vi.spyOn(document.body.style, 'backgroundColor', 'set');

describe('App Component', () => {
  it('renders the main title', () => {
    render(<App />);
    expect(screen.getByText('Japanese Conjugator')).toBeInTheDocument();
  });

  it('renders clear and backspace buttons', () => {
    render(<App />);
    expect(screen.getByText('Clear Display')).toBeInTheDocument();
    expect(screen.getByText('Backspace')).toBeInTheDocument();
  });

  it('displays initial empty state with dots', () => {
    render(<App />);
    expect(screen.getByText('. . .')).toBeInTheDocument();
  });

  it('clears display when clear button is clicked', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    // First add some characters
    const letterButton = screen.getByText('あ');
    await user.click(letterButton);
    
    // Then clear
    const clearButton = screen.getByText('Clear Display');
    await user.click(clearButton);
    
    // Should show dots again
    expect(screen.getByText('. . .')).toBeInTheDocument();
  });

  it('adds characters when letter buttons are clicked', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    const letterButton = screen.getByText('あ');
    await user.click(letterButton);
    // Find the display area by class
    const display = document.querySelector('.grid-display') as HTMLElement;
    expect(within(display).getByText('あ')).toBeInTheDocument();
  });

  it('removes last character when backspace is clicked', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    // Add a character
    const letterButton = screen.getByText('あ');
    await user.click(letterButton);
    
    // Click backspace
    const backspaceButton = screen.getByText('Backspace');
    await user.click(backspaceButton);
    
    // Should show dots again
    expect(screen.getByText('. . .')).toBeInTheDocument();
  });

  it('displays verb when verb button is clicked', async () => {
    render(<App />);
    const user = userEvent.setup();
    
    const verbButton = screen.getByText('レモン');
    await user.click(verbButton);
    
    expect(screen.getByText('レ')).toBeInTheDocument();
    expect(screen.getByText('モ')).toBeInTheDocument();
    expect(screen.getByText('ン')).toBeInTheDocument();
  });
}); 