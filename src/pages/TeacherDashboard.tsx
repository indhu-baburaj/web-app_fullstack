
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  BookOpen,
  Users,
  FileText,
  Award,
  Clock,
  Settings,
  HelpCircle,
  Bell,
  MessageSquare,
  TrendingUp,
  Calendar,
  CheckCircle2,
  AlertCircle,
  PlusCircle,
  BarChart3
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { 
      title: "Active Courses", 
      value: "5", 
      change: "+1 this month", 
      icon: BookOpen, 
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    { 
      title: "Total Students", 
      value: "247", 
      change: "+12 this week", 
      icon: Users, 
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    { 
      title: "Pending Reviews", 
      value: "8", 
      change: "3 urgent", 
      icon: FileText, 
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    { 
      title: "Course Rating", 
      value: "4.8", 
      change: "+0.2 this month", 
      icon: Award, 
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    }
  ];

  const quickActions = [
    { 
      title: "Create Course", 
      description: "Start a new course",
      icon: PlusCircle, 
      action: () => console.log('Create course'),
      color: "bg-blue-50 hover:bg-blue-100 text-blue-600"
    },
    { 
      title: "Grade Assignments", 
      description: "Review submissions",
      icon: FileText, 
      action: () => console.log('Grade assignments'),
      color: "bg-green-50 hover:bg-green-100 text-green-600"
    },
    { 
      title: "View Analytics", 
      description: "Check performance",
      icon: BarChart3, 
      action: () => console.log('View analytics'),
      color: "bg-purple-50 hover:bg-purple-100 text-purple-600"
    },
    { 
      title: "Message Students", 
      description: "Send announcements",
      icon: MessageSquare, 
      action: () => console.log('Message students'),
      color: "bg-orange-50 hover:bg-orange-100 text-orange-600"
    }
  ];

  const recentActivity = [
    { 
      type: "submission", 
      message: "Alice Johnson submitted React Assignment", 
      time: "2 hours ago", 
      urgent: true,
      icon: FileText
    },
    { 
      type: "enrollment", 
      message: "5 new students enrolled in JavaScript course", 
      time: "4 hours ago", 
      urgent: false,
      icon: Users
    },
    { 
      type: "message", 
      message: "Bob Smith asked a question in Web Dev course", 
      time: "6 hours ago", 
      urgent: false,
      icon: MessageSquare
    },
    { 
      type: "deadline", 
      message: "Node.js Quiz deadline in 2 days", 
      time: "1 day ago", 
      urgent: true,
      icon: Clock
    }
  ];

  const upcomingTasks = [
    { title: "Grade JavaScript Assignments", due: "Today", priority: "high", icon: FileText },
    { title: "Prepare React Quiz", due: "Tomorrow", priority: "medium", icon: PlusCircle },
    { title: "Update Course Material", due: "This Week", priority: "low", icon: BookOpen },
    { title: "Student Progress Review", due: "Next Week", priority: "medium", icon: Users }
  ];

  const courses = [
    { name: "Web Development Fundamentals", students: 45, completion: 78, rating: 4.7 },
    { name: "JavaScript Essentials", students: 38, completion: 85, rating: 4.9 },
    { name: "React for Beginners", students: 52, completion: 65, rating: 4.6 },
    { name: "Node.js Backend", students: 29, completion: 72, rating: 4.8 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name}!
            </h1>
            <p className="text-lg text-gray-600">Here's your teaching overview for today.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => navigate('/notifications')} variant="outline" className="relative">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </Button>
            <Button onClick={() => navigate('/profile')} className="bg-green-600 hover:bg-green-700">
              <Settings className="h-4 w-4 mr-2" />
              Profile Settings
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
            <CardDescription>Common teaching tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-20 flex-col gap-2 border-0 ${action.color} transition-all duration-200`}
                  onClick={action.action}
                >
                  <action.icon className="h-6 w-6" />
                  <div className="text-center">
                    <div className="font-semibold text-sm">{action.title}</div>
                    <div className="text-xs opacity-80">{action.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Course Overview */}
          <div className="lg:col-span-2 space-y-6">
            {/* My Courses */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  My Courses
                </CardTitle>
                <CardDescription>Overview of your active courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{course.name}</h3>
                        <div className="flex items-center gap-4 mt-1">
                          <span className="text-sm text-gray-600">{course.students} students</span>
                          <div className="flex items-center gap-1">
                            <Award className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm font-medium">{course.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-600">Completion</span>
                        <div className="font-semibold">{course.completion}%</div>
                      </div>
                    </div>
                    <Progress value={course.completion} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest updates from your courses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`p-2 rounded-lg ${activity.urgent ? 'bg-red-50' : 'bg-blue-50'}`}>
                      <activity.icon className={`h-4 w-4 ${activity.urgent ? 'text-red-600' : 'text-blue-600'}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                    {activity.urgent && (
                      <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Urgent</span>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Tasks */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Upcoming Tasks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <task.icon className="h-4 w-4 text-gray-600" />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{task.title}</h4>
                      <p className="text-xs text-gray-600">Due: {task.due}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      task.priority === 'high' ? 'bg-red-100 text-red-800' :
                      task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Teaching Progress */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>This Month's Progress</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Assignments Graded</span>
                    <span>28/35</span>
                  </div>
                  <Progress value={80} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Course Completion</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Student Engagement</span>
                    <span>92%</span>
                  </div>
                  <Progress value={92} />
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" onClick={() => navigate('/help')}>
                  <HelpCircle className="h-4 w-4 mr-2" />
                  Help Center
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Support
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
