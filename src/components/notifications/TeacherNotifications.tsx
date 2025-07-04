
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  MessageSquare, 
  FileText, 
  Users, 
  AlertCircle,
  CheckCircle2,
  Clock,
  Trash2,
  UserPlus
} from 'lucide-react';

const TeacherNotifications = () => {
  const [activeTab, setActiveTab] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'submission',
      title: 'New Assignment Submitted',
      message: 'Alice Johnson submitted "React Components Assignment"',
      time: '5 minutes ago',
      read: false,
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'submission',
      title: 'Assignment Overdue',
      message: 'Bob Smith has not submitted JavaScript Quiz (2 days overdue)',
      time: '1 hour ago',
      read: false,
      icon: AlertCircle,
      color: 'text-red-600'
    },
    {
      id: 3,
      type: 'message',
      title: 'Student Question',
      message: 'Sarah Davis asked a question in "Web Development Basics"',
      time: '2 hours ago',
      read: false,
      icon: MessageSquare,
      color: 'text-green-600'
    },
    {
      id: 4,
      type: 'enrollment',
      title: 'New Student Enrollment',
      message: '3 new students enrolled in your React course',
      time: '1 day ago',
      read: true,
      icon: UserPlus,
      color: 'text-purple-600'
    },
    {
      id: 5,
      type: 'deadline',
      title: 'Grading Reminder',
      message: '5 assignments need grading before Friday',
      time: '1 day ago',
      read: true,
      icon: Clock,
      color: 'text-orange-600'
    },
    {
      id: 6,
      type: 'system',
      title: 'Course Approved',
      message: 'Your "Advanced JavaScript" course has been approved by admin',
      time: '2 days ago',
      read: true,
      icon: CheckCircle2,
      color: 'text-emerald-600'
    }
  ];

  const getFilteredNotifications = () => {
    switch (activeTab) {
      case 'unread':
        return notifications.filter(n => !n.read);
      case 'submissions':
        return notifications.filter(n => n.type === 'submission');
      case 'students':
        return notifications.filter(n => n.type === 'message' || n.type === 'enrollment');
      default:
        return notifications;
    }
  };

  const markAsRead = (id: number) => {
    console.log(`Marking notification ${id} as read`);
  };

  const deleteNotification = (id: number) => {
    console.log(`Deleting notification ${id}`);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">
            Unread {unreadCount > 0 && `(${unreadCount})`}
          </TabsTrigger>
          <TabsTrigger value="submissions">Submissions</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="space-y-4">
          {getFilteredNotifications().length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Bell className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">No notifications</h3>
                <p className="text-gray-600">You're all caught up!</p>
              </CardContent>
            </Card>
          ) : (
            getFilteredNotifications().map((notification) => (
              <Card key={notification.id} className={`${!notification.read ? 'border-l-4 border-l-blue-500 bg-blue-50/50' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 flex-1">
                      <div className={`p-2 rounded-full bg-gray-100`}>
                        <notification.icon className={`h-4 w-4 ${notification.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-sm">{notification.title}</h4>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.time}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 flex-shrink-0">
                      {!notification.read && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => markAsRead(notification.id)}
                          className="h-8 w-8 p-0"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => deleteNotification(notification.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>
      </Tabs>
    </>
  );
};

export default TeacherNotifications;
