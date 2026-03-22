import { render, screen } from '@testing-library/react';
import HeroSection from '@/components/HeroSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <p {...filterMotionProps(props)}>{children}</p>,
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <h1 {...filterMotionProps(props)}>{children}</h1>,
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => <div {...filterMotionProps(props)}>{children}</div>,
  },
}));

function filterMotionProps(props: Record<string, unknown>) {
  const { initial, animate, transition, variants, whileInView, viewport, ...rest } = props;
  return rest;
}

describe('HeroSection', () => {
  it('renders the headline as h1', () => {
    render(<HeroSection />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Build Something Amazing');
  });

  it('renders the subtext', () => {
    render(<HeroSection />);
    expect(
      screen.getByText(/We help businesses transform their ideas/)
    ).toBeInTheDocument();
  });

  it('renders a CTA button linking to contact section', () => {
    render(<HeroSection />);
    const ctaLink = screen.getByText('Get Started');
    expect(ctaLink).toBeInTheDocument();
    expect(ctaLink.closest('a')).toHaveAttribute('href', '#contact');
  });

  it('has section element with id="hero"', () => {
    const { container } = render(<HeroSection />);
    const section = container.querySelector('section#hero');
    expect(section).toBeInTheDocument();
  });

  it('renders the site name', () => {
    render(<HeroSection />);
    expect(screen.getByText('Company Name')).toBeInTheDocument();
  });
});
