
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  CheckCircle, 
  XCircle, 
  Clock,
  Filter
} from 'lucide-react';

const ManageCourses = () => {
  const courses = [
    { 
      id: 1, 
      title: "Introduction to Web Development", 
      instructor: "Dr. Sarah Johnson", 
      students: 1250, 
      status: "approved", 
      category: "Technology",
      duration: "12 weeks",
      created: "2024-01-15"
    },
    { 
      id: 2, 
      title: "Data Science Fundamentals", 
      instructor: "Prof. Michael Chen", 
      students: 980, 
      status: "pending", 
      category: "Data Science",
      duration: "10 weeks",
      created: "2024-02-20"
    },
    { 
      id: 3, 
      title: "Digital Marketing Strategy", 
      instructor: "Lisa Rodriguez", 
      students: 750, 
      status: "approved", 
      category: "Marketing",
      duration: "8 weeks",
      created: "2024-01-30"
    },
    { 
      id: 4, 
      title: "Machine Learning Basics", 
      instructor: "Dr. James Wilson", 
      students: 0, 
      status: "rejected", 
      category: "AI/ML",
      duration: "14 weeks",
      created: "2024-03-01"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filterCourses = (status: string) => {
    if (status === 'all') return courses;
    return courses.filter(course => course.status === status);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Courses</h1>
          <p className="text-gray-600">Review, approve, and manage all courses</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Course
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Courses ({courses.length})</TabsTrigger>
          <TabsTrigger value="approved">Approved ({courses.filter(c => c.status === 'approved').length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({courses.filter(c => c.status === 'pending').length})</TabsTrigger>
          <TabsTrigger value="rejected">Rejected ({courses.filter(c => c.status === 'rejected').length})</TabsTrigger>
        </TabsList>

        {['all', 'approved', 'pending', 'rejected'].map(tab => (
          <TabsContent key={tab} value={tab} className="space-y-4">
            <div className="grid gap-4">
              {filterCourses(tab).map((course) => (
                <Card key={course.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold">{course.title}</h3>
                          {getStatusBadge(course.status)}
                        </div>
                        <p className="text-gray-600 mb-2">Instructor: {course.instructor}</p>
                        <div className="flex gap-4 text-sm text-gray-500 mb-4">
                          <span>{course.students} students enrolled</span>
                          <span>{course.duration}</span>
                          <span>{course.category}</span>
                          <span>Created: {course.created}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit className="h-4 w-4" />
                        </Button>
                        {course.status === 'pending' && (
                          <>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              <CheckCircle className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="destructive">
                              <XCircle className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                        <Button size="sm" variant="destructive">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default ManageCourses;
