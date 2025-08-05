import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/Layout/WhatsAppIcon';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  Package, 
  Truck, 
  Award, 
  Clock,
  Scale,
  Coffee,
  Leaf,
  Factory
} from 'lucide-react';

/*
  Product Detail Page for RSI Chicory
  - Comprehensive product information for B2B buyers
  - Technical specifications and applications
  - MOQ, pricing, and contact integration
  - Professional layout following industry standards
*/

const ProductDetail = () => {
  const { productSlug } = useParams();

  // In a real application, this would fetch product data based on the slug
  const productData = {
    'raw-chicory-roots': {
      name: 'Raw Chicory Roots',
      description: 'Premium quality raw chicory roots sourced from our contracted farms in Uttar Pradesh. French seed lineage ensures superior quality and consistency for industrial processing.',
      origin: 'India (French seed lineage)',
      processing: 'Contract farming with strict quality control. Sun-dried and carefully sorted to maintain natural properties.',
      applications: ['Coffee Industry', 'Food Processing', 'Pharmaceutical', 'Natural Health Products'],
      specifications: {
        color: 'Natural brown',
        form: 'Whole roots',
        moisture: '12-14%',
        shelfLife: '24 months',
        packaging: 'PP bags, 25kg/50kg'
      },
      moq: '500 kg',
      pricing: '₹25-35 per kg',
      features: ['Contract farmed', 'Sun dried', 'French seed variety', 'Traceable source']
    },
    'roasted-chicory-cubes-dark-roast': {
      name: 'Roasted Chicory Cubes (Dark Roast)',
      description: 'Dark roasted chicory cubes with rich, intense flavor profile. Perfect for coffee blending and instant coffee production. In-house roasting ensures consistent quality and flavor.',
      origin: 'India',
      processing: 'Precision roasting at controlled temperatures. Cut into uniform cubes for consistent brewing.',
      applications: ['Coffee Manufacturing', 'Instant Coffee Production', 'Beverage Blends', 'Coffee Shop Chains'],
      specifications: {
        color: 'Dark brown',
        form: 'Uniform cubes',
        moisture: '4-6%',
        shelfLife: '18 months',
        packaging: 'PP bags, 25kg/50kg'
      },
      moq: '100 kg',
      pricing: '₹45-60 per kg',
      features: ['Dark roast profile', 'Uniform cubes', 'Rich flavor', 'Instant solubility']
    },
    'liquid-chicory-extract': {
      name: 'Liquid Chicory Extract',
      description: 'Concentrated liquid chicory extract with high solubility and intense flavor. Perfect for beverage manufacturers requiring consistent liquid solutions.',
      origin: 'India',
      processing: 'Advanced extraction process maintaining natural properties. Concentrated for maximum flavor impact.',
      applications: ['Beverage Industry', 'Instant Coffee', 'Liquid Coffee Products', 'Ready-to-drink beverages'],
      specifications: {
        color: 'Dark brown liquid',
        form: 'Concentrated extract',
        concentration: '60-65%',
        shelfLife: '12 months',
        packaging: 'Food grade containers, 25kg/50kg'
      },
      moq: '50 kg',
      pricing: '₹120-180 per kg',
      features: ['High concentration', 'Instant solubility', 'Consistent quality', 'Food grade packaging']
    }
  };

  const product = productData[productSlug as keyof typeof productData] || productData['raw-chicory-roots'];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Button variant="outline" className="mb-8" asChild>
          <Link to="/products">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Product Information */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Product Header */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold">{product.name}</h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <Badge key={index} variant="secondary" className="justify-center py-2">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Origin & Processing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    Origin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.origin}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Factory className="h-5 w-5 mr-2" />
                    Processing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.processing}</p>
                </CardContent>
              </Card>
            </div>

            {/* Applications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coffee className="h-5 w-5 mr-2" />
                  Applications & Uses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.applications.map((app, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="h-2 w-2 bg-primary rounded-full" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="h-5 w-5 mr-2" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                      {index < Object.entries(product.specifications).length - 1 && (
                        <Separator className="mt-2" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Pricing & Contact */}
          <div className="space-y-6">
            
            {/* Pricing Card */}
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Scale className="h-5 w-5 mr-2" />
                  Pricing & MOQ
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Price Range</p>
                    <p className="text-2xl font-bold text-primary">{product.pricing}</p>
                    <p className="text-xs text-muted-foreground">*Bulk discounts available</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Minimum Order Quantity</p>
                    <p className="text-lg font-semibold">{product.moq}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="cta" className="w-full" asChild>
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Request Sample</Link>
                  </Button>
                  <div className="flex justify-center">
                    <WhatsAppIcon showText />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Logistics & Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-success" />
                    <span className="text-sm">Quick turnaround</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Package className="h-4 w-4 text-success" />
                    <span className="text-sm">Export packaging</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-success" />
                    <span className="text-sm">Quality certified</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Direct Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9810550456</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">rsichicory@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-xs">X-19, UPSIDC-IA, GT Rd, Etah, UP 207001</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Raw Chicory Roots', 'Roasted Chicory Powder', 'Dried Chicory Cubes'].map((relatedProduct, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="h-16 flex items-center justify-center mb-2">
                    <Coffee className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-center">{relatedProduct}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/products">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;