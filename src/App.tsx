import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Logout from "./pages/Logout";
import AdminLogin from "./pages/AdminLogin";
import TeacherLogin from "./pages/TeacherLogin";
import TeacherDashboard from "./pages/TeacherDashboard";
import Blog from "./pages/Blog";
import Forums from "./pages/Forums";
import CoursePage from "./pages/CoursePage";
import AdminDashboard from "./pages/AdminDashboard";
import ManageCourses from "./pages/admin/ManageCourses";
import ManageTeachers from "./pages/admin/ManageTeachers";
import AssignmentsOverview from "./pages/admin/AssignmentsOverview";
import Reports from "./pages/admin/Reports";
import Assignments from "./pages/Assignments";
import Settings from "./pages/Settings";
import HelpCenter from "./pages/HelpCenter";
import Notifications from "./pages/Notifications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/teacher-login" element={<TeacherLogin />} />
            <Route path="/courses" element={<Layout><Courses /></Layout>} />
            <Route path="/course/:id" element={<Layout><CoursePage /></Layout>} />
            <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
            <Route path="/teacher-dashboard" element={<Layout><TeacherDashboard /></Layout>} />
            <Route path="/admin-dashboard" element={<Layout><AdminDashboard /></Layout>} />
            <Route path="/admin/manage-courses" element={<Layout><ManageCourses /></Layout>} />
            <Route path="/admin/manage-teachers" element={<Layout><ManageTeachers /></Layout>} />
            <Route path="/admin/assignments-overview" element={<Layout><AssignmentsOverview /></Layout>} />
            <Route path="/admin/reports" element={<Layout><Reports /></Layout>} />
            <Route path="/assignments" element={<Layout><Assignments /></Layout>} />
            <Route path="/forums" element={<Layout><Forums /></Layout>} />
            <Route path="/notifications" element={<Layout><Notifications /></Layout>} />
            <Route path="/profile" element={<Layout><Profile /></Layout>} />
            <Route path="/settings" element={<Layout><Settings /></Layout>} />
            <Route path="/blog" element={<Layout><Blog /></Layout>} />
            <Route path="/help" element={<Layout><HelpCenter /></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
