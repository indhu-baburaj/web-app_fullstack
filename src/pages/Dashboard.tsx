
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Award, Calendar } from 'lucide-react';

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      progress: 65,
      nextLesson: 'React Hooks Deep Dive',
      dueDate: 'March 20, 2024',
      status: 'in-progress'
    },
    {
      id: 2,
      title: 'Data Science with Python',
      progress: 30,
      nextLesson: 'Data Visualization with Matplotlib',
      dueDate: 'March 25, 2024',
      status: 'in-progress'
    },
    {
      id: 3,
      title: 'Digital Marketing Strategy',
      progress: 100,
      nextLesson: 'Course Completed',
      dueDate: 'Completed',
      status: 'completed'
    },
  ];

  const upcomingAssignments = [
    {
      id: 1,
      title: 'React Portfolio Project',
      course: 'Full-Stack Web Development',
      dueDate: 'March 20, 2024',
      status: 'pending'
    },
    {
      id: 2,
      title: 'Data Analysis Report',
      course: 'Data Science with Python',
      dueDate: 'March 22, 2024',
      status: 'pending'
    },
  ];

  const recentActivity = [
    'Completed "Introduction to Hooks" lesson',
    'Submitted assignment: "JavaScript Fundamentals Quiz"',
    'Joined discussion: "Best Practices in React"',
    'Earned badge: "Web Development Basics"',
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Learning Dashboard</h1>
        <p className="text-xl text-gray-600">Track your progress and stay on top of your studies.</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-gray-600">Active Courses</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold">47h</div>
                <div className="text-sm text-gray-600">Hours Learned</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Award className="h-8 w-8 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-gray-600">Badges Earned</div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div>
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-gray-600">Avg. Progress</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Enrolled Courses */}
        <div>
          <h2 className="text-2xl font-bold mb-6">My Courses</h2>
          <div className="space-y-4">
            {enrolledCourses.map((course) => (
              <Card key={course.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{course.title}</CardTitle>
                    <Badge variant={course.status === 'completed' ? 'default' : 'secondary'}>
                      {course.status === 'completed' ? 'Completed' : 'In Progress'}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="w-full" />
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Next: {course.nextLesson}</div>
                        <div className="text-sm text-gray-600">Due: {course.dueDate}</div>
                      </div>
                      <Button size="sm">Continue</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Upcoming Assignments</h2>
          <div className="space-y-4">
            {upcomingAssignments.map((assignment) => (
              <Card key={assignment.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{assignment.title}</CardTitle>
                  <CardDescription>{assignment.course}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">Due: {assignment.dueDate}</div>
                      <Badge variant="outline" className="mt-1">
                        {assignment.status}
                      </Badge>
                    </div>
                    <Button size="sm">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="border-dashed border-2">
              <CardContent className="p-6 text-center">
                <p className="text-gray-600">No more assignments due this week</p>
                <Button variant="outline" className="mt-2">View All Assignments</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
