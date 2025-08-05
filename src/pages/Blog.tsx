import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WhatsAppIcon } from '@/components/Layout/WhatsAppIcon';
import { 
  Calendar, 
  User, 
  ArrowRight,
  Coffee,
  TrendingUp,
  Globe,
  Factory,
  Leaf
} from 'lucide-react';

/*
  Blog Page for RSI Chicory
  - B2B focused industry content and insights
  - Chicory processing, export trends, and market analysis
  - Professional blog design separate from product pages
  - Educational content for business stakeholders
*/

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
  readTime: string;
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'Chicory Export Opportunities in Global Coffee Markets 2025',
      excerpt: 'Analyzing the growing demand for chicory products in international coffee processing and the export opportunities for Indian manufacturers.',
      content: '',
      author: 'RSI Chicory Team',
      date: '2025-01-15',
      category: 'Market Analysis',
      tags: ['Export', 'Coffee Industry', 'Global Markets'],
      featured: true,
      readTime: '8 min read'
    },
    {
      id: '2',
      title: 'Quality Standards in Chicory Processing: FSSAI and APEDA Guidelines',
      excerpt: 'Understanding the essential quality standards and certifications required for chicory manufacturing and export in India.',
      content: '',
      author: 'Quality Team',
      date: '2025-01-10',
      category: 'Quality Assurance',
      tags: ['FSSAI', 'APEDA', 'Quality Control'],
      featured: false,
      readTime: '6 min read'
    },
    {
      id: '3',
      title: 'Contract Farming: Ensuring Consistent Chicory Supply Chain',
      excerpt: 'How contract farming partnerships with local farmers create a reliable supply chain for industrial chicory processing.',
      content: '',
      author: 'Supply Chain Team',
      date: '2025-01-05',
      category: 'Supply Chain',
      tags: ['Contract Farming', 'Supply Chain', 'Agriculture'],
      featured: true,
      readTime: '7 min read'
    },
    {
      id: '4',
      title: 'Roasting Techniques: Dark vs Light Roast Chicory for Different Applications',
      excerpt: 'Technical analysis of roasting methods and their impact on flavor profiles for various industrial applications.',
      content: '',
      author: 'Production Team',
      date: '2024-12-28',
      category: 'Processing',
      tags: ['Roasting', 'Processing', 'Technical'],
      featured: false,
      readTime: '5 min read'
    },
    {
      id: '5',
      title: 'Liquid Chicory Extract: Manufacturing and Applications in Beverage Industry',
      excerpt: 'Comprehensive guide to liquid chicory extract production and its growing applications in the global beverage industry.',
      content: '',
      author: 'Technical Team',
      date: '2024-12-20',
      category: 'Product Focus',
      tags: ['Liquid Extract', 'Beverage Industry', 'Manufacturing'],
      featured: false,
      readTime: '9 min read'
    },
    {
      id: '6',
      title: 'Sustainability in Chicory Farming: Environmental and Economic Benefits',
      excerpt: 'Exploring how sustainable chicory farming practices benefit both the environment and rural economic development.',
      content: '',
      author: 'Sustainability Team',
      date: '2024-12-15',
      category: 'Sustainability',
      tags: ['Sustainability', 'Environment', 'Rural Development'],
      featured: true,
      readTime: '6 min read'
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const featuredPosts = blogPosts.filter(post => post.featured);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ComponentType<{ className?: string }> } = {
      'Market Analysis': TrendingUp,
      'Quality Assurance': Factory,
      'Supply Chain': Globe,
      'Processing': Coffee,
      'Product Focus': Leaf,
      'Sustainability': Leaf
    };
    return icons[category] || Coffee;
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold">Industry Insights</h1>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto">
            Stay informed with the latest trends, analysis, and insights in the chicory industry. 
            Expert perspectives on processing, export markets, and B2B opportunities.
          </p>
        </div>

        {/* Featured Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredPosts.slice(0, 3).map((post) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <Card key={post.id} className="group hover:shadow-card transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CategoryIcon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read More <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Categories Filter */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Browse by Category</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-sm px-4 py-2 cursor-pointer hover:bg-accent">
              All Articles
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
        </section>

        {/* All Blog Posts */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <Card key={post.id} className="group hover:shadow-card transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CategoryIcon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-sm">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Read Article <ArrowRight className="h-3 w-3 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Subscribe to our industry newsletter for the latest chicory market trends, 
            processing innovations, and export opportunities delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <div className="flex-1">
              <input 
                type="email" 
                placeholder="Enter your business email"
                className="w-full px-4 py-3 rounded-md text-foreground bg-background border-0 focus:ring-2 focus:ring-accent"
              />
            </div>
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="mt-16 text-center">
          <Card className="p-8 bg-secondary/30">
            <CardTitle className="text-2xl mb-4">
              Ready to Discuss Your Chicory Requirements?
            </CardTitle>
            <CardDescription className="text-base mb-6">
              Our B2B experts are here to help with bulk orders, custom processing, 
              and export solutions. Contact us today.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Contact Sales Team</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/products">View Products</Link>
              </Button>
              <WhatsAppIcon showText size="lg" />
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Blog;