import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Eye, 
  MessageSquare, 
  Clock, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  Users,
  Calendar
} from 'lucide-react';

const AssignmentsOverview = () => {
  const assignments = [
    {
      id: 1,
      title: "JavaScript Functions Assignment",
      course: "Advanced JavaScript",
      teacher: "Dr. Sarah Johnson",
      submissions: 45,
      totalStudents: 67,
      graded: 30,
      pending: 15,
      dueDate: "2024-03-15",
      status: "active"
    },
    {
      id: 2,
      title: "React Components Project",
      course: "React Fundamentals",
      teacher: "Prof. Michael Chen",
      submissions: 38,
      totalStudents: 45,
      graded: 38,
      pending: 0,
      dueDate: "2024-03-10",
      status: "completed"
    },
    {
      id: 3,
      title: "HTML Structure Quiz",
      course: "Web Development",
      teacher: "Lisa Rodriguez",
      submissions: 95,
      totalStudents: 120,
      graded: 60,
      pending: 35,
      dueDate: "2024-03-20",
      status: "active"
    },
    {
      id: 4,
      title: "Database Design Project",
      course: "Database Management",
      teacher: "Dr. James Wilson",
      submissions: 12,
      totalStudents: 25,
      graded: 8,
      pending: 4,
      dueDate: "2024-03-25",
      status: "active"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-blue-100 text-blue-800">Active</Badge>;
      case 'completed':
        return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
      case 'overdue':
        return <Badge className="bg-red-100 text-red-800">Overdue</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getCompletionPercentage = (submissions: number, total: number) => {
    return Math.round((submissions / total) * 100);
  };

  const stats = [
    { title: "Total Assignments", value: assignments.length.toString(), icon: FileText, color: "text-blue-600" },
    { title: "Pending Review", value: assignments.reduce((sum, a) => sum + a.pending, 0).toString(), icon: Clock, color: "text-yellow-600" },
    { title: "Completed", value: assignments.filter(a => a.status === 'completed').length.toString(), icon: CheckCircle, color: "text-green-600" },
    { title: "Total Submissions", value: assignments.reduce((sum, a) => sum + a.submissions, 0).toString(), icon: TrendingUp, color: "text-purple-600" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Assignments Overview</h1>
          <p className="text-gray-600">Monitor all assignments and student submissions</p>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Assignments</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="pending">Pending Review</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Assignments</CardTitle>
              <CardDescription>Overview of all assignments across courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {assignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{assignment.title}</h3>
                        {getStatusBadge(assignment.status)}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                        <span>{assignment.course}</span>
                        <span>By {assignment.teacher}</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Due: {assignment.dueDate}
                        </span>
                      </div>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Submissions: </span>
                          <span className="font-medium">{assignment.submissions}/{assignment.totalStudents}</span>
                          <span className="text-xs text-gray-400 ml-1">
                            ({getCompletionPercentage(assignment.submissions, assignment.totalStudents)}%)
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Graded: </span>
                          <span className="font-medium text-green-600">{assignment.graded}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Pending: </span>
                          <span className="font-medium text-yellow-600">{assignment.pending}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Missing: </span>
                          <span className="font-medium text-red-600">{assignment.totalStudents - assignment.submissions}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button size="sm" variant="outline">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <MessageSquare className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Active Assignments</h3>
                <p className="text-gray-600">Currently active assignments requiring attention</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Completed Assignments</h3>
                <p className="text-gray-600">All completed and graded assignments</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <Clock className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pending Review</h3>
                <p className="text-gray-600">Assignments waiting for teacher review and grading</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AssignmentsOverview;
