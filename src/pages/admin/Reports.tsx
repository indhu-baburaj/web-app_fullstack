
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Download, 
  Calendar,
  Users,
  BookOpen,
  Award
} from 'lucide-react';

const Reports = () => {
  const coursePerformance = [
    { name: "Web Development", students: 120, completion: 85, avgGrade: 87, satisfaction: 4.6 },
    { name: "Data Science", students: 98, completion: 78, avgGrade: 82, satisfaction: 4.4 },
    { name: "Digital Marketing", students: 75, completion: 92, avgGrade: 89, satisfaction: 4.8 },
    { name: "Python Programming", students: 65, completion: 88, avgGrade: 85, satisfaction: 4.5 }
  ];

  const teacherActivity = [
    { name: "Dr. Sarah Johnson", courses: 3, students: 285, avgRating: 4.7, responseTime: "2 hours" },
    { name: "Prof. Michael Chen", courses: 2, students: 165, avgRating: 4.5, responseTime: "4 hours" },
    { name: "Lisa Rodriguez", courses: 2, students: 150, avgRating: 4.8, responseTime: "1 hour" },
    { name: "Dr. James Wilson", courses: 1, students: 65, avgRating: 4.3, responseTime: "6 hours" }
  ];

  const engagementMetrics = [
    { metric: "Daily Active Users", value: "1,247", change: "+12%", trend: "up" },
    { metric: "Avg. Session Duration", value: "45 min", change: "+8%", trend: "up" },
    { metric: "Course Completion Rate", value: "87%", change: "+5%", trend: "up" },
    { metric: "Student Satisfaction", value: "4.6/5", change: "+0.2", trend: "up" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-600">Comprehensive insights into platform performance</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {engagementMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{metric.metric}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-sm text-green-600">{metric.change} from last month</p>
                </div>
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="courses" className="space-y-6">
        <TabsList>
          <TabsTrigger value="courses">Course Performance</TabsTrigger>
          <TabsTrigger value="teachers">Teacher Activity</TabsTrigger>
          <TabsTrigger value="students">Student Engagement</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Course Performance Analysis
              </CardTitle>
              <CardDescription>Detailed metrics for all active courses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {coursePerformance.map((course, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold">{course.name}</h3>
                      <span className="text-sm text-gray-600">{course.students} students</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Completion Rate</span>
                          <span>{course.completion}%</span>
                        </div>
                        <Progress value={course.completion} />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Average Grade</span>
                          <span>{course.avgGrade}%</span>
                        </div>
                        <Progress value={course.avgGrade} />
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Satisfaction</span>
                          <span>{course.satisfaction}/5</span>
                        </div>
                        <Progress value={(course.satisfaction / 5) * 100} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teachers" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Teacher Activity Report
              </CardTitle>
              <CardDescription>Performance metrics for all teaching staff</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {teacherActivity.map((teacher, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{teacher.name}</h3>
                      <div className="flex gap-4 text-sm text-gray-600 mt-1">
                        <span>{teacher.courses} courses</span>
                        <span>{teacher.students} students</span>
                        <span>Avg response: {teacher.responseTime}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="font-semibold">{teacher.avgRating}</span>
                      </div>
                      <span className="text-sm text-gray-600">Rating</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <PieChart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Student Engagement Analytics</h3>
                <p className="text-gray-600">Detailed student behavior and engagement patterns</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-8">
                <TrendingUp className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Financial Reports</h3>
                <p className="text-gray-600">Revenue, enrollment trends, and financial analytics</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;
