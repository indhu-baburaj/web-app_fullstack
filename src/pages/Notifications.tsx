
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Bell, 
  CheckCircle2,
  Settings
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import StudentNotifications from '@/components/notifications/StudentNotifications';
import TeacherNotifications from '@/components/notifications/TeacherNotifications';

const Notifications = () => {
  const { user } = useAuth();
  
  // Mock unread count - in a real app this would come from the notification data
  const unreadCount = user?.role === 'teacher' ? 3 : 2;

  const getRoleSpecificTitle = () => {
    switch (user?.role) {
      case 'teacher':
        return 'Teaching Notifications';
      case 'admin':
        return 'Admin Notifications';
      default:
        return 'Student Notifications';
    }
  };

  const getRoleSpecificDescription = () => {
    switch (user?.role) {
      case 'teacher':
        return 'Stay updated with student submissions, questions, and course activities';
      case 'admin':
        return 'Monitor system activities and administrative tasks';
      default:
        return 'Stay updated with your courses, assignments, and announcements';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Bell className="h-8 w-8" />
            {getRoleSpecificTitle()}
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2">
                {unreadCount}
              </Badge>
            )}
          </h1>
          <p className="text-gray-600">{getRoleSpecificDescription()}</p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto">
          <Settings className="h-4 w-4 mr-2" />
          Notification Settings
        </Button>
      </div>

      {/* Role-specific notifications */}
      {user?.role === 'teacher' ? (
        <TeacherNotifications />
      ) : (
        <StudentNotifications />
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
          <CardDescription>Manage your notification preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Mark All as Read
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Notification Preferences
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Notifications;
