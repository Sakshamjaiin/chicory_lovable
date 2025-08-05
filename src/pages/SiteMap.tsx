import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Home, 
  Package, 
  Info, 
  MessageSquare, 
  FileText,
  Coffee,
  Leaf,
  Factory
} from 'lucide-react';

/*
  Site Map Page for RSI Chicory
  - Comprehensive navigation structure for SEO and user experience
  - Organized by main sections with all pages and products
  - Professional layout for B2B website architecture
*/

const SiteMap = () => {
  const mainPages = [
    {
      icon: Home,
      title: 'Home',
      path: '/',
      description: 'RSI Chicory homepage with company overview and featured products'
    },
    {
      icon: Package,
      title: 'All Products',
      path: '/products',
      description: 'Complete catalog of chicory products for B2B buyers'
    },
    {
      icon: Info,
      title: 'About Us',
      path: '/about',
      description: 'Company profile, certifications, and manufacturing capabilities'
    },
    {
      icon: FileText,
      title: 'Industry Blog',
      path: '/blog',
      description: 'Industry insights, market analysis, and chicory processing expertise'
    },
    {
      icon: MessageSquare,
      title: 'Contact Us',
      path: '/contact',
      description: 'Business inquiries, quotes, and direct contact information'
    }
  ];

  const productPages = [
    {
      title: 'Raw Chicory Roots',
      path: '/products/raw-chicory-roots',
      category: 'Raw Materials'
    },
    {
      title: 'Hand Cut Chicory Roots',
      path: '/products/hand-cut-chicory-roots',
      category: 'Processed Raw'
    },
    {
      title: 'Roasted Chicory Cubes (Dark Roast)',
      path: '/products/roasted-chicory-cubes-dark-roast',
      category: 'Roasted Products'
    },
    {
      title: 'Roasted Chicory Cubes (Light Roast)',
      path: '/products/roasted-chicory-cubes-light-roast',
      category: 'Roasted Products'
    },
    {
      title: 'Dried Chicory Cubes',
      path: '/products/dried-chicory-cubes',
      category: 'Dried Products'
    },
    {
      title: 'Liquid Chicory Extract',
      path: '/products/liquid-chicory-extract',
      category: 'Extracts'
    },
    {
      title: 'Roasted Chicory Granules',
      path: '/products/roasted-chicory-granules',
      category: 'Granulated Products'
    },
    {
      title: 'Roasted Chicory Powder',
      path: '/products/roasted-chicory-powder',
      category: 'Powder Products'
    }
  ];

  const utilityPages = [
    {
      title: 'Site Map',
      path: '/sitemap',
      description: 'Complete website navigation structure'
    },
    {
      title: 'Privacy Policy',
      path: '/privacy',
      description: 'Data privacy and website usage policies'
    }
  ];

  const productCategories = [
    ...new Set(productPages.map(product => product.category))
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Site Map</h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            Complete navigation structure of the RSI Chicory website. 
            Find all pages, products, and resources for easy access.
          </p>
        </div>

        <div className="space-y-12">
          
          {/* Main Website Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Home className="h-6 w-6 mr-2" />
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainPages.map((page, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <page.icon className="h-5 w-5 mr-2 text-primary" />
                      <Link 
                        to={page.path} 
                        className="hover:text-primary transition-colors"
                      >
                        {page.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{page.description}</p>
                    <p className="text-xs text-primary mt-2 font-mono">{page.path}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Product Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Package className="h-6 w-6 mr-2" />
              Product Pages
            </h2>
            
            {/* Product Categories */}
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {productPages
                    .filter(product => product.category === category)
                    .map((product, productIndex) => (
                      <Card key={productIndex} className="hover:shadow-card transition-shadow">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-base">
                            <Link 
                              to={product.path} 
                              className="hover:text-primary transition-colors flex items-center"
                            >
                              <Coffee className="h-4 w-4 mr-2 text-primary" />
                              {product.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-primary font-mono">{product.path}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            ))}
          </section>

          {/* Utility Pages */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              Utility Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {utilityPages.map((page, index) => (
                <Card key={index} className="hover:shadow-card transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link 
                        to={page.path} 
                        className="hover:text-primary transition-colors"
                      >
                        {page.title}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{page.description}</p>
                    <p className="text-xs text-primary mt-2 font-mono">{page.path}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Website Structure Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Factory className="h-6 w-6 mr-2" />
              Website Structure Overview
            </h2>
            <Card className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">5</h4>
                    <p className="text-sm text-muted-foreground">Main Pages</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">8</h4>
                    <p className="text-sm text-muted-foreground">Product Pages</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-lg">15+</h4>
                    <p className="text-sm text-muted-foreground">Total Pages</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Quick Navigation</h4>
                  <div className="flex flex-wrap gap-2">
                    <Link to="/" className="text-sm text-primary hover:underline">Home</Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/products" className="text-sm text-primary hover:underline">Products</Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/about" className="text-sm text-primary hover:underline">About</Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/contact" className="text-sm text-primary hover:underline">Contact</Link>
                    <span className="text-muted-foreground">•</span>
                    <Link to="/blog" className="text-sm text-primary hover:underline">Blog</Link>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* SEO Information */}
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Leaf className="h-6 w-6 mr-2" />
              SEO & Accessibility
            </h2>
            <Card className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Search Engine Optimization</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Structured data markup for all product pages</li>
                    <li>• XML sitemap for search engine crawling</li>
                    <li>• Semantic HTML structure throughout</li>
                    <li>• Optimized meta titles and descriptions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Accessibility Features</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• ARIA labels for screen readers</li>
                    <li>• Keyboard navigation support</li>
                    <li>• High contrast color scheme</li>
                    <li>• Responsive design for all devices</li>
                  </ul>
                </div>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;