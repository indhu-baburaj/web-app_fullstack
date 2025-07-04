
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Play, 
  FileText, 
  Download, 
  MessageSquare, 
  Users, 
  Clock, 
  Star,
  CheckCircle,
  Circle,
  Calendar,
  Award
} from 'lucide-react';

const CoursePage = () => {
  const [completedLessons, setCompletedLessons] = useState([1, 2, 4]);

  const courseData = {
    title: "Introduction to Web Development",
    instructor: "Dr. Sarah Johnson",
    rating: 4.8,
    students: 1250,
    duration: "12 weeks",
    level: "Beginner",
    progress: 35,
    description: "Learn the fundamentals of web development including HTML, CSS, JavaScript, and modern frameworks. This comprehensive course will take you from beginner to building your first web applications.",
    objectives: [
      "Master HTML5 and semantic markup",
      "Style websites with CSS3 and responsive design",
      "Add interactivity with JavaScript",
      "Understand modern development tools",
      "Build and deploy web applications"
    ]
  };

  const modules = [
    {
      id: 1,
      title: "Getting Started with HTML",
      lessons: [
        { id: 1, title: "Introduction to HTML", type: "video", duration: "15 min", completed: true },
        { id: 2, title: "HTML Document Structure", type: "video", duration: "20 min", completed: true },
        { id: 3, title: "HTML Elements and Tags", type: "reading", duration: "10 min", completed: false },
        { id: 4, title: "Practice: Creating Your First Page", type: "assignment", duration: "30 min", completed: true }
      ]
    },
    {
      id: 2,
      title: "Styling with CSS",
      lessons: [
        { id: 5, title: "CSS Basics", type: "video", duration: "18 min", completed: false },
        { id: 6, title: "Selectors and Properties", type: "video", duration: "25 min", completed: false },
        { id: 7, title: "Layout and Positioning", type: "reading", duration: "15 min", completed: false },
        { id: 8, title: "Responsive Design", type: "video", duration: "30 min", completed: false }
      ]
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      lessons: [
        { id: 9, title: "Variables and Data Types", type: "video", duration: "22 min", completed: false },
        { id: 10, title: "Functions and Events", type: "video", duration: "28 min", completed: false },
        { id: 11, title: "DOM Manipulation", type: "video", duration: "35 min", completed: false },
        { id: 12, title: "Project: Interactive Calculator", type: "assignment", duration: "60 min", completed: false }
      ]
    }
  ];

  const assignments = [
    {
      id: 1,
      title: "HTML Structure Assignment",
      dueDate: "March 25, 2024",
      status: "submitted",
      grade: "A-"
    },
    {
      id: 2,
      title: "CSS Styling Project",
      dueDate: "April 1, 2024",
      status: "pending",
      grade: null
    },
    {
      id: 3,
      title: "JavaScript Calculator",
      dueDate: "April 8, 2024",
      status: "not_started",
      grade: null
    }
  ];

  const discussions = [
    {
      id: 1,
      title: "Best practices for HTML semantics?",
      author: "John Doe",
      replies: 8,
      lastActivity: "2 hours ago"
    },
    {
      id: 2,
      title: "Struggling with CSS flexbox",
      author: "Jane Smith",
      replies: 12,
      lastActivity: "5 hours ago"
    },
    {
      id: 3,
      title: "JavaScript debugging tips",
      author: "Mike Johnson",
      replies: 6,
      lastActivity: "1 day ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'submitted': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'not_started': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const toggleLessonCompletion = (lessonId: number) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter(id => id !== lessonId));
    } else {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">{courseData.title}</h1>
            <p className="text-blue-100 mb-4">{courseData.description}</p>
            <div className="flex items-center gap-6 mb-4">
              <span className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                {courseData.rating}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                {courseData.students} students
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {courseData.duration}
              </span>
              <Badge variant="secondary">{courseData.level}</Badge>
            </div>
            <p className="text-blue-100">Instructor: {courseData.instructor}</p>
          </div>
          <div className="bg-white/10 rounded-lg p-6">
            <h3 className="font-semibold mb-4">Your Progress</h3>
            <Progress value={courseData.progress} className="mb-2" />
            <p className="text-sm text-blue-100">{courseData.progress}% Complete</p>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completed Lessons</span>
                <span>{completedLessons.length}/12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Assignments</span>
                <span>1/3 Submitted</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList>
          <TabsTrigger value="content">Course Content</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {modules.map((module) => (
            <Card key={module.id}>
              <CardHeader>
                <CardTitle>{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {module.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50">
                      <div className="flex items-center gap-3">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleLessonCompletion(lesson.id)}
                          className="p-0 h-auto"
                        >
                          {completedLessons.includes(lesson.id) ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-400" />
                          )}
                        </Button>
                        <div className="flex items-center gap-2">
                          {lesson.type === 'video' && <Play className="h-4 w-4 text-blue-600" />}
                          {lesson.type === 'reading' && <FileText className="h-4 w-4 text-green-600" />}
                          {lesson.type === 'assignment' && <Award className="h-4 w-4 text-purple-600" />}
                          <span className="font-medium">{lesson.title}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-600">{lesson.duration}</span>
                        <Button variant="outline" size="sm">
                          {lesson.type === 'video' ? 'Watch' : lesson.type === 'reading' ? 'Read' : 'Start'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="assignments" className="space-y-4">
          {assignments.map((assignment) => (
            <Card key={assignment.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{assignment.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Due: {assignment.dueDate}
                      </span>
                      <Badge className={getStatusColor(assignment.status)}>
                        {assignment.status.replace('_', ' ')}
                      </Badge>
                      {assignment.grade && (
                        <span className="font-medium">Grade: {assignment.grade}</span>
                      )}
                    </div>
                  </div>
                  <Button variant={assignment.status === 'not_started' ? 'default' : 'outline'}>
                    {assignment.status === 'submitted' ? 'View Submission' : 
                     assignment.status === 'pending' ? 'View Details' : 'Start Assignment'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="discussions" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Course Discussions</h2>
            <Button>New Discussion</Button>
          </div>
          {discussions.map((discussion) => (
            <Card key={discussion.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold mb-2">{discussion.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>by {discussion.author}</span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        {discussion.replies} replies
                      </span>
                      <span>Last activity: {discussion.lastActivity}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Join Discussion</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Course Materials</CardTitle>
              <CardDescription>Download additional resources and materials</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Course Syllabus.pdf",
                "HTML Reference Guide.pdf",
                "CSS Cheat Sheet.pdf",
                "JavaScript Basics Slides.pptx",
                "Project Templates.zip"
              ].map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-gray-600" />
                    <span>{resource}</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CoursePage;
