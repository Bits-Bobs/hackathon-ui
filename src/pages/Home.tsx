import { About, Hero, ServiceCard, ServiceSlide } from '../components';
import { services } from '../lib';

export const Home = () => {
  return (
    <main>
      <Hero />
      <div className='py-10' id='about'>
        <About />
      </div>
      <div className='py-10' id='services'>
        <h1 className='text-center text-4xl font-semibold text-[#100C0D]'>Our services</h1>
        <ServiceSlide>
          {services.map((service) => (
            <ServiceCard item={service} key={service.id} />
          ))}
        </ServiceSlide>
      </div>
    </main>
  );
};
