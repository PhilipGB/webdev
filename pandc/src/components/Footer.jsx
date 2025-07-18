import { glassmorphismStyle } from '../styles/Glassmorphism';

export default function Footer() {
  return (
    <footer className={`mt-16 py-8 ${glassmorphismStyle}`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600 dark:text-gray-400'>
        <p>
          &copy; {new Date().getFullYear()} P&C Web Development. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
