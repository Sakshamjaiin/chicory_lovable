import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/Layout/WhatsAppIcon';
import { 
  Factory, 
  Globe, 
  Award, 
  Users,
  Leaf,
  Truck,
  Shield,
  MapPin,
  Calendar,
  CheckCircle
} from 'lucide-react';

/*
  About Us Page for RSI Chicory
  - Company profile and establishment details
  - Manufacturing excellence and B2B focus
  - Certifications and compliance information
  - Contract farming model and quality assurance
*/

const About = () => {
  const certifications = [
    {
      name: 'FSSAI',
      description: 'Food Safety and Standards Authority of India certification',
      icon: Shield
    },
    {
      name: 'APEDA',
      description: 'Agricultural and Processed Food Products Export Development Authority',
      icon: Globe
    },
    {
      name: 'IEC',
      description: 'Import Export Code for international trade',
      icon: Truck
    }
  ];

  const capabilities = [
    {
      icon: Factory,
      title: 'State-of-the-Art Manufacturing',
      description: 'Modern processing facility equipped with advanced machinery for consistent quality production'
    },
    {
      icon: Leaf,
      title: 'Contract Farming Model',
      description: 'Direct partnerships with local farmers ensuring traceable, high-quality raw materials'
    },
    {
      icon: Globe,
      title: 'Export Readiness',
      description: 'Comprehensive export documentation and packaging for global B2B markets'
    },
    {
      icon: Users,
      title: 'Local Employment',
      description: 'Supporting the local economy by providing employment opportunities in rural areas'
    }
  ];

  const milestones = [
    {
      year: '2025',
      title: 'Company Establishment',
      description: 'RS Impex established with focus on chicory manufacturing and export'
    },
    {
      year: '2025',
      title: 'Certifications Acquired',
      description: 'Obtained FSSAI, APEDA, and IEC certifications for quality and export compliance'
    },
    {
      year: '2025',
      title: 'Contract Farming Initiative',
      description: 'Launched contract farming program with local farmers in Uttar Pradesh'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">About RSI Chicory</h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            RS Impex - Your trusted partner for premium chicory products. 
            Established in 2025, we are committed to manufacturing excellence, 
            B2B partnerships, and export readiness.
          </p>
        </div>

        {/* Company Overview */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  RS Impex was founded in 2025 with a vision to become a leading 
                  manufacturer and supplier of premium chicory products for global B2B markets. 
                  Based in Etah, Uttar Pradesh, we leverage the region's agricultural 
                  strengths to produce high-quality chicory products.
                </p>
                <p>
                  Our company is built on the foundation of manufacturing excellence, 
                  sustainable practices, and strong B2B partnerships. We focus exclusively 
                  on industrial and wholesale markets, serving coffee processors, 
                  food manufacturers, and beverage companies worldwide.
                </p>
                <p>
                  Through our contract farming model, we ensure complete traceability 
                  and quality control from farm to final product, while supporting 
                  local communities and maintaining strict compliance with international standards.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8">
                <div className="text-center space-y-6">
                  <Factory className="h-24 w-24 text-primary mx-auto" />
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Established 2025</h3>
                    <p className="text-muted-foreground">Etah, Uttar Pradesh, India</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">8+</p>
                      <p className="text-sm text-muted-foreground">Product Lines</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-primary">100%</p>
                      <p className="text-sm text-muted-foreground">B2B Focus</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Established</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">2025</p>
                <p className="text-muted-foreground">Founded with industrial focus</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Etah, UP</p>
                <p className="text-muted-foreground">Strategic location for agriculture</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Business Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">B2B Export</p>
                <p className="text-muted-foreground">Industrial & wholesale focus</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow">
                <CardHeader>
                  <capability.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>{capability.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {capability.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-shadow">
                <CardHeader>
                  <cert.icon className="h-16 w-16 text-success mx-auto mb-4" />
                  <CardTitle className="text-xl">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {cert.description}
                  </CardDescription>
                  <Badge variant="secondary" className="mt-4">Certified</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contract Farming Model */}
        <section className="mb-16">
          <Card className="p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contract Farming Excellence</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Direct Farmer Partnerships</h4>
                      <p className="text-muted-foreground">Long-term contracts with local farmers ensuring consistent supply</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Quality Assurance</h4>
                      <p className="text-muted-foreground">Strict quality standards from seed selection to harvest</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Traceability</h4>
                      <p className="text-muted-foreground">Complete tracking from farm to final product</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-success mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Local Employment</h4>
                      <p className="text-muted-foreground">Supporting rural communities and local economy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Leaf className="h-32 w-32 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2">Sustainable Agriculture</h3>
                <p className="text-muted-foreground">French seed lineage for superior quality</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Company Milestones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Company Milestones</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <Badge variant="secondary" className="text-lg px-3 py-1 mt-1">
                    {milestone.year}
                  </Badge>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with RSI Chicory</h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Join our growing network of B2B partners. Experience our commitment to 
            quality, reliability, and professional service in the chicory industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Contact Our Team</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/products">View Products</Link>
            </Button>
            <WhatsAppIcon showText size="lg" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;