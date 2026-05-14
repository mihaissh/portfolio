import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { SocialsBlock } from '../components/Homepage/SocialsBlock';
import { BrowserRouter } from 'react-router-dom';

describe('SocialsBlock Component', () => {
  const renderWithRouter = (component) => {
    return render(<BrowserRouter>{component}</BrowserRouter>);
  };

  it('renders all social and navigation links', () => {
    renderWithRouter(<SocialsBlock />);
    expect(screen.getByText(/LinkedIn/i)).toBeInTheDocument();
    expect(screen.getByText(/GitHub/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Snake/i)).toBeInTheDocument();
  });

  it('has correct external links', () => {
    renderWithRouter(<SocialsBlock />);
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    
    expect(linkedInLink).toHaveAttribute('href', 'https://www.linkedin.com/in/straculencu-mihai/');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/mihaissh');
  });

  it('has correct internal links', () => {
    renderWithRouter(<SocialsBlock />);
    const projectsLink = screen.getByRole('link', { name: /Projects/i });
    const snakeLink = screen.getByRole('link', { name: /Snake/i });
    
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(snakeLink).toHaveAttribute('href', '/snake');
  });
});
