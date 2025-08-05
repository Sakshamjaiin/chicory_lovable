import React from 'react';
import Header from './Header';
import Footer from './Footer';

/*
  Main Layout Component for RSI Chicory Website
  - Consistent header and footer across all pages
  - Professional B2B structure with proper spacing
  - Mobile-responsive design for global accessibility
*/

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;