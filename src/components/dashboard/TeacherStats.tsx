
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, FileText, Award } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
}

const StatCard = ({ title, value, change, icon: Icon, color }: StatCardProps) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-green-600 mt-1">{change}</p>
        </div>
        <div className="p-3 rounded-full bg-gray-100">
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </div>
    </CardContent>
  </Card>
);

const TeacherStats = () => {
  const stats = [
    { title: "Active Courses", value: "5", change: "+1 this month", icon: BookOpen, color: "text-blue-600" },
    { title: "Total Students", value: "247", change: "+12 this week", icon: Users, color: "text-green-600" },
    { title: "Pending Reviews", value: "8", change: "3 urgent", icon: FileText, color: "text-orange-600" },
    { title: "Course Rating", value: "4.8", change: "+0.2 this month", icon: Award, color: "text-purple-600" }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default TeacherStats;
