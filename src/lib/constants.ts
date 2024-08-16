import { Facebook, Instagram, LinkedIn, Pinterest, Service, Twitter } from '../assets';

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
    img: 'https://bucketlistjourney.net/wp-content/uploads/2023/12/Organize-a-Community-Clean-Up-RF-2-768x576.jpg',
  },
  {
    id: 2,
    title: 'Recycling',
    description: ' Une opportunités pour un avenir plus vert',
    img: Service,
  },
  {
    id: 3,
    title: 'Service 3',
    description: 'Some description',
    img: Service,
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
