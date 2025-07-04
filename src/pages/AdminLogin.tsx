
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check for admin credentials
    if (loginData.email === 'admin@wacademy.com' && loginData.password === 'admin123') {
      if (login(loginData.email, loginData.password, 'admin')) {
        toast.success('Admin login successful!');
        navigate('/admin-dashboard');
      } else {
        toast.error('Login failed');
      }
    } else {
      toast.error('Invalid admin credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-slate-200">
        <CardHeader className="text-center">
          <Link to="/" className="absolute left-4 top-4">
            <Button variant="ghost" size="sm" className="text-slate-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <Shield className="h-12 w-12 mx-auto mb-4 text-slate-700" />
          <CardTitle className="text-slate-900">Admin Portal</CardTitle>
          <CardDescription>Access administrative dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAdminLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Admin Email</Label>
              <Input 
                id="email" 
                type="email"
                placeholder="Enter admin email"
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
                  placeholder="Enter admin password"
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
            <div className="text-xs text-slate-600 bg-slate-50 p-3 rounded-md">
              <strong>Demo Credentials:</strong><br />
              Email: admin@wacademy.com<br />
              Password: admin123
            </div>
            <Button type="submit" className="w-full bg-slate-800 hover:bg-slate-700">
              <Shield className="h-4 w-4 mr-2" />
              Admin Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
