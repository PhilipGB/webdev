import { glassmorphismStyle } from '../styles/Glassmorphism';

export default function About() {
  return (
    <section id='about-section' className='py-12'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
          About Us
        </h2>
        <p className='text-lg text-gray-600 dark:text-gray-400 mt-2'>
          Crafting digital futures with passion and precision.
        </p>
      </div>
      <div
        className={`max-w-3xl mx-auto p-8 rounded-2xl text-left ${glassmorphismStyle} shadow-lg`}
      >
        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
          Our Beliefs
        </h3>
        <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
          We believe in the power of innovative design and robust technology to
          transform businesses. Our core philosophy centers on transparency,
          collaboration, and delivering measurable results that exceed
          expectations. We are committed to continuous learning and staying
          ahead of industry trends to provide cutting-edge solutions.
        </p>

        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
          What We Offer
        </h3>
        <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
          P&amp;C WEB DEVELOPMENT offers a comprehensive suite of web
          development services, including custom website design, e-commerce
          solutions, mobile-first development, search engine optimization (SEO),
          and ongoing maintenance and support. We tailor our services to meet
          the unique needs of each client, ensuring a personalized approach to
          every project.
        </p>

        <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
          Why Choose Us?
        </h3>
        <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
          Choosing P&amp;C WEB DEVELOPMENT means partnering with a team
          dedicated to your success. We combine creative flair with technical
          expertise, ensuring your digital presence is not only visually
          stunning but also highly functional and optimized for performance. Our
          client-centric approach means we're with you every step of the way,
          from concept to launch and beyond.
        </p>
      </div>
    </section>
  );
}
