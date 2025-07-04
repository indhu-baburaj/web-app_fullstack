
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, Upload, BarChart3, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    { title: "Create New Course", icon: Plus, action: () => navigate('/create-course') },
    { title: "Upload Materials", icon: Upload, action: () => navigate('/upload-materials') },
    { title: "View Analytics", icon: BarChart3, action: () => navigate('/analytics') },
    { title: "Student Messages", icon: MessageSquare, action: () => navigate('/messages') }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-24 flex-col gap-2 hover:bg-blue-50"
              onClick={action.action}
            >
              <action.icon className="h-6 w-6" />
              <span className="text-sm text-center">{action.title}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
