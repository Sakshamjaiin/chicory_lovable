import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon } from './WhatsAppIcon';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram 
} from 'lucide-react';

/*
  Footer Component for RSI Chicory B2B Website
  - Comprehensive business contact information
  - Social media presence for industry engagement
  - Quick product navigation for B2B buyers
  - Professional compliance and privacy links
*/

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    'Raw Chicory Roots',
    'Hand Cut Chicory Roots', 
    'Roasted Chicory Cubes (Dark)',
    'Roasted Chicory Cubes (Light)',
    'Dried Chicory Cubes',
    'Liquid Chicory Extract',
    'Roasted Chicory Granules',
    'Roasted Chicory Powder'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Information */}
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/d1f05a82-549f-4d08-a603-4ea08f5e72a9.png" 
              alt="RSI Chicory" 
              className="h-16 w-auto bg-white p-2 rounded"
            />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              RS Impex - Premium chicory manufacturer and supplier. 
              Established 2025, serving global B2B markets with quality 
              chicory products from contract farming to export.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-sm">X-19, UPSIDC-IA, GT Rd, Etah, UP 207001</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">+91 9810550456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">rsichicory@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Product Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2">
              {productLinks.slice(0, 6).map((product, index) => (
                <li key={index}>
                  <Link 
                    to={`/products/${product.toLowerCase().replace(/\s+/g, '-').replace(/[()]/g, '')}`}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">All Products</Link></li>
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Industry Blog</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/sitemap" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Site Map</Link></li>
              <li><Link to="/privacy" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect With Us</h3>
            <div className="flex items-center space-x-2">
              <WhatsAppIcon size="sm" />
              <span className="text-sm">Chat with Sales Team</span>
            </div>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-primary-foreground hover:text-accent hover:bg-primary-foreground/10"
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
            <Button variant="secondary" size="lg" asChild className="w-full">
              <Link to="/contact">Request Sample</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © {currentYear} RS Impex (RSI Chicory). All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-primary-foreground/80">
              <span>Certifications: FSSAI | APEDA | IEC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Contact Button for Mobile */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button variant="cta" size="lg" asChild>
          <Link to="/contact">Contact Us</Link>
        </Button>
      </div>
    </footer>
  );
};

export default Footer;