import { About, Contact, Hero, Portfolio, Services } from '../components';

export default function Home() {
  return (
    <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 pt-24'>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
    </main>
  );
}
