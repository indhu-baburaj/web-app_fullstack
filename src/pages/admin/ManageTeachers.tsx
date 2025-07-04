
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Mail, 
  Phone,
  GraduationCap,
  Calendar
} from 'lucide-react';

const ManageTeachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@WAcademy.com",
      phone: "+1 (555) 123-4567",
      department: "Computer Science",
      courses: ["Web Development", "JavaScript Advanced"],
      students: 1250,
      experience: "8 years",
      status: "active",
      joinDate: "2020-01-15",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      email: "michael.chen@WAcademy.com",
      phone: "+1 (555) 234-5678",
      department: "Data Science",
      courses: ["Data Science Fundamentals", "Machine Learning"],
      students: 980,
      experience: "12 years",
      status: "active",
      joinDate: "2019-08-20",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      email: "lisa.rodriguez@WAcademy.com",
      phone: "+1 (555) 345-6789",
      department: "Marketing",
      courses: ["Digital Marketing", "Social Media Strategy"],
      students: 750,
      experience: "6 years",
      status: "active",
      joinDate: "2021-03-10",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa"
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      email: "james.wilson@WAcademy.com",
      phone: "+1 (555) 456-7890",
      department: "AI/ML",
      courses: ["Machine Learning Basics"],
      students: 120,
      experience: "15 years",
      status: "inactive",
      joinDate: "2022-01-05",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james"
    }
  ];

  const getStatusBadge = (status: string) => {
    return status === 'active' 
      ? <Badge className="bg-green-100 text-green-800">Active</Badge>
      : <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Manage Teachers</h1>
          <p className="text-gray-600">Add, edit, and manage teacher accounts</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Teacher
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold">{teachers.length}</div>
            <div className="text-sm text-gray-600">Total Teachers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <GraduationCap className="h-8 w-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold">{teachers.filter(t => t.status === 'active').length}</div>
            <div className="text-sm text-gray-600">Active Teachers</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="h-8 w-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold">2</div>
            <div className="text-sm text-gray-600">New This Month</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 mx-auto mb-2 text-orange-600" />
            <div className="text-2xl font-bold">3,100</div>
            <div className="text-sm text-gray-600">Total Students</div>
          </CardContent>
        </Card>
      </div>

      {/* Teachers List */}
      <Card>
        <CardHeader>
          <CardTitle>All Teachers</CardTitle>
          <CardDescription>Manage teacher accounts and assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={teacher.avatar} alt={teacher.name} />
                    <AvatarFallback>{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{teacher.name}</h3>
                      {getStatusBadge(teacher.status)}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Mail className="h-3 w-3" />
                        {teacher.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="h-3 w-3" />
                        {teacher.phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mt-1">
                      <span>{teacher.department}</span>
                      <span>{teacher.courses.length} courses</span>
                      <span>{teacher.students} students</span>
                      <span>{teacher.experience} experience</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
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

export default ManageTeachers;
