import { render, screen } from '@testing-library/react';
import ContactSection from '@/components/ContactSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    a: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { whileHover, whileTap, initial, animate, transition, variants, whileInView, viewport, ...rest } = props;
      return <a {...rest}>{children}</a>;
    },
  },
}));

describe('ContactSection', () => {
  it('renders the section title as h2', () => {
    render(<ContactSection />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('Get In Touch');
  });

  it('renders the description', () => {
    render(<ContactSection />);
    expect(
      screen.getByText(/Have a question or want to work together/)
    ).toBeInTheDocument();
  });

  it('renders the email address', () => {
    render(<ContactSection />);
    expect(screen.getByText('hello@example.com')).toBeInTheDocument();
  });

  it('renders the phone number', () => {
    render(<ContactSection />);
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
  });

  it('renders a CTA button with mailto link', () => {
    render(<ContactSection />);
    const ctaLinks = screen.getAllByRole('link');
    const mailtoLink = ctaLinks.find(
      (link) => link.getAttribute('href') === 'mailto:hello@example.com'
    );
    expect(mailtoLink).toBeInTheDocument();
  });

  it('has section element with id="contact"', () => {
    const { container } = render(<ContactSection />);
    const section = container.querySelector('section#contact');
    expect(section).toBeInTheDocument();
  });

  it('renders the contact label', () => {
    render(<ContactSection />);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
