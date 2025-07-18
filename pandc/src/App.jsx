import services from './data/services.json';
import { glassmorphismStyle } from './styles/Glassmorphism.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className='min-h-screen w-full text-gray-800 dark:text-gray-200 overflow-x-hidden'>
      {/* Background Gradient Decoration */}
      <div className='fixed top-0 left-0 w-full h-full bg-gradient-to-br from-blue-100 via-transparent to-purple-100 dark:from-blue-900/50 dark:via-transparent dark:to-purple-900/50 -z-10'></div>

      <Header />

      {/* --- Main Content --- */}
      <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 pt-24'>
        {/* --- Hero Section --- */}
        <section className='text-center mt-4'>
          <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4'>
            We Build{' '}
            <span className='text-blue-600 dark:text-blue-400'>
              Digital Experiences
            </span>
          </h1>
          <p className='max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8'>
            From stunning landing pages to complex web applications, we
            transform your vision into a high-performance reality that
            captivates and converts.
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

        {/* --- Services Section --- */}
        {/* Added ID for navigation */}
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
            {/* Updated map to use service.serviceName and service.serviceDetails */}
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

        {/* --- Portfolio Section --- */}
        {/* Added ID for navigation */}
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

        {/* --- About Section --- */}
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
              We believe in the power of innovative design and robust technology
              to transform businesses. Our core philosophy centers on
              transparency, collaboration, and delivering measurable results
              that exceed expectations. We are committed to continuous learning
              and staying ahead of industry trends to provide cutting-edge
              solutions.
            </p>

            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              What We Offer
            </h3>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-6'>
              P&amp;C WEB DEVELOPMENT offers a comprehensive suite of web
              development services, including custom website design, e-commerce
              solutions, mobile-first development, search engine optimization
              (SEO), and ongoing maintenance and support. We tailor our services
              to meet the unique needs of each client, ensuring a personalized
              approach to every project.
            </p>

            <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
              Why Choose Us?
            </h3>
            <p className='text-gray-600 dark:text-gray-400 leading-relaxed'>
              Choosing P&amp;C WEB DEVELOPMENT means partnering with a team
              dedicated to your success. We combine creative flair with
              technical expertise, ensuring your digital presence is not only
              visually stunning but also highly functional and optimized for
              performance. Our client-centric approach means we're with you
              every step of the way, from concept to launch and beyond.
            </p>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section id='contact-section' className='py-16'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 dark:text-white'>
              Contact Us
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-400 mt-2'>
              Get in touch to start your project!
            </p>
          </div>
          <div className='max-w-3xl mx-auto grid md:grid-cols-2 gap-8'>
            {/* Contact Details Column */}
            <div
              className={`p-8 rounded-2xl ${glassmorphismStyle} shadow-lg flex flex-col justify-center`}
            >
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                Reach Out Directly
              </h3>
              <p className='text-gray-600 dark:text-gray-400 mb-2'>
                <strong>Email:</strong>{' '}
                <a
                  href='mailto:info@stellarsites.com'
                  className='text-blue-600 dark:text-blue-400 hover:underline'
                >
                  info@PhilsTotallyLegitWebDev.com
                </a>
              </p>
              <p className='text-gray-600 dark:text-gray-400'>
                <strong>Phone:</strong>{' '}
                <a
                  href='tel:+1234567890'
                  className='text-blue-600 dark:text-blue-400 hover:underline'
                >
                  555-555-5555
                </a>
              </p>
              <p className='text-gray-600 dark:text-gray-400 mt-4'>
                We're available Monday to Friday, 9 AM - 5 PM (GMT).
              </p>
            </div>

            {/* Contact Form Column */}
            <div className={`p-8 rounded-2xl ${glassmorphismStyle} shadow-lg`}>
              <h3 className='text-2xl font-bold text-gray-900 dark:text-white mb-4'>
                Send Us a Message
              </h3>
              <form className='space-y-4' method='post'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='mt-1 block w-full p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Your Name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='mt-1 block w-full p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='your.email@example.com'
                  />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  >
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    className='mt-1 block w-full p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Project Inquiry, Support, etc.'
                  />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 dark:text-gray-300'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='4'
                    className='mt-1 block w-full p-3 rounded-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 focus:ring-blue-500 focus:border-blue-500'
                    placeholder='Tell us about your project or question...'
                  ></textarea>
                </div>
                <button
                  type='submit'
                  className='w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
