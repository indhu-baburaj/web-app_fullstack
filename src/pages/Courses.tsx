
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Filter, Search, Users, Clock, BookOpen, Star } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'programming', label: 'Programming' },
    { value: 'data-science', label: 'Data Science' },
    { value: 'design', label: 'Design' },
    { value: 'business', label: 'Business' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'ai-ml', label: 'AI & Machine Learning' },
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete Full-Stack Web Development Bootcamp',
      instructor: 'Dr. Sarah Johnson',
      category: 'programming',
      level: 'intermediate',
      duration: '16 weeks',
      students: 2340,
      rating: 4.9,
      price: 299,
      originalPrice: 399,
      description: 'Master modern web development with React, Node.js, MongoDB, and deployment strategies.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop',
      skills: ['React', 'Node.js', 'MongoDB', 'JavaScript'],
      bestseller: true,
    },
    {
      id: 2,
      title: 'Data Science and Machine Learning Masterclass',
      instructor: 'Prof. Michael Chen',
      category: 'data-science',
      level: 'intermediate',
      duration: '14 weeks',
      students: 1890,
      rating: 4.8,
      price: 279,
      originalPrice: 349,
      description: 'Learn Python, statistics, machine learning, and data visualization from scratch.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      skills: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow'],
      new: true,
    },
    {
      id: 3,
      title: 'Advanced UX/UI Design System',
      instructor: 'Emma Wilson',
      category: 'design',
      level: 'advanced',
      duration: '10 weeks',
      students: 1245,
      rating: 4.7,
      price: 249,
      originalPrice: 299,
      description: 'Create scalable design systems and master advanced prototyping techniques.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=250&fit=crop',
      skills: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    },
    {
      id: 4,
      title: 'Digital Marketing and Growth Hacking',
      instructor: 'Lisa Rodriguez',
      category: 'marketing',
      level: 'beginner',
      duration: '8 weeks',
      students: 1567,
      rating: 4.6,
      price: 199,
      originalPrice: 249,
      description: 'Build effective marketing funnels and master SEO, PPC, and social media marketing.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      skills: ['SEO', 'Google Ads', 'Social Media', 'Analytics'],
    },
    {
      id: 5,
      title: 'Cybersecurity Fundamentals',
      instructor: 'Dr. James Park',
      category: 'cybersecurity',
      level: 'beginner',
      duration: '12 weeks',
      students: 967,
      rating: 4.8,
      price: 329,
      originalPrice: 399,
      description: 'Learn ethical hacking, network security, and penetration testing fundamentals.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop',
      skills: ['Network Security', 'Ethical Hacking', 'Risk Assessment', 'Compliance'],
    },
    {
      id: 6,
      title: 'AI and Deep Learning Specialization',
      instructor: 'Dr. Anna Kumar',
      category: 'ai-ml',
      level: 'advanced',
      duration: '18 weeks',
      students: 823,
      rating: 4.9,
      price: 399,
      originalPrice: 499,
      description: 'Master neural networks, deep learning, and build real-world AI applications.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      skills: ['PyTorch', 'Neural Networks', 'Computer Vision', 'NLP'],
      bestseller: true,
    },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'popular':
        return b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Course Catalog</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive collection of expertly crafted courses designed to advance your skills and accelerate your career growth.
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search courses, instructors, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {/* Filters Row */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                <SelectTrigger>
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSortBy('popular');
              }}
            >
              <Filter className="h-4 w-4 mr-2" />
              Clear
            </Button>
          </div>
        </div>
      </Card>

      {/* Results Summary */}
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          Showing {sortedCourses.length} of {courses.length} courses
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCourses.map((course) => (
          <Card key={course.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                {course.bestseller && (
                  <Badge className="bg-orange-500 hover:bg-orange-600">Bestseller</Badge>
                )}
                {course.new && (
                  <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                )}
              </div>
            </div>
            
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="secondary" className="capitalize">
                  {course.category.replace('-', ' ')}
                </Badge>
                <Badge variant="outline" className="capitalize">
                  {course.level}
                </Badge>
              </div>
              <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                {course.title}
              </CardTitle>
              <CardDescription>By {course.instructor}</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600 line-clamp-2">{course.description}</p>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-1">
                {course.skills.slice(0, 3).map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {course.skills.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{course.skills.length - 3} more
                  </Badge>
                )}
              </div>
              
              {/* Course Stats */}
              <div className="grid grid-cols-3 gap-4 py-2 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{course.rating}</span>
                </div>
              </div>
              
              {/* Price and Enroll */}
              <div className="flex justify-between items-center pt-2 border-t">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">${course.price}</span>
                  {course.originalPrice > course.price && (
                    <span className="text-sm text-gray-500 line-through">${course.originalPrice}</span>
                  )}
                </div>
                <Button className="group-hover:bg-primary/90 transition-colors">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Enroll Now
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {sortedCourses.length === 0 && (
        <Card className="p-12 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-xl font-semibold mb-2">No courses found</h3>
          <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
          <Button 
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setSelectedLevel('all');
            }}
          >
            Clear All Filters
          </Button>
        </Card>
      )}
    </div>
  );
};

export default Courses;
