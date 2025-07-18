import { useState } from 'react';
import { glassmorphismStyle } from '../styles/Glassmorphism';

export default function Contact() {
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...contactFormData }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
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
          <form className='space-y-4' onSubmit={handleSubmit}>
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
                value={contactFormData.name}
                onChange={(e) =>
                  setContactFormData({
                    ...contactFormData,
                    name: e.target.value,
                  })
                }
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
                value={contactFormData.email}
                onChange={(e) =>
                  setContactFormData({
                    ...contactFormData,
                    email: e.target.value,
                  })
                }
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
                value={contactFormData.subject}
                onChange={(e) =>
                  setContactFormData({
                    ...contactFormData,
                    subject: e.target.value,
                  })
                }
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
                value={contactFormData.message}
                onChange={(e) =>
                  setContactFormData({
                    ...contactFormData,
                    message: e.target.value,
                  })
                }
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
  );
}
