
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Calendar, 
  Clock, 
  FileText, 
  Upload, 
  Download, 
  CheckCircle, 
  AlertCircle,
  Plus,
  Filter,
  Search
} from 'lucide-react';

const Assignments = () => {
  const [userRole] = useState('student'); // This would come from auth context
  const [searchTerm, setSearchTerm] = useState('');

  const assignments = [
    {
      id: 1,
      title: "HTML Structure Project",
      course: "Introduction to Web Development",
      dueDate: "March 25, 2024",
      submittedDate: "March 23, 2024",
      status: "graded",
      grade: "A-",
      totalPoints: 100,
      earnedPoints: 92,
      type: "project",
      description: "Create a complete HTML website structure with semantic elements"
    },
    {
      id: 2,
      title: "Data Analysis Report",
      course: "Data Science Fundamentals",
      dueDate: "March 30, 2024",
      submittedDate: null,
      status: "pending",
      grade: null,
      totalPoints: 75,
      earnedPoints: null,
      type: "report",
      description: "Analyze the provided dataset and create a comprehensive report"
    },
    {
      id: 3,
      title: "Marketing Strategy Quiz",
      course: "Digital Marketing Strategy",
      dueDate: "April 2, 2024",
      submittedDate: null,
      status: "not_started",
      grade: null,
      totalPoints: 50,
      earnedPoints: null,
      type: "quiz",
      description: "Multiple choice quiz on marketing fundamentals"
    },
    {
      id: 4,
      title: "JavaScript Calculator",
      course: "Introduction to Web Development",
      dueDate: "April 5, 2024",
      submittedDate: null,
      status: "in_progress",
      grade: null,
      totalPoints: 120,
      earnedPoints: null,
      type: "project",
      description: "Build a functional calculator using HTML, CSS, and JavaScript"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'graded': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'not_started': return 'bg-gray-100 text-gray-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'graded': return <CheckCircle className="h-4 w-4" />;
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'overdue': return <AlertCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const filteredAssignments = assignments.filter(assignment =>
    assignment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assignment.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            {userRole === 'teacher' ? 'Assignment Management' : 'My Assignments'}
          </h1>
          <p className="text-gray-600">
            {userRole === 'teacher' 
              ? 'Create and manage course assignments' 
              : 'Track your assignment progress and submissions'}
          </p>
        </div>
        {userRole === 'teacher' && (
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Create Assignment
          </Button>
        )}
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search assignments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Select>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="All Courses" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Courses</SelectItem>
              <SelectItem value="web-dev">Web Development</SelectItem>
              <SelectItem value="data-science">Data Science</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Assignments</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="graded">Graded</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4">
            {filteredAssignments.map((assignment) => (
              <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{assignment.title}</h3>
                        <Badge className={getStatusColor(assignment.status)}>
                          <div className="flex items-center gap-1">
                            {getStatusIcon(assignment.status)}
                            {assignment.status.replace('_', ' ')}
                          </div>
                        </Badge>
                      </div>
                      
                      <p className="text-gray-600 mb-3">{assignment.description}</p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          {assignment.course}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          Due: {assignment.dueDate}
                        </span>
                        {assignment.submittedDate && (
                          <span className="flex items-center gap-1">
                            <CheckCircle className="h-4 w-4" />
                            Submitted: {assignment.submittedDate}
                          </span>
                        )}
                      </div>
                      
                      {assignment.grade && (
                        <div className="mt-3 p-3 bg-green-50 rounded-lg">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Grade: {assignment.grade}</span>
                            <span className="text-sm text-gray-600">
                              {assignment.earnedPoints}/{assignment.totalPoints} points
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="ml-6 flex flex-col gap-2">
                      {assignment.status === 'not_started' && (
                        <Button>Start Assignment</Button>
                      )}
                      {assignment.status === 'in_progress' && (
                        <div className="space-y-2">
                          <Button>Continue</Button>
                          <Button variant="outline" size="sm">
                            <Upload className="h-4 w-4 mr-2" />
                            Submit
                          </Button>
                        </div>
                      )}
                      {assignment.status === 'pending' && (
                        <Button variant="outline" disabled>
                          <Clock className="h-4 w-4 mr-2" />
                          Under Review
                        </Button>
                      )}
                      {assignment.status === 'graded' && (
                        <div className="space-y-2">
                          <Button variant="outline" size="sm">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                          <Button variant="ghost" size="sm">
                            View Feedback
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <div className="text-center py-12">
            <Clock className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Pending Assignments</h3>
            <p className="text-gray-600">All your assignments are either completed or not yet started</p>
          </div>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {filteredAssignments
            .filter(a => a.status === 'pending' || a.status === 'graded')
            .map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{assignment.title}</h3>
                      <Badge className={getStatusColor(assignment.status)}>
                        {assignment.status === 'graded' ? 'Graded' : 'Under Review'}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{assignment.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-600">
                      <span>{assignment.course}</span>
                      <span>Submitted: {assignment.submittedDate}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="graded" className="space-y-4">
          {filteredAssignments
            .filter(a => a.status === 'graded')
            .map((assignment) => (
            <Card key={assignment.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{assignment.title}</h3>
                      <Badge className="bg-green-100 text-green-800">
                        Grade: {assignment.grade}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{assignment.description}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                      <span>{assignment.course}</span>
                      <span>Submitted: {assignment.submittedDate}</span>
                      <span>{assignment.earnedPoints}/{assignment.totalPoints} points</span>
                    </div>
                  </div>
                  <Button variant="outline">View Feedback</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Assignments;
