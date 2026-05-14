import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Block } from '../components/Homepage/Block';

describe('Block Component', () => {
  it('renders children correctly', () => {
    render(<Block>Test Content</Block>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Block className="custom-class">Content</Block>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('applies default styles', () => {
    const { container } = render(<Block>Content</Block>);
    expect(container.firstChild).toHaveClass('rounded-xl');
    expect(container.firstChild).toHaveClass('border-zinc-800');
  });
});
