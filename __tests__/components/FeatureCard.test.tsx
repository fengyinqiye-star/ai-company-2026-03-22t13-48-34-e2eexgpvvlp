import { render, screen } from '@testing-library/react';
import FeatureCard from '@/components/FeatureCard';

describe('FeatureCard', () => {
  const mockProps = {
    icon: '🚀',
    title: 'Test Feature',
    description: 'This is a test feature description.',
  };

  it('renders the icon', () => {
    render(<FeatureCard {...mockProps} />);
    expect(screen.getByText('🚀')).toBeInTheDocument();
  });

  it('renders the title as h3', () => {
    render(<FeatureCard {...mockProps} />);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toHaveTextContent('Test Feature');
  });

  it('renders the description', () => {
    render(<FeatureCard {...mockProps} />);
    expect(screen.getByText('This is a test feature description.')).toBeInTheDocument();
  });
});
