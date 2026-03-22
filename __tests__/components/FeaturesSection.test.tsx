import { render, screen } from '@testing-library/react';
import FeaturesSection from '@/components/FeaturesSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    ul: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, transition, variants, whileInView, viewport, ...rest } = props;
      return <ul {...rest}>{children}</ul>;
    },
    li: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const { initial, animate, transition, variants, whileInView, viewport, ...rest } = props;
      return <li {...rest}>{children}</li>;
    },
  },
}));

describe('FeaturesSection', () => {
  it('renders the section title as h2', () => {
    render(<FeaturesSection />);
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('What we do');
  });

  it('renders 3 feature items', () => {
    render(<FeaturesSection />);
    const headings = screen.getAllByRole('heading', { level: 3 });
    expect(headings).toHaveLength(3);
  });

  it('renders all feature titles', () => {
    render(<FeaturesSection />);
    expect(screen.getByText('Fast Performance')).toBeInTheDocument();
    expect(screen.getByText('Secure & Reliable')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design')).toBeInTheDocument();
  });

  it('has section element with id="features"', () => {
    const { container } = render(<FeaturesSection />);
    const section = container.querySelector('section#features');
    expect(section).toBeInTheDocument();
  });

  it('renders the features label', () => {
    render(<FeaturesSection />);
    expect(screen.getByText('Features')).toBeInTheDocument();
  });
});
