
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Online Learning: AI and Personalization",
      excerpt: "Discover how artificial intelligence is revolutionizing education by creating personalized learning experiences...",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2024",
      category: "Technology",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Best Practices for Remote Learning Success",
      excerpt: "Essential tips and strategies for students to excel in virtual learning environments...",
      author: "Prof. Michael Chen",
      date: "March 12, 2024",
      category: "Education",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=300&fit=crop"
    },
    {
      id: 3,
      title: "Building Engagement in Virtual Classrooms",
      excerpt: "Innovative techniques teachers use to keep students engaged during online lectures...",
      author: "Lisa Rodriguez",
      date: "March 10, 2024",
      category: "Teaching",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=300&fit=crop"
    },
    {
      id: 4,
      title: "Assessment Strategies in Digital Learning",
      excerpt: "Exploring new methods of student assessment that work effectively in online environments...",
      author: "Dr. James Wilson",
      date: "March 8, 2024",
      category: "Assessment",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop"
    }
  ];

  const categories = ["All", "Technology", "Education", "Teaching", "Assessment"];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">WAcademy Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest trends, tips, and insights in digital education
        </p>
      </section>

      {/* Search and Filters */}
      <section className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2 flex-wrap">
          {categories.map((category) => (
            <Button key={category} variant="outline" size="sm">
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Featured Post */}
      <section>
        <Card className="overflow-hidden">
          <div className="md:flex">
            <img
              src={blogPosts[0].image}
              alt={blogPosts[0].title}
              className="w-full md:w-1/2 h-64 md:h-auto object-cover"
            />
            <div className="p-8 md:w-1/2">
              <Badge className="mb-4">{blogPosts[0].category}</Badge>
              <h2 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {blogPosts[0].date}
                </span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <Button>
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </section>

      {/* Blog Posts Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(1).map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary/5 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Stay in the Loop</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter for the latest educational insights and updates
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input placeholder="Enter your email" className="flex-1" />
          <Button>Subscribe</Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
