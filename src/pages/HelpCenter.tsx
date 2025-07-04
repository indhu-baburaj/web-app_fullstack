
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  MessageCircle, 
  HelpCircle, 
  Book, 
  Video, 
  FileText, 
  Send,
  Bot,
  User,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, type: 'bot', message: 'Hello! I\'m here to help you with any questions about WAcademy. How can I assist you today?' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "How do I enroll in a course?",
      answer: "To enroll in a course, browse our course catalog, select the course you're interested in, and click the 'Enroll Now' button. You'll need to be logged in to your account.",
      category: "enrollment"
    },
    {
      id: 2,
      question: "Can I download course materials?",
      answer: "Yes, most course materials including PDFs, slides, and reference documents can be downloaded from the course resources section.",
      category: "courses"
    },
    {
      id: 3,
      question: "How do I submit assignments?",
      answer: "Navigate to the Assignments page, select the assignment you want to submit, upload your files, and click 'Submit'. Make sure to submit before the deadline.",
      category: "assignments"
    },
    {
      id: 4,
      question: "What if I forget my password?",
      answer: "Click on 'Forgot Password' on the login page and enter your email address. You'll receive a reset link in your email within a few minutes.",
      category: "account"
    },
    {
      id: 5,
      question: "How can I track my progress?",
      answer: "Your learning progress is available on your Dashboard. You can see completion percentages, grades, and upcoming deadlines for all your enrolled courses.",
      category: "progress"
    },
    {
      id: 6,
      question: "Can I access courses on mobile devices?",
      answer: "Yes, W is fully responsive and works on all devices including smartphones and tablets. You can access all features through your mobile browser.",
      category: "technical"
    }
  ];

  const guides = [
    {
      id: 1,
      title: "Getting Started with WAcademy",
      description: "Complete guide for new users",
      type: "guide",
      readTime: "5 min",
      icon: Book
    },
    {
      id: 2,
      title: "How to Navigate Your Dashboard",
      description: "Learn to use your student dashboard effectively",
      type: "video",
      readTime: "3 min",
      icon: Video
    },
    {
      id: 3,
      title: "Assignment Submission Guide",
      description: "Step-by-step instructions for submitting work",
      type: "guide",
      readTime: "4 min",
      icon: FileText
    },
    {
      id: 4,
      title: "Discussion Forum Best Practices",
      description: "How to engage effectively in course discussions",
      type: "guide",
      readTime: "6 min",
      icon: MessageCircle
    }
  ];

  const quickActions = [
    { title: "Reset Password", description: "Change your account password", action: "password" },
    { title: "Course Enrollment", description: "Get help with course registration", action: "enrollment" },
    { title: "Technical Support", description: "Report technical issues", action: "technical" },
    { title: "Billing Questions", description: "Questions about payments", action: "billing" }
  ];

  const sendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = { id: Date.now(), type: 'user', message: newMessage };
      setChatMessages([...chatMessages, userMessage]);
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = { 
          id: Date.now() + 1, 
          type: 'bot', 
          message: 'Thank you for your question! I\'m processing your request. For complex issues, please consider contacting our support team directly.' 
        };
        setChatMessages(prev => [...prev, botResponse]);
      }, 1000);
      
      setNewMessage('');
    }
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Find answers to common questions, browse our guides, or chat with our AI assistant
        </p>
      </div>

      {/* Search */}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search for help..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 text-center">
              <h3 className="font-medium mb-2">{action.title}</h3>
              <p className="text-sm text-gray-600">{action.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="chatbot">AI Assistant</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="space-y-4">
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <Card key={faq.id}>
                <CardContent className="p-6">
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-0 h-auto text-left"
                    onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium">{faq.question}</span>
                    </div>
                    {expandedFaq === faq.id ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>
                  {expandedFaq === faq.id && (
                    <div className="mt-4 pl-8 text-gray-600">
                      <p>{faq.answer}</p>
                      <Badge variant="secondary" className="mt-2">
                        {faq.category}
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guides" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <Card key={guide.id} className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <guide.icon className="h-8 w-8 text-primary mt-1" />
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2">{guide.title}</h3>
                      <p className="text-gray-600 mb-3">{guide.description}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{guide.type}</Badge>
                        <span className="text-sm text-gray-500">{guide.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="chatbot" className="space-y-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Assistant
              </CardTitle>
              <CardDescription>Get instant help with your questions</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto border rounded-lg p-4 mb-4 space-y-4">
                {chatMessages.map((message) => (
                  <div key={message.id} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`flex gap-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.type === 'user' ? 'bg-primary text-white' : 'bg-gray-200'
                      }`}>
                        {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                      </div>
                      <div className={`p-3 rounded-lg ${
                        message.type === 'user' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100'
                      }`}>
                        <p className="text-sm">{message.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-2">
                <Input
                  placeholder="Type your question..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <Button onClick={sendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="space-y-6">
          <div className="max-w-2xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>Can't find what you're looking for? Get in touch with our support team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Email Support</h4>
                    <p className="text-sm text-gray-600 mb-2">support@WAcademy.com</p>
                    <p className="text-xs text-gray-500">Response within 24 hours</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Live Chat</h4>
                    <p className="text-sm text-gray-600 mb-2">Available Mon-Fri, 9AM-6PM EST</p>
                    <Button variant="outline" size="sm">Start Chat</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Submit a Ticket</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Brief description of your issue" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Technical Issue</option>
                    <option>Account Problem</option>
                    <option>Course Question</option>
                    <option>Billing Issue</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea 
                    className="w-full p-2 border rounded-md h-24"
                    placeholder="Please provide detailed information about your issue..."
                  />
                </div>
                <Button>Submit Ticket</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HelpCenter;
