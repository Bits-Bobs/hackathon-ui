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
  { title: 'Contactez-nous :', items: ['Adresse : 123 Rue des Écologistes'
    , 'Téléphone : +261 34 05 666 10'
    , 'hackafako.mg@gmail.com'] },
  { title: 'Our Promise:', items: ['Minimized environmental impact', 'Transparency and ethical conduct'] },
  
  

];

export const DEFAULT_PATH = PATH_DASHBOARD.general.home;
