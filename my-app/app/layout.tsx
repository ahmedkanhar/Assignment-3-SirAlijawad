// app/layout.tsx
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'Ahmed Ali Portfolio',
  description: 'Welcome to my portfolio website',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
