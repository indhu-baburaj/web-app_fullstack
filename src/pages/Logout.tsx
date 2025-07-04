
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogOut, CheckCircle, Home, User, Shield } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Logout = () => {
  const { logout, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Store user role before logout
    if (isAuthenticated && user) {
      setUserRole(user.role);
    }
    
    // Auto-logout when component mounts
    if (isAuthenticated) {
      logout();
    }
  }, [logout, isAuthenticated, user]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleLoginAgain = () => {
    // Navigate to appropriate login page based on previous role
    switch (userRole) {
      case 'admin':
        navigate('/admin-login');
        break;
      case 'teacher':
        navigate('/teacher-login');
        break;
      case 'student':
      default:
        navigate('/auth');
        break;
    }
  };

  const getRoleIcon = () => {
    switch (userRole) {
      case 'admin':
        return <Shield className="h-4 w-4" />;
      case 'teacher':
        return <User className="h-4 w-4" />;
      case 'student':
      default:
        return <User className="h-4 w-4" />;
    }
  };

  const getRoleColor = () => {
    switch (userRole) {
      case 'admin':
        return 'text-red-600';
      case 'teacher':
        return 'text-green-600';
      case 'student':
      default:
        return 'text-blue-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-gray-900">Successfully Logged Out</CardTitle>
          {userRole && (
            <p className={`text-sm ${getRoleColor()} flex items-center justify-center space-x-1 mt-2`}>
              {getRoleIcon()}
              <span>Logged out from {userRole} account</span>
            </p>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              You have been successfully logged out of your WAcademy account. 
            </p>
            <p className="text-sm text-gray-500">
              Thank you for using our platform. Your session has been securely terminated.
            </p>
          </div>
          
          <div className="space-y-3">
            <Button onClick={handleGoHome} className="w-full" size="lg">
              <Home className="h-4 w-4 mr-2" />
              Go to Homepage
            </Button>
            <Button onClick={handleLoginAgain} variant="outline" className="w-full" size="lg">
              <LogOut className="h-4 w-4 mr-2" />
              Login Again
            </Button>
          </div>
          
          <div className="pt-4 border-t text-center">
            <p className="text-xs text-gray-400">
              Need help? Visit our <button className="text-blue-600 hover:underline" onClick={() => navigate('/help')}>Help Center</button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logout;
