
import React, { createContext, useContext, useState } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
  department?: string;
  courses?: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role?: string) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
  forgotPassword: (email: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string, password: string, role?: string) => {
    // Mock authentication logic
    if (email && password) {
      let userRole: 'student' | 'teacher' | 'admin' = 'student';
      
      // Determine role based on email or explicit role parameter
      if (email === 'admin@WAcademy.com' || role === 'admin') {
        userRole = 'admin';
      } else if (email.includes('teacher') || role === 'teacher') {
        userRole = 'teacher';
      } else if (role) {
        userRole = role as 'student' | 'teacher' | 'admin';
      }

      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        email,
        role: userRole,
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
        department: userRole === 'teacher' ? 'Computer Science' : undefined,
        courses: userRole === 'teacher' ? ['Web Development', 'Data Science'] : userRole === 'student' ? ['Introduction to Programming'] : undefined
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const forgotPassword = async (email: string): Promise<boolean> => {
    // Mock forgot password functionality
    console.log(`Password reset email sent to: ${email}`);
    return new Promise(resolve => setTimeout(() => resolve(true), 1000));
  };

  React.useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      isAuthenticated: !!user,
      forgotPassword
    }}>
      {children}
    </AuthContext.Provider>
  );
};
