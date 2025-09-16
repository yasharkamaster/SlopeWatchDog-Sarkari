import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  BookOpen, 
  MessageCircle, 
  Search, 
  Mail, 
  Phone, 
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  Play,
  Pause,
  SkipForward
} from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const faqItems = [
    {
      question: "How do I interpret the risk levels on the dashboard?",
      answer: "Risk levels are color-coded: RED (High) indicates immediate attention required, YELLOW (Medium) suggests monitoring, and GREEN (Low) means normal conditions. The percentage represents the probability of a rockfall event occurring within the specified timeframe."
    },
    {
      question: "What should I do when I receive a high-risk alert?",
      answer: "High-risk alerts require immediate action: 1) Evacuate personnel from the affected zone, 2) Notify emergency response teams, 3) Review sensor data for confirmation, 4) Document the incident for analysis."
    },
    {
      question: "How often is the system updated with new data?",
      answer: "Sensor data is collected every 30 seconds and processed in real-time. The ML model runs predictions every 5 minutes, with comprehensive updates every hour. Critical alerts are processed immediately."
    },
    {
      question: "Can I customize alert thresholds?",
      answer: "Yes, you can adjust alert thresholds in the Settings page under 'Alert Thresholds'. Modify risk level percentages, rainfall limits, temperature thresholds, and strain measurements to match your site-specific requirements."
    },
    {
      question: "How do I export data for external analysis?",
      answer: "Use the Reports page to generate custom reports. Select your desired zones, date range, and export format (PDF, CSV, Excel, JSON). You can also use the Analytics page to export trend data and performance metrics."
    },
    {
      question: "What does 'Model Accuracy' mean on the dashboard?",
      answer: "Model Accuracy represents how well our ML predictions match actual events. 94.2% means the model correctly predicts rockfall risk 94.2% of the time. This includes both true positives (correctly identifying risk) and true negatives (correctly identifying safe conditions)."
    },
    {
      question: "How do I access live drone footage?",
      answer: "Navigate to the Live Footage page, select your desired drone from the dropdown, and click play. You can take snapshots, record footage, and switch between different drone cameras. Ensure the drone is online and has sufficient battery."
    },
    {
      question: "What if a sensor goes offline?",
      answer: "Offline sensors are automatically detected and flagged. The system will: 1) Send an alert notification, 2) Attempt to reconnect, 3) Use backup sensors if available, 4) Adjust risk calculations based on remaining sensors. Check the Settings page for sensor status."
    }
  ];

  const userGuideSteps = [
    {
      title: "Dashboard Overview",
      description: "Learn about the main dashboard components and how to interpret risk indicators",
      duration: "2 minutes",
      icon: HelpCircle
    },
    {
      title: "Risk Map Navigation",
      description: "Understand how to use the interactive risk map and layer controls",
      duration: "3 minutes", 
      icon: BookOpen
    },
    {
      title: "Alert Management",
      description: "Learn how to acknowledge, resolve, and manage alerts effectively",
      duration: "2 minutes",
      icon: AlertTriangle
    },
    {
      title: "Report Generation",
      description: "Create custom reports and export data for analysis",
      duration: "4 minutes",
      icon: MessageCircle
    },
    {
      title: "System Settings",
      description: "Configure data sources, thresholds, and notification preferences",
      duration: "3 minutes",
      icon: Clock
    }
  ];

  const contactMethods = [
    {
      type: "Email Support",
      contact: "support@rockfall-ai.com",
      availability: "24/7",
      responseTime: "< 2 hours",
      icon: Mail
    },
    {
      type: "Phone Support", 
      contact: "+1 (555) 123-4567",
      availability: "Mon-Fri 8AM-6PM",
      responseTime: "Immediate",
      icon: Phone
    },
    {
      type: "Emergency Hotline",
      contact: "+1 (555) 911-ROCK",
      availability: "24/7",
      responseTime: "Immediate",
      icon: AlertTriangle
    }
  ];

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNextStep = () => {
    setCurrentStep((prev) => (prev + 1) % userGuideSteps.length);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => (prev - 1 + userGuideSteps.length) % userGuideSteps.length);
  };

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-mono font-bold">HELP & SUPPORT</h1>
            <p className="text-sm text-muted-foreground font-mono">
              Interactive user guide, FAQ, and contact support
            </p>
          </div>
        </div>

        {/* Interactive User Guide */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              INTERACTIVE USER GUIDE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Current Step */}
              <div className="p-4 bg-accent border border-border rounded">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const Icon = userGuideSteps[currentStep].icon;
                      return <Icon className="h-5 w-5" />;
                    })()}
                    <h3 className="font-mono text-lg font-bold">{userGuideSteps[currentStep].title}</h3>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {userGuideSteps[currentStep].duration}
                  </Badge>
                </div>
                <p className="font-mono text-sm text-muted-foreground mb-4">
                  {userGuideSteps[currentStep].description}
                </p>
                
                {/* Step Navigation */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" onClick={handlePrevStep}>
                      <SkipForward className="h-4 w-4 rotate-180" />
                    </Button>
                    <Button size="sm" variant="outline" onClick={handleNextStep}>
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-muted-foreground">
                      Step {currentStep + 1} of {userGuideSteps.length}
                    </span>
                    <div className="flex gap-1">
                      {userGuideSteps.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full ${
                            index === currentStep ? 'bg-primary' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide Steps Overview */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                {userGuideSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={index}
                      className={`p-3 border border-border rounded cursor-pointer transition-colors ${
                        index === currentStep ? 'bg-accent' : 'hover:bg-muted'
                      }`}
                      onClick={() => setCurrentStep(index)}
                    >
                      <div className="text-center space-y-2">
                        <Icon className="h-6 w-6 mx-auto" />
                        <h4 className="font-mono text-xs font-bold">{step.title}</h4>
                        <p className="font-mono text-xs text-muted-foreground">{step.duration}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ & Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono flex items-center gap-2">
              <HelpCircle className="h-4 w-4" />
              FAQ & TROUBLESHOOTING
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search FAQ..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* FAQ Accordion */}
              <Accordion type="single" collapsible className="w-full">
                {filteredFAQ.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="font-mono text-sm">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="font-mono text-sm text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFAQ.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2" />
                  <p className="font-mono text-sm">No FAQ items found matching your search</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                CONTACT SUPPORT
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="p-3 border border-border rounded">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-5 w-5" />
                        <h4 className="font-mono text-sm font-bold">{method.type}</h4>
                      </div>
                      <div className="space-y-1 text-xs font-mono text-muted-foreground">
                        <div>Contact: {method.contact}</div>
                        <div>Availability: {method.availability}</div>
                        <div>Response Time: {method.responseTime}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-mono flex items-center gap-2">
                <Mail className="h-4 w-4" />
                SEND MESSAGE
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-mono">Subject</label>
                  <Input placeholder="Brief description of your issue" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-mono">Priority</label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">Low</Button>
                    <Button variant="outline" size="sm">Medium</Button>
                    <Button variant="destructive" size="sm">High</Button>
                    <Button variant="destructive" size="sm">Critical</Button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-mono">Message</label>
                  <Textarea 
                    placeholder="Describe your issue in detail. Include any error messages, steps to reproduce, and expected behavior."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-mono">QUICK ACTIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <BookOpen className="h-6 w-6" />
                <span className="font-mono text-xs">User Manual</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <HelpCircle className="h-6 w-6" />
                <span className="font-mono text-xs">Video Tutorials</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <MessageCircle className="h-6 w-6" />
                <span className="font-mono text-xs">Live Chat</span>
              </Button>
              
              <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                <span className="font-mono text-xs">Report Bug</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Help;
