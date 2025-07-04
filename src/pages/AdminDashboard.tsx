
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  AlertCircle, 
  UserCheck, 
  GraduationCap,
  Settings,
  BarChart3,
  Activity,
  Calendar,
  DollarSign,
  Globe,
  Shield,
  FileText,
  Bell
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const stats = [
    { title: "Total Users", value: "2,847", change: "+12%", icon: Users, color: "text-blue-600" },
    { title: "Active Courses", value: "156", change: "+5%", icon: BookOpen, color: "text-green-600" },
    { title: "Course Completion", value: "87%", change: "+3%", icon: TrendingUp, color: "text-purple-600" },
    { title: "Support Tickets", value: "23", change: "-8%", icon: AlertCircle, color: "text-red-600" }
  ];

  const userBreakdown = [
    { role: "Students", count: 2456, percentage: 86, color: "bg-blue-500" },
    { role: "Teachers", count: 234, percentage: 8, color: "bg-green-500" },
    { role: "Admins", count: 157, percentage: 6, color: "bg-purple-500" }
  ];

  const recentActivities = [
    { action: "New course created", user: "Dr. Sarah Johnson", time: "2 hours ago", type: "course", icon: BookOpen },
    { action: "User registration spike", user: "System Alert", time: "4 hours ago", type: "users", icon: Users },
    { action: "Server maintenance completed", user: "IT Team", time: "6 hours ago", type: "system", icon: Settings },
    { action: "New teacher verified", user: "Prof. Michael Chen", time: "8 hours ago", type: "verification", icon: UserCheck }
  ];

  const topCourses = [
    { name: "Introduction to Web Development", students: 1250, completion: 89, revenue: "$45,000" },
    { name: "Data Science Fundamentals", students: 980, completion: 76, revenue: "$38,500" },
    { name: "Digital Marketing Strategy", students: 750, completion: 92, revenue: "$29,200" },
    { name: "Python Programming", students: 650, completion: 84, revenue: "$25,800" }
  ];

  const quickActions = [
    { title: "Manage Courses", description: "Review and manage all courses", icon: BookOpen, link: "/admin/manage-courses", color: "bg-blue-50 text-blue-600" },
    { title: "Manage Teachers", description: "Verify and manage teachers", icon: GraduationCap, link: "/admin/manage-teachers", color: "bg-green-50 text-green-600" },
    { title: "View Reports", description: "Analytics and performance reports", icon: BarChart3, link: "/admin/reports", color: "bg-purple-50 text-purple-600" },
    { title: "System Settings", description: "Configure system settings", icon: Settings, link: "/settings", color: "bg-gray-50 text-gray-600" }
  ];

  const systemHealth = [
    { metric: "Server Status", value: "Operational", status: "good", icon: Globe },
    { metric: "Database Health", value: "Healthy", status: "good", icon: Activity },
    { metric: "Storage Usage", value: "78%", status: "warning", icon: FileText },
    { metric: "Security", value: "Secure", status: "good", icon: Shield }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-1">WAcademy system overview and management portal</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Report
          </Button>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            System Settings
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-full bg-gray-50`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Quick Actions</CardTitle>
          <CardDescription>Common administrative tasks and management tools</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link}>
                <Card className="hover:shadow-md transition-shadow cursor-pointer border-2 hover:border-primary/20">
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center mx-auto mb-3`}>
                      <action.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
                    <p className="text-sm text-gray-600">{action.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Distribution
            </CardTitle>
            <CardDescription>Breakdown of users by role</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {userBreakdown.map((user, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${user.color}`}></div>
                    <span className="font-medium">{user.role}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-semibold">{user.count.toLocaleString()}</span>
                    <span className="text-sm text-gray-600 ml-1">({user.percentage}%)</span>
                  </div>
                </div>
                <Progress value={user.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              System Health
            </CardTitle>
            <CardDescription>Current system status and performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemHealth.map((health, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center gap-3">
                  <health.icon className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">{health.metric}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`font-semibold ${
                    health.status === 'good' ? 'text-green-600' : 
                    health.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {health.value}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${
                    health.status === 'good' ? 'bg-green-500' : 
                    health.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Top Courses Performance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Top Performing Courses
          </CardTitle>
          <CardDescription>Course performance metrics and revenue data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topCourses.map((course, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{course.name}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-600">{course.students} students</span>
                      <span className="text-sm font-medium text-green-600">{course.revenue}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600">Completion Rate</span>
                    <div className="font-semibold">{course.completion}%</div>
                  </div>
                </div>
                <Progress value={course.completion} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Recent System Activities
          </CardTitle>
          <CardDescription>Latest activities and events across the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-center gap-4 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="p-2 rounded-lg bg-gray-100">
                  <activity.icon className="h-4 w-4 text-gray-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">by {activity.user}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
