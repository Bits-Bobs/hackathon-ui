import { Hero, ServiceCard, ServiceSlide } from '../components';
import { services } from '../lib';

export const Home = () => {
  return (
    <main>
      <Hero />
      <div className='py-10'>
        <h1 className='text-center text-4xl font-semibold'>Nos services</h1>
        <ServiceSlide>
          {services.map((service) => (
            <ServiceCard item={service} key={service.id} />
          ))}
        </ServiceSlide>
      </div>
    </main>
  );
};
