import type { NavLink, Feature, HeroContent, ContactContent, SiteMetadata } from '@/types';

export const SITE_METADATA: SiteMetadata = {
  siteName: 'Company Name',
  title: 'Company Name - Innovative Solutions',
  description: 'We provide innovative solutions to help your business grow.',
  ogTitle: 'Company Name - Innovative Solutions',
  ogDescription: 'We provide innovative solutions to help your business grow.',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'Contact', href: '#contact' },
];

export const HERO_CONTENT: HeroContent = {
  headline: 'Build Something Amazing',
  subtext: 'We help businesses transform their ideas into reality with cutting-edge technology and expert guidance.',
  ctaText: 'Get Started',
  ctaHref: '#contact',
};

export const FEATURES: Feature[] = [
  {
    icon: '🚀',
    title: 'Fast Performance',
    description: 'Lightning-fast load times and optimized performance to keep your users engaged.',
  },
  {
    icon: '🛡️',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security with 99.9% uptime guarantee for peace of mind.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Beautiful experiences across all devices, from mobile to desktop.',
  },
];

export const CONTACT_CONTENT: ContactContent = {
  heading: 'Get In Touch',
  description: 'Have a question or want to work together? We would love to hear from you.',
  email: 'hello@example.com',
  phone: '+1 (555) 123-4567',
  ctaText: 'Send Us an Email',
};
