import { Footer, Hero, Navbar, ServiceCard, ServiceSlide } from '../components';
import { services } from '../lib';

export const LandingLayout = () => {
  return (
    <main className='font-poppins'>
      <Navbar />
      <section>
        <Hero />
        <div className='py-10'>
          <h1 className='text-center text-4xl font-semibold text-[#100C0D]'>Our services</h1>
          <ServiceSlide>
            {services.map((service) => (
              <ServiceCard item={service} key={service.id} />
            ))}
          </ServiceSlide>
        </div>
      </section>
      <Footer />
    </main>
  );
};
