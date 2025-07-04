
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MessageSquare, Users, Clock, Pin, Plus, Filter } from 'lucide-react';

const Forums = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const forumCategories = [
    {
      id: 1,
      name: "General Discussion",
      description: "General topics and announcements",
      topics: 245,
      posts: 1250,
      lastActivity: "2 minutes ago",
      color: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      name: "Course Help",
      description: "Get help with specific courses",
      topics: 180,
      posts: 890,
      lastActivity: "15 minutes ago",
      color: "bg-green-100 text-green-800"
    },
    {
      id: 3,
      name: "Technical Support",
      description: "Platform and technical issues",
      topics: 95,
      posts: 320,
      lastActivity: "1 hour ago",
      color: "bg-red-100 text-red-800"
    },
    {
      id: 4,
      name: "Study Groups",
      description: "Form and join study groups",
      topics: 67,
      posts: 245,
      lastActivity: "3 hours ago",
      color: "bg-purple-100 text-purple-800"
    }
  ];

  const recentTopics = [
    {
      id: 1,
      title: "Welcome to the new semester!",
      author: "Dr. Sarah Johnson",
      role: "Teacher",
      replies: 45,
      views: 234,
      lastReply: "5 minutes ago",
      isPinned: true,
      category: "General Discussion"
    },
    {
      id: 2,
      title: "Study group for Data Science Fundamentals?",
      author: "Mike Chen",
      role: "Student",
      replies: 12,
      views: 89,
      lastReply: "30 minutes ago",
      isPinned: false,
      category: "Study Groups"
    },
    {
      id: 3,
      title: "Assignment submission issues",
      author: "Lisa Rodriguez",
      role: "Student",
      replies: 8,
      views: 56,
      lastReply: "1 hour ago",
      isPinned: false,
      category: "Technical Support"
    },
    {
      id: 4,
      title: "Tips for effective online learning",
      author: "Prof. David Kim",
      role: "Teacher",
      replies: 23,
      views: 156,
      lastReply: "2 hours ago",
      isPinned: false,
      category: "Course Help"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Discussion Forums</h1>
          <p className="text-gray-600">Connect, discuss, and learn together</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Topic
        </Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search discussions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <Tabs defaultValue="categories" className="space-y-6">
        <TabsList>
          <TabsTrigger value="categories">Categories</TabsTrigger>
          <TabsTrigger value="recent">Recent Topics</TabsTrigger>
          <TabsTrigger value="my-posts">My Posts</TabsTrigger>
        </TabsList>

        <TabsContent value="categories" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {forumCategories.map((category) => (
              <Card key={category.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                    <Badge className={`${category.color} border-0`}>
                      Active
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {category.topics} topics
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {category.posts} posts
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {category.lastActivity}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          {recentTopics.map((topic) => (
            <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {topic.isPinned && <Pin className="h-4 w-4 text-blue-600" />}
                      <h3 className="font-semibold text-lg">{topic.title}</h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span>by <strong>{topic.author}</strong></span>
                      <Badge variant="outline" className="text-xs">
                        {topic.role}
                      </Badge>
                      <span>in {topic.category}</span>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div>{topic.replies} replies</div>
                    <div>{topic.views} views</div>
                    <div className="text-xs">Last: {topic.lastReply}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="my-posts" className="space-y-4">
          <div className="text-center py-12">
            <MessageSquare className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
            <p className="text-gray-600 mb-4">Start participating in discussions to see your posts here</p>
            <Button>Browse Categories</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Forums;
