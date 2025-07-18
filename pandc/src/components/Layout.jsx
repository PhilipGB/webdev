import { Background, Header, Footer } from '.';

export default function Layout({ children }) {
  return (
    <div className='min-h-screen w-full text-gray-800 dark:text-gray-200 overflow-x-hidden'>
      <Background />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
