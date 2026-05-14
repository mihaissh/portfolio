import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SnakeGame } from '../pages/SnakeGame';
import { BrowserRouter } from 'react-router-dom';

describe('SnakeGame Page', () => {
  const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  it('renders the game title', () => {
    renderWithRouter(<SnakeGame />);
    expect(screen.getByText(/SNAKE/i)).toBeInTheDocument();
    expect(screen.getByText(/2D/i)).toBeInTheDocument();
  });

  it('renders the instructions', () => {
    renderWithRouter(<SnakeGame />);
    expect(screen.getByText(/Instructions/i)).toBeInTheDocument();
    expect(screen.getByText(/Move Up/i)).toBeInTheDocument();
    expect(screen.getByText(/Move Down/i)).toBeInTheDocument();
    expect(screen.getByText(/Move Left/i)).toBeInTheDocument();
    expect(screen.getByText(/Move Right/i)).toBeInTheDocument();
  });

  it('shows the start game button initially', () => {
    renderWithRouter(<SnakeGame />);
    expect(screen.getByRole('button', { name: /Start Game/i })).toBeInTheDocument();
  });

  it('displays the initial score as 0', () => {
    renderWithRouter(<SnakeGame />);
    const scoreElements = screen.getAllByText('0');
    // One for current score, one for high score (if not set)
    expect(scoreElements.length).toBeGreaterThanOrEqual(1);
  });
});
