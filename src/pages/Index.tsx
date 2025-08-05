import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { WhatsAppIcon } from '@/components/Layout/WhatsAppIcon';
import { 
  ArrowRight, 
  Factory, 
  Globe, 
  Award, 
  Truck,
  Leaf,
  Coffee,
  Shield
} from 'lucide-react';

/*
  RSI Chicory Home Page - Professional B2B Landing
  - Hero section showcasing industrial chicory expertise
  - Product overview for B2B buyers
  - Company credentials and export capabilities
  - Clear CTAs for business inquiries and samples
*/

const Index = () => {
  const features = [
    {
      icon: Factory,
      title: "Industrial Manufacturing",
      description: "State-of-the-art processing facility with contract farming partnerships"
    },
    {
      icon: Globe,
      title: "Export Ready",
      description: "FSSAI, APEDA, IEC certified for global B2B markets"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Strict quality standards from sourcing to final product"
    },
    {
      icon: Truck,
      title: "Bulk Supply",
      description: "Reliable logistics for wholesale and industrial orders"
    }
  ];

  const productCategories = [
    {
      name: "Raw Chicory Roots",
      description: "Premium quality contract-farmed chicory roots",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Roasted Chicory Products",
      description: "Dark & light roast cubes, granules, and powder",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Liquid Chicory Extract",
      description: "Concentrated extract for beverage manufacturers",
      image: "/api/placeholder/300/200"
    },
    {
      name: "Processed Chicory",
      description: "Hand-cut and dried chicory cubes for food industry",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-secondary/30 to-accent/20 py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Premium <span className="text-primary">Chicory Products</span> for Global Markets
                </h1>
                <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  RS Impex - Established 2025. Leading manufacturer and supplier of 
                  industrial chicory products. From contract farming to export, 
                  serving coffee processors, food manufacturers, and beverage companies worldwide.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/products">
                    View All Products <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Request Sample</Link>
                </Button>
                <WhatsAppIcon showText size="lg" />
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-success" />
                  <span>FSSAI Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-success" />
                  <span>Export Ready</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-success" />
                  <span>APEDA Registered</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-card shadow-card p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Coffee className="h-32 w-32 text-primary mx-auto" />
                  <h3 className="text-2xl font-semibold">Industrial Chicory Specialists</h3>
                  <p className="text-muted-foreground">Etah, Uttar Pradesh, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose RSI Chicory?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our commitment to quality, reliability, and B2B partnerships makes us 
              the preferred chicory supplier for businesses worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Product Range</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive chicory solutions for coffee blending, food manufacturing, 
              and beverage production. All products available in bulk quantities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-card transition-all cursor-pointer">
                <div className="aspect-[4/3] bg-muted rounded-t-lg flex items-center justify-center">
                  <Leaf className="h-16 w-16 text-primary group-hover:scale-110 transition-transform" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/products">View Products</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="business" size="lg" asChild>
              <Link to="/products">
                View All Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Partner with RSI Chicory?
            </h2>
            <p className="text-lg lg:text-xl opacity-90">
              Join leading companies who trust us for their chicory supply needs. 
              Get bulk pricing, samples, and export documentation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Get Bulk Quote</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/contact">Request Sample</Link>
              </Button>
              <div className="flex justify-center">
                <WhatsAppIcon showText size="lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;