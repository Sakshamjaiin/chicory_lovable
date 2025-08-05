import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/Layout/WhatsAppIcon';
import { Coffee, Package, Droplets, Wheat } from 'lucide-react';

/*
  All Products Page for RSI Chicory
  - Complete product catalog for B2B buyers
  - Grid layout with product cards linking to detail pages
  - Professional presentation with MOQ and pricing hints
  - Clear CTA for business inquiries
*/

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  applications: string[];
  form: string;
  priceRange: string;
  moq: string;
  featured: boolean;
}

const Products = () => {
  const products: Product[] = [
    {
      id: '1',
      name: 'Raw Chicory Roots',
      slug: 'raw-chicory-roots',
      description: 'Premium quality raw chicory roots sourced from contract farms. Fresh, sun-dried, and ready for processing.',
      category: 'Raw Materials',
      icon: Wheat,
      applications: ['Coffee Industry', 'Food Processing', 'Pharmaceutical'],
      form: 'Whole Roots',
      priceRange: '₹25-35/kg',
      moq: '500 kg',
      featured: true
    },
    {
      id: '2',
      name: 'Hand Cut Chicory Roots',
      slug: 'hand-cut-chicory-roots',
      description: 'Carefully hand-cut chicory roots maintaining uniform size for consistent processing and roasting.',
      category: 'Processed Raw',
      icon: Wheat,
      applications: ['Coffee Blending', 'Beverage Industry'],
      form: 'Cut Roots',
      priceRange: '₹30-40/kg',
      moq: '250 kg',
      featured: false
    },
    {
      id: '3',
      name: 'Roasted Chicory Cubes (Dark Roast)',
      slug: 'roasted-chicory-cubes-dark-roast',
      description: 'Dark roasted chicory cubes with rich flavor profile. Perfect for coffee blending and instant coffee production.',
      category: 'Roasted Products',
      icon: Coffee,
      applications: ['Coffee Manufacturing', 'Instant Coffee', 'Beverage Blends'],
      form: 'Cubes',
      priceRange: '₹45-60/kg',
      moq: '100 kg',
      featured: true
    },
    {
      id: '4',
      name: 'Roasted Chicory Cubes (Light Roast)',
      slug: 'roasted-chicory-cubes-light-roast',
      description: 'Light roasted chicory cubes with mild flavor. Ideal for delicate coffee blends and specialty beverages.',
      category: 'Roasted Products',
      icon: Coffee,
      applications: ['Premium Coffee', 'Specialty Beverages', 'Food Flavoring'],
      form: 'Cubes',
      priceRange: '₹42-58/kg',
      moq: '100 kg',
      featured: false
    },
    {
      id: '5',
      name: 'Dried Chicory Cubes',
      slug: 'dried-chicory-cubes',
      description: 'Sun-dried chicory cubes without roasting. Natural flavor preserved for diverse food applications.',
      category: 'Dried Products',
      icon: Package,
      applications: ['Food Processing', 'Health Foods', 'Natural Supplements'],
      form: 'Cubes',
      priceRange: '₹35-45/kg',
      moq: '200 kg',
      featured: false
    },
    {
      id: '6',
      name: 'Liquid Chicory Extract',
      slug: 'liquid-chicory-extract',
      description: 'Concentrated liquid chicory extract. High solubility and intense flavor for beverage manufacturers.',
      category: 'Extracts',
      icon: Droplets,
      applications: ['Beverage Industry', 'Instant Coffee', 'Liquid Coffee'],
      form: 'Liquid',
      priceRange: '₹120-180/kg',
      moq: '50 kg',
      featured: true
    },
    {
      id: '7',
      name: 'Roasted Chicory Granules',
      slug: 'roasted-chicory-granules',
      description: 'Fine roasted chicory granules for instant solubility. Perfect for instant coffee and beverage mixes.',
      category: 'Granulated Products',
      icon: Coffee,
      applications: ['Instant Coffee', 'Beverage Mixes', 'Coffee Blends'],
      form: 'Granules',
      priceRange: '₹55-75/kg',
      moq: '100 kg',
      featured: false
    },
    {
      id: '8',
      name: 'Roasted Chicory Powder',
      slug: 'roasted-chicory-powder',
      description: 'Fine roasted chicory powder. Premium quality for coffee blending and food industry applications.',
      category: 'Powder Products',
      icon: Coffee,
      applications: ['Coffee Industry', 'Food Manufacturing', 'Baking Industry'],
      form: 'Fine Powder',
      priceRange: '₹50-70/kg',
      moq: '100 kg',
      featured: true
    }
  ];

  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Our Product Range</h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive chicory solutions for coffee processors, food manufacturers, 
            and beverage companies. All products available in bulk quantities with 
            competitive wholesale pricing.
          </p>
        </div>

        {/* Featured Products Banner */}
        <div className="bg-gradient-card rounded-2xl p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <p className="text-muted-foreground mb-6">
            Our most popular chicory products for B2B buyers
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {products.filter(p => p.featured).map(product => (
              <Badge key={product.id} variant="secondary" className="text-sm px-3 py-1">
                {product.name}
              </Badge>
            ))}
          </div>
        </div>

        {/* Product Categories Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Badge variant="outline" className="text-sm px-4 py-2 cursor-pointer hover:bg-accent">
            All Products
          </Badge>
          {categories.map(category => (
            <Badge 
              key={category} 
              variant="outline" 
              className="text-sm px-4 py-2 cursor-pointer hover:bg-accent"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-card transition-all duration-300 relative">
              {product.featured && (
                <Badge className="absolute top-4 right-4 z-10 bg-business text-business-foreground">
                  Featured
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="h-24 flex items-center justify-center mb-4">
                  <product.icon className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardTitle className="text-lg leading-tight">{product.name}</CardTitle>
                <CardDescription className="text-sm">{product.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Form:</span>
                    <span className="font-medium">{product.form}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price Range:</span>
                    <span className="font-medium text-primary">{product.priceRange}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">MOQ:</span>
                    <span className="font-medium">{product.moq}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">Applications:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.applications.slice(0, 2).map((app, index) => (
                      <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
                        {app}
                      </Badge>
                    ))}
                    {product.applications.length > 2 && (
                      <Badge variant="outline" className="text-xs px-2 py-0.5">
                        +{product.applications.length - 2} more
                      </Badge>
                    )}
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/products/${product.slug}`}>View Details</Link>
                  </Button>
                  <Button variant="business" size="sm" className="w-full" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Need Custom Chicory Solutions?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            We offer custom processing, private labeling, and specialized chicory products 
            for large-scale B2B orders. Contact our sales team for personalized quotes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Get Custom Quote</Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" 
              asChild
            >
              <Link to="/contact">Request Samples</Link>
            </Button>
            <WhatsAppIcon showText size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;