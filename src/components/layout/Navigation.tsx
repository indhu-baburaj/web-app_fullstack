import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Book, User, MessageSquare, Calendar, FileText, LogOut, Shield, GraduationCap, Users, BarChart3, Menu, X, Bell, Settings, HelpCircle } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Navigation = () => {
  const location = useLocation();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const studentNavItems = [
    { path: '/dashboard', label: 'Home', icon: Home },
    { path: '/courses', label: 'Courses', icon: Book },
    { path: '/assignments', label: 'Assignments', icon: FileText },
    { path: '/forums', label: 'Forums', icon: MessageSquare },
    { path: '/notifications', label: 'Notifications', icon: Bell },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/help', label: 'Help', icon: HelpCircle },
  ];

  const teacherNavItems = [
    { path: '/teacher-dashboard', label: 'Home', icon: Home },
    { path: '/notifications', label: 'Notifications', icon: Bell },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/settings', label: 'Settings', icon: Settings },
    { path: '/help', label: 'Help', icon: HelpCircle },
  ];

  const adminNavItems = [
    { path: '/admin-dashboard', label: 'Home', icon: Home },
    { path: '/admin/manage-courses', label: 'Courses', icon: Book },
    { path: '/admin/manage-teachers', label: 'Teachers', icon: GraduationCap },
    { path: '/admin/assignments-overview', label: 'Assignments', icon: FileText },
    { path: '/admin/reports', label: 'Reports', icon: BarChart3 },
    { path: '/notifications', label: 'Notifications', icon: Bell },
    { path: '/profile', label: 'Profile', icon: User },
    { path: '/settings', label: 'Settings', icon: Settings },
  ];

  const getNavItems = () => {
    if (!isAuthenticated) return [];
    
    switch (user?.role) {
      case 'admin':
        return adminNavItems;
      case 'teacher':
        return teacherNavItems;
      case 'student':
      default:
        return studentNavItems;
    }
  };

  const handleLogout = () => {
    logout();
    setIsMobileMenuOpen(false);
    window.location.href = '/logout';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getHomeLink = () => {
    if (!isAuthenticated) return '/';
    
    switch (user?.role) {
      case 'admin':
        return '/admin-dashboard';
      case 'teacher':
        return '/teacher-dashboard';
      case 'student':
      default:
        return '/dashboard';
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to={getHomeLink()} className="flex items-center space-x-2" onClick={closeMobileMenu}>
              <Book className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-lg sm:text-xl font-bold text-gray-900">WAcademy</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          {isAuthenticated && (
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
              {getNavItems().map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-primary bg-primary/10'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="hidden xl:inline">{item.label}</span>
                </Link>
              ))}
            </div>
          )}
          
          {/* Desktop Auth Section */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-xs xl:text-sm text-gray-600 truncate max-w-32 xl:max-w-none">
                  {user?.name} ({user?.role})
                </span>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 xl:mr-2" />
                  <span className="hidden xl:inline">Logout</span>
                </Button>
              </>
            ) : (
              <Link to="/auth">
                <Button variant="outline" size="sm">Login</Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {isAuthenticated ? (
                <>
                  {/* User Info */}
                  <div className="px-3 py-2 text-sm text-gray-600 border-b mb-2">
                    Welcome, {user?.name} ({user?.role})
                  </div>
                  
                  {/* Navigation Links */}
                  {getNavItems().map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={`flex items-center space-x-3 px-3 py-3 rounded-md text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-primary bg-primary/10'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                  
                  {/* Logout Button */}
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 justify-start"
                    onClick={handleLogout}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/auth" onClick={closeMobileMenu}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
