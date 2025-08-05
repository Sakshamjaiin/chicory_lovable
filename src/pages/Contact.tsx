import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { WhatsAppIcon } from '@/components/Layout/WhatsAppIcon';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  MessageSquare,
  Send,
  Factory,
  Globe
} from 'lucide-react';

/*
  Contact Us Page for RSI Chicory
  - Comprehensive contact information for B2B inquiries
  - Professional contact form for quotes and samples
  - Multiple contact channels including WhatsApp
  - Business hours and location details
*/

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productInterest: '',
    quantity: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      productInterest: '',
      quantity: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 9810550456'],
      description: 'Direct line for business inquiries'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['rsichicory@gmail.com'],
      description: 'Email for quotes and documentation'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: [
        'X-19, UPSIDC-IA',
        'GT Road, Etah',
        'Uttar Pradesh 207001, India'
      ],
      description: 'Manufacturing facility location'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 9:00 AM - 6:00 PM',
        'Sunday: Closed'
      ],
      description: 'Indian Standard Time (IST)'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Contact RSI Chicory</h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            Ready to discuss your chicory requirements? Our B2B sales team is here to help 
            with bulk pricing, samples, and export documentation. Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageSquare className="h-6 w-6 mr-2" />
                  Business Inquiry Form
                </CardTitle>
                <CardDescription>
                  Fill out this form for bulk quotes, samples, or general business inquiries. 
                  We respond to all B2B inquiries within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        type="text"
                        required
                        value={formData.country}
                        onChange={handleInputChange}
                        placeholder="Your country"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Expected Quantity</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        type="text"
                        value={formData.quantity}
                        onChange={handleInputChange}
                        placeholder="e.g., 5 tons/month"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productInterest">Product Interest</Label>
                    <Input
                      id="productInterest"
                      name="productInterest"
                      type="text"
                      value={formData.productInterest}
                      onChange={handleInputChange}
                      placeholder="Which chicory products are you interested in?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your requirements, including intended use, packaging preferences, and any specific quality requirements..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" variant="cta" size="lg" className="w-full">
                    <Send className="h-5 w-5 mr-2" />
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Contact</CardTitle>
                <CardDescription>
                  For immediate assistance, use these direct contact methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <WhatsAppIcon showText size="lg" />
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Sales WhatsApp</p>
                  <p className="font-medium">+91 9810550456</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            {contactInfo.map((contact, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <contact.icon className="h-5 w-5 mr-2" />
                    {contact.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {contact.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="font-medium">{detail}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {contact.description}
                  </p>
                </CardContent>
              </Card>
            ))}

            {/* Additional Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Factory className="h-5 w-5 mr-2" />
                  Our Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span className="text-sm">Bulk Supply & Wholesale</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span className="text-sm">Custom Processing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span className="text-sm">Export Documentation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span className="text-sm">Quality Certification</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary rounded-full" />
                  <span className="text-sm">Logistics Support</span>
                </div>
              </CardContent>
            </Card>

            {/* Export Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  Export Markets
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  We serve B2B clients worldwide with proper export documentation:
                </p>
                <div className="space-y-1 text-sm">
                  <p>• FSSAI Certified</p>
                  <p>• APEDA Registered</p>
                  <p>• IEC Code: Available</p>
                  <p>• Export Packaging</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="p-8 bg-secondary/30">
            <CardTitle className="text-2xl mb-4">
              Need Immediate Assistance?
            </CardTitle>
            <CardDescription className="text-base mb-6">
              Our sales team is ready to help with your chicory requirements. 
              Contact us directly for faster response.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="business" size="lg">
                <Phone className="h-5 w-5 mr-2" />
                Call: +91 9810550456
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="h-5 w-5 mr-2" />
                Email: rsichicory@gmail.com
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;