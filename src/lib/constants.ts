import { Facebook, Instagram, LinkedIn, Pinterest, Service1, Service2, Service3, Twitter } from '../assets';
import { PATH_DASHBOARD } from '../routes/path';

export const currentUser = {
  id: 1,
  username: 'Fiantso Harena',
  isAdmin: true,
};

export const services = [
  {
    id: 1,
    title: 'Waste Pickup',
    description: 'contribute to a healthier environment and encourage a sustainable future.',
    img: Service1,
  },
  {
    id: 2,
    title: 'Recycling',
    description: ' Une opportunités pour un avenir plus vert',
    img: Service2,
  },
  {
    id: 3,
    title: 'sale recycled articles',
    description: 'Discover our recycled products: elegant, durable and environmentally friendly.',
    img: Service3,
  },
];

export const socialMediaIcons = [
  { icon: Twitter, alt: 'Twitter' },
  { icon: Facebook, alt: 'Facebook' },
  { icon: LinkedIn, alt: 'LinkedIn' },
  { icon: Pinterest, alt: 'Pinterest' },
  { icon: Instagram, alt: 'Instagram' },
];

export const footerSections = [
  { title: 'Title 1', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
  { title: 'Title 2', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
  { title: 'Title 3', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
  { title: 'Title 4', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
  { title: 'Title 5', items: ['Something 1', 'Something 2', 'Something 3', 'Something 4'] },
];

export const DEFAULT_PATH = PATH_DASHBOARD.general.home;
