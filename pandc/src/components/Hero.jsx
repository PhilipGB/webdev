import { glassmorphismStyle } from '../styles/Glassmorphism';

export default function Hero() {
  return (
    <section className='text-center mt-4'>
      <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4'>
        We Build{' '}
        <span className='text-blue-600 dark:text-blue-400'>
          Digital Experiences
        </span>
      </h1>
      <p className='max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8'>
        From stunning landing pages to complex web applications, we transform
        your vision into a high-performance reality that captivates and
        converts.
      </p>
      <div className='flex justify-center gap-4'>
        <button className='bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50'>
          Start Your Project
        </button>
        <button
          className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg ${glassmorphismStyle} hover:bg-gray-500/20`}
        >
          View Our Work
        </button>
      </div>
    </section>
  );
}
