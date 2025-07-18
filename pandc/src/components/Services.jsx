import services from '../data/services.json';
import { glassmorphismStyle } from '../styles/Glassmorphism.jsx';

export default function Services() {
  return (
    <section id='services-section' className='py-24'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
          Our Services
        </h2>
        <p className='text-lg text-gray-600 dark:text-gray-400 mt-2'>
          Crafted to elevate your brand.
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-8'>
        {services.map((service) => (
          <div
            key={service.serviceName}
            className={`p-8 rounded-2xl text-center transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl ${glassmorphismStyle}`}
          >
            <h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
              {service.serviceName}
            </h3>
            <p className='text-gray-600 dark:text-gray-400'>
              {service.serviceDetails}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
