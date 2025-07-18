import { glassmorphismStyle } from '../styles/Glassmorphism';

export default function Portfolio() {
  return (
    <section id='portfolio-section' className='py-16'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
          Recent Work
        </h2>
        <p className='text-lg text-gray-600 dark:text-gray-400 mt-2'>
          See our craftsmanship in action.
        </p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className={`rounded-2xl overflow-hidden group transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${glassmorphismStyle}`}
          >
            <img
              src={`https://placehold.co/600x400/e5e7eb/9ca3af?text=Project+${item}`}
              alt={`Project ${item}`}
              className='w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110'
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                Project Title {item}
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mt-2'>
                Corporate Website
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
