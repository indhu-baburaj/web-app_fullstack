
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Mail, 
  BookOpen,
  TrendingUp,
  Calendar,
  Search
} from 'lucide-react';

const ManageStudents = () => {
  const students = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@email.com",
      enrolledCourses: 3,
      completedCourses: 1,
      totalProgress: 75,
      status: "active",
      joinDate: "2024-01-15",
      lastActive: "2 hours ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=alice"
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@email.com",
      enrolledCourses: 2,
      completedCourses: 2,
      totalProgress: 100,
      status: "active",
      joinDate: "2023-11-20",
      lastActive: "1 day ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=bob"
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol.davis@email.com",
      enrolledCourses: 4,
      completedCourses: 0,
      totalProgress: 45,
      status: "active",
      joinDate: "2024-02-10",
      lastActive: "5 hours ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=carol"
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@email.com",
      enrolledCourses: 1,
      completedCourses: 0,
      totalProgress: 20,
      status: "inactive",
      joinDate: "2024-03-01",
      lastActive: "2 weeks ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=david"
    },
    {
      id: 5,
      name: "Emma Brown",
      email: "emma.brown@email.com",
      enrolledCourses: 5,
      completedCourses: 3,
      totalProgress: 88,
      status: "active",
      joinDate: "2023-09-15",
      lastActive: "30 minutes ago",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <Badge className="bg-green-100 text-green-800">Active</Badge>
      : <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>;
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 60) return "bg-blue-500";
    if (progress >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Students</h1>
          <p className="text-gray-600">View and manage student accounts and progress</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Student
          </Button>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold">{students.length}</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold">{students.filter(s => s.status === 'active').length}</div>
            <div className="text-sm text-gray-600">Active Students</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <BookOpen className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold">{students.reduce((sum, s) => sum + s.completedCourses, 0)}</div>
            <div className="text-sm text-gray-600">Courses Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-gray-600">New This Month</div>
          </CardContent>
        </Card>
      </div>

      {/* Students List */}
      <Card>
        <CardHeader>
          <CardTitle>All Students</CardTitle>
          <CardDescription>Manage student accounts and track their progress</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {students.map((student) => (
              <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{student.name}</h3>
                      {getStatusBadge(student.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {student.email}
                      </span>
                      <span>Joined: {student.joinDate}</span>
                      <span>Last active: {student.lastActive}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Enrolled: </span>
                        <span className="font-medium">{student.enrolledCourses} courses</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Completed: </span>
                        <span className="font-medium">{student.completedCourses} courses</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Progress: </span>
                        <span className="font-medium">{student.totalProgress}%</span>
                      </div>
                    </div>
                    <div className="mt-2">
                      <Progress value={student.totalProgress} className="h-2" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 ml-4">
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="destructive">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ManageStudents;
