import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  FileText, 
  Lock, 
  Eye,
  Mail,
  Phone
} from 'lucide-react';

/*
  Privacy Policy Page for RSI Chicory
  - Comprehensive privacy policy for B2B website
  - Data protection and usage policies
  - Professional compliance information
  - Contact details for privacy inquiries
*/

const Privacy = () => {
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Business contact information including company name, contact person details, email addresses, and phone numbers provided through our contact forms and business inquiries.",
        "Technical information such as IP addresses, browser type, device information, and website usage patterns collected automatically when you visit our website.",
        "Business communication records including emails, phone calls, and WhatsApp messages related to product inquiries, quotes, and business transactions.",
        "Product preference data and purchase history for existing B2B customers to improve our service quality and product recommendations."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Processing business inquiries and providing quotes for our chicory products and services.",
        "Communicating with potential and existing B2B customers regarding product availability, pricing, and order status.",
        "Improving our website functionality and user experience based on usage analytics and feedback.",
        "Maintaining business records and complying with legal and regulatory requirements.",
        "Sending relevant industry updates and product information to interested business contacts (with consent)."
      ]
    },
    {
      icon: Lock,
      title: "Data Protection & Security",
      content: [
        "We implement industry-standard security measures to protect your personal and business information from unauthorized access, disclosure, or misuse.",
        "All sensitive business communications are encrypted using SSL/TLS protocols during transmission.",
        "Access to customer data is restricted to authorized personnel only and is used strictly for legitimate business purposes.",
        "We regularly review and update our security practices to maintain the highest standards of data protection.",
        "Business data is stored securely and retained only for as long as necessary for legitimate business purposes or as required by law."
      ]
    },
    {
      icon: Shield,
      title: "Data Sharing & Third Parties",
      content: [
        "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
        "Business information may be shared with trusted service providers (logistics, payment processors) strictly for order fulfillment and business operations.",
        "We may disclose information when required by law, regulation, or legal process, or to protect our rights and interests.",
        "In case of business merger or acquisition, customer data may be transferred as part of business assets with continued protection under this privacy policy."
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-6 max-w-4xl">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-lg lg:text-xl text-muted-foreground">
            RSI Chicory is committed to protecting your privacy and handling your data responsibly. 
            This policy explains how we collect, use, and safeguard your information.
          </p>
          <p className="text-sm text-muted-foreground">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <Shield className="h-6 w-6 mr-2" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              RS Impex (RSI Chicory) operates as a B2B manufacturer and supplier of chicory products. 
              We understand the importance of protecting the privacy and confidentiality of our business 
              partners, customers, and website visitors.
            </p>
            <p className="text-muted-foreground">
              This Privacy Policy outlines our practices regarding the collection, use, and protection 
              of information when you use our website, contact our sales team, or engage in business 
              transactions with us. By using our services, you agree to the collection and use of 
              information in accordance with this policy.
            </p>
          </CardContent>
        </Card>

        {/* Main Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <section.icon className="h-5 w-5 mr-2 text-primary" />
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cookies and Tracking */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Cookies and Website Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Our website uses cookies and similar tracking technologies to enhance your browsing 
              experience and analyze website traffic. These technologies help us understand how 
              visitors interact with our site and improve our services.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold">Types of cookies we use:</h4>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    <strong>Essential cookies:</strong> Required for basic website functionality
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    <strong>Analytics cookies:</strong> Help us understand website usage and performance
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2" />
                  <span className="text-muted-foreground">
                    <strong>Functional cookies:</strong> Remember your preferences and settings
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Shield className="h-5 w-5 mr-2 text-primary" />
              Your Rights and Choices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                You have several rights regarding your personal information:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Access and Update</h4>
                  <p className="text-sm text-muted-foreground">
                    Request access to your personal data and update any inaccurate information.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Data Portability</h4>
                  <p className="text-sm text-muted-foreground">
                    Request a copy of your data in a commonly used, machine-readable format.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Deletion</h4>
                  <p className="text-sm text-muted-foreground">
                    Request deletion of your personal data, subject to legal and business requirements.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Opt-out</h4>
                  <p className="text-sm text-muted-foreground">
                    Unsubscribe from marketing communications at any time.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <Mail className="h-5 w-5 mr-2 text-primary" />
              Privacy Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy, wish to exercise your rights, 
                or have concerns about how we handle your data, please contact us:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">rsichicory@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-sm text-muted-foreground">+91 9810550456</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Mailing Address</p>
                    <div className="text-sm text-muted-foreground">
                      <p>RS Impex (RSI Chicory)</p>
                      <p>X-19, UPSIDC-IA</p>
                      <p>GT Road, Etah</p>
                      <p>Uttar Pradesh 207001, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices, 
              technology, legal requirements, or other factors. We will notify you of any material 
              changes by posting the updated policy on our website with a new "Last Updated" date. 
              We encourage you to review this policy periodically to stay informed about how we 
              protect your information.
            </p>
          </CardContent>
        </Card>

        <Separator className="my-12" />

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground">
          <p>
            This Privacy Policy is effective as of {lastUpdated} and applies to all users of the 
            RSI Chicory website and services. For the most current version, please visit this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;