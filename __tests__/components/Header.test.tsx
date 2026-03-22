import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/Header';

describe('Header', () => {
  it('renders the site name', () => {
    render(<Header />);
    expect(screen.getByText('Company Name')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('has correct href attributes for navigation links', () => {
    render(<Header />);
    const homeLinks = screen.getAllByText('Home');
    expect(homeLinks[0]?.closest('a')).toHaveAttribute('href', '#hero');

    const featureLinks = screen.getAllByText('Features');
    expect(featureLinks[0]?.closest('a')).toHaveAttribute('href', '#features');

    const contactLinks = screen.getAllByText('Contact');
    expect(contactLinks[0]?.closest('a')).toHaveAttribute('href', '#contact');
  });

  it('renders a hamburger menu button', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Toggle navigation menu');
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Toggle navigation menu');

    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('banner').querySelector('#mobile-menu')).toBeInTheDocument();

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes mobile menu when a link is clicked', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Toggle navigation menu');

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    const mobileMenu = screen.getByRole('banner').querySelector('#mobile-menu');
    const firstLink = mobileMenu?.querySelector('a');
    if (firstLink) {
      fireEvent.click(firstLink);
    }
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders with proper semantic elements', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
});
