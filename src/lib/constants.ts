import { Facebook, Instagram, LinkedIn, Pinterest, Service, Twitter } from '../assets';
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
    img: 'https://bucketlistjourney.net/wp-content/uploads/2023/12/Organize-a-Community-Clean-Up-RF-2-768x576.jpg',
  },
  {
    id: 2,
    title: 'Recycling',
    description: ' Une opportunités pour un avenir plus vert',
    img: 'https://www.forwardsingapore.gov.sg/-/media/esc/featuredconversations/mobile/mccy4_masthead_mobile_e_360x543.jpg?h=543&w=360&hash=34BE191155BF2CCC15C6086D590E1053715CD1ED29A2F0027F18CF328AF9A499',
  },
  {
    id: 3,
    title: 'sale recycled articles',
    description: 'Discover our recycled products: elegant, durable and environmentally friendly.',
    img: 'https://img.freepik.com/photos-premium/sac-femme-fleches-recyclage-studio-pour-emballage-vente-au-detail-durable-fond-bleu-produit-ecologique-changement-climatique-fille-africaine-responsable-sauver-planete_590464-203153.jpg',
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
