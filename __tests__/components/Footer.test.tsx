import { render, screen } from '@testing-library/react';
import Footer from '@/components/Footer';

describe('Footer', () => {
  it('renders the copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/2026. All rights reserved./)).toBeInTheDocument();
  });

  it('renders the site name', () => {
    render(<Footer />);
    expect(screen.getByText('Company Name')).toBeInTheDocument();
  });

  it('renders as a footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
