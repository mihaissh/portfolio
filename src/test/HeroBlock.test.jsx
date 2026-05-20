import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HeroBlock } from '../components/Homepage/HeroBlock';
import { BrowserRouter } from 'react-router-dom';

describe('HeroBlock Component', () => {
  const renderWithRouter = (component) => {
    return render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        {component}
      </BrowserRouter>
    );
  };

  it('renders the name correctly', () => {
    renderWithRouter(<HeroBlock />);
    expect(screen.getByText(/MIHAI/i)).toBeInTheDocument();
    expect(screen.getByText(/STRACULENCU/i)).toBeInTheDocument();
  });

  it('renders the description', () => {
    renderWithRouter(<HeroBlock />);
    expect(screen.getByText(/I build things that solve problems/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithRouter(<HeroBlock />);
    expect(screen.getByRole('link', { name: /View Work/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About Me/i })).toBeInTheDocument();
  });

  it('has correct links', () => {
    renderWithRouter(<HeroBlock />);
    expect(screen.getByRole('link', { name: /View Work/i })).toHaveAttribute('href', '/projects');
    expect(screen.getByRole('link', { name: /About Me/i })).toHaveAttribute('href', '/about-me');
  });
});
