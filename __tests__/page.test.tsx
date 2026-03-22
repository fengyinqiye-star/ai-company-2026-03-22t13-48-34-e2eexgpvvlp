import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock framer-motion with all used motion elements
jest.mock('framer-motion', () => {
  const createMotionComponent = (tag: string) => {
    const Component = ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const {
        initial, animate, transition, variants, whileInView, viewport,
        whileHover, whileTap,
        ...rest
      } = props;
      const Tag = tag as keyof JSX.IntrinsicElements;
      return <Tag {...rest}>{children}</Tag>;
    };
    Component.displayName = `motion.${tag}`;
    return Component;
  };

  return {
    motion: {
      p: createMotionComponent('p'),
      h1: createMotionComponent('h1'),
      div: createMotionComponent('div'),
      ul: createMotionComponent('ul'),
      li: createMotionComponent('li'),
      a: createMotionComponent('a'),
    },
  };
});

describe('Home Page', () => {
  it('renders the Header with site name', () => {
    render(<Home />);
    expect(screen.getAllByText('Company Name').length).toBeGreaterThan(0);
  });

  it('renders the Hero section', () => {
    render(<Home />);
    expect(screen.getByText('Build Something Amazing')).toBeInTheDocument();
  });

  it('renders the Features section', () => {
    render(<Home />);
    expect(screen.getByText('Fast Performance')).toBeInTheDocument();
    expect(screen.getByText('Secure & Reliable')).toBeInTheDocument();
    expect(screen.getByText('Responsive Design')).toBeInTheDocument();
  });

  it('renders the Contact section', () => {
    render(<Home />);
    expect(screen.getByText('Get In Touch')).toBeInTheDocument();
  });

  it('renders the Footer', () => {
    render(<Home />);
    expect(screen.getByText(/2026. All rights reserved./)).toBeInTheDocument();
  });

  it('has proper semantic structure with main element', () => {
    render(<Home />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
