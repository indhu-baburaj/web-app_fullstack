
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, ArrowLeft, Eye, EyeOff, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const TeacherLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const { login, forgotPassword: resetPassword } = useAuth();
  const navigate = useNavigate();

  const handleTeacherLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (login(loginData.email, loginData.password, 'teacher')) {
        toast.success('Teacher login successful!');
        navigate('/teacher-dashboard');
      } else {
        toast.error('Invalid teacher credentials');
      }
    } catch (error) {
      toast.error('Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await resetPassword(loginData.email);
      toast.success('Password reset email sent!');
      setForgotPassword(false);
    } catch (error) {
      toast.error('Failed to send reset email');
    } finally {
      setIsLoading(false);
    }
  };

  if (forgotPassword) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Button
              variant="ghost"
              onClick={() => setForgotPassword(false)}
              className="absolute left-4 top-4 p-0 h-auto"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-green-600" />
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>Enter your email to receive reset instructions</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your teacher email"
                  value={loginData.email}
                  onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                  required 
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-green-200">
        <CardHeader className="text-center">
          <Link to="/" className="absolute left-4 top-4">
            <Button variant="ghost" size="sm" className="text-green-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <GraduationCap className="h-12 w-12 mx-auto mb-4 text-green-600" />
          <CardTitle className="text-green-900">Teacher Portal</CardTitle>
          <CardDescription>Access your teaching dashboard and manage your profile</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleTeacherLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email"
                placeholder="Enter your email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <Button
              type="button"
              variant="link"
              className="p-0 text-sm text-green-600"
              onClick={() => setForgotPassword(true)}
            >
              Forgot password?
            </Button>
            
            {/* Enhanced Profile Section */}
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <User className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-900">Teacher Features</span>
              </div>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• Access your personal dashboard</li>
                <li>• Manage your teaching profile</li>
                <li>• Upload course materials and assignments</li>
                <li>• Track student progress and engagement</li>
              </ul>
            </div>
            
            <div className="text-xs text-green-600 bg-green-50 p-3 rounded-md">
              <strong>Demo Credentials:</strong><br />
              Email: teacher@WAcademy.com<br />
              Password: teacher123
            </div>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
              <GraduationCap className="h-4 w-4 mr-2" />
              {isLoading ? 'Signing in...' : 'Teacher Login'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherLogin;
