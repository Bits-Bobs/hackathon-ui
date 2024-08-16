export const About = () => {
  return (
    <section className='w-full' id='about'>
      <div className='mx-auto max-w-[1080px]'>
        <h1 className='mb-20 text-center text-4xl font-semibold text-[#100C0D]'>About us</h1>
        <div className='flex w-full justify-between gap-x-5'>
          <div className='text-[14px] text-gray-700' style={{ flex: 1 }} data-aos='fade-down'>
            At HackaFako, we believe in the power of technology to transform lives, protect the environment, and
            strengthen communities. Our mission is to harness the potential of digital innovation to create solutions
            that serve both people and the planet. Inspired by the theme <i>"Le numérique au service du vivant, des
            communautés et de l’environnement,"</i> Hackafako is a platform that connects like-minded individuals passionate
            about using technology to address real-world challenges.
            <br /> <br />
            Our team is dedicated to developing tools and applications that promote sustainability, enhance community
            well-being, and contribute to the preservation of our natural ecosystems. We strive to bridge the gap
            between technology and nature, ensuring that digital progress goes hand in hand with social responsibility
            and environmental stewardship. Join us on this journey as we use the power of code to make a positive impact
            on the world, one solution at a time.
          </div>
          <div className='right' style={{ flex: 1 }} data-aos='fade-down'>
            <img
              src={
                'https://www.prospektphoto.net/wp-content/uploads/2021/01/prospekt-city-of-flies-riccardo-bononi-irfoss-imp-festival-internazionale-fotogiornalismo-padova-scaled.jpg'
              }
              alt='Antananarivo garbage'
              className='rounded-xl'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
