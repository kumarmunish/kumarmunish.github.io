import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useTheme } from "./ThemeProvider";
import { useToast } from "@/hooks/use-toast";
import ProfileImage from "./ProfileImage";
import MaerskIcon from '../assets/icons/maersk.png';
import ShuttlIcon from '../assets/icons/shuttl.png';
import TataIcon from '../assets/icons/tata1mg.png';
import FabIcon from '../assets/icons/fabfurnish.png';
import { User, FolderKanban, MailOpen } from 'lucide-react';

import { 
  Moon, 
  Sun, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Trophy,
  Warehouse,
  Bus,
  BarChart3,
  Bot,
  Github,
  Linkedin,
  ExternalLink,
  ChartLine,
  DollarSign,
  Rocket,
  ChevronDown,
  ChevronUp,
  Cloud,
  Database,
  Monitor,
  Terminal,
  Settings,
  Container,
  ShieldCheck,
  Ship,
  Stethoscope,
  Sofa,
  Heart
} from "lucide-react";
import { 
  SiAmazon, 
  SiKubernetes, 
  SiDocker, 
  SiTerraform, 
  SiAnsible, 
  SiGithubactions, 
  SiPython, 
  SiGo, 
  SiGnubash, 
  SiDatadog, 
  SiGrafana, 
  SiPrometheus, 
  SiElasticsearch, 
  SiRedis, 
  SiPostgresql
} from "react-icons/si";

export const MaerskOrgIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={MaerskIcon} alt="Maersk Icon" {...props} />
);

export const ShuttlOrgIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={ShuttlIcon} alt="Shuttl Icon" {...props} />
);

export const TataOrgIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={TataIcon} alt="Tata 1mg Icon" {...props} />
);

export const FabOrgIcon = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <img src={FabIcon} alt="Fabfurnish Icon" {...props} />
);

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [expandedJobs, setExpandedJobs] = useState<{ [key: string]: boolean }>({});

  const handleDownloadZip = async () => {
    try {
      await createPortfolioZip();
      toast({
        title: "Success",
        description: "Portfolio files downloaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download portfolio files",
        variant: "destructive",
      });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const copyToClipboard = async (text: string, message: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "Success",
        description: message,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const toggleJobExpansion = (jobId: string) => {
    setExpandedJobs(prev => ({
      ...prev,
      [jobId]: !prev[jobId]
    }));
  };

  const workExperience = [
    {
      id: "maersk",
      title: "Senior Software Engineer",
      company: "A.P. Moller - Maersk",
      icon: MaerskOrgIcon,
      iconColor: "text-blue-800",
      description: "Global shipping and logistics leader",
      period: "09/2021 - Present",
      location: "Bengaluru, India",
      details: [
        "Designed and implemented GitHub Actions-based CI/CD pipelines, increasing deployment success rate by 40%.",
        "Automated multi-region cloud infrastructure using Terraform and Ansible, reducing setup time by 70%",
        "Managed scalable workloads on AKS, deploying 30+ microservices with high availability and blue-green strategies",
        "Built full-stack observability (Prometheus, Grafana, Loki) improving system visibility and reducing MTTR by 30%",
        "Participated in 24/7 on-call support and led RCAs/postmortems, resulting in a 20% drop in recurring incidents"
      ]
    },
    {
      id: "shuttl-sre",
      title: "Site Reliability Engineer",
      company: "Shuttl",
      icon: ShuttlOrgIcon,
      iconColor: "text-orange-600",
      description: "Employee transportation and mobility platform",
      period: "02/2020 - 08/2021",
      location: "Gurugram, India",
      details: [
        "Deployed and managed containerized infrastructure using Nomad, Consul, Vault, and Terraform.",
        "Set up observability using Datadog, Sentry, and created detailed monitors and dashboards",
        "Handled on-call operations, conducted post-incident reviews, and improved system uptime"
      ]
    },
    {
      id: "shuttl-qa",
      title: "Senior QA Engineer",
      company: "Shuttl",
      icon: ShuttlOrgIcon,
      iconColor: "text-orange-600",
      description: "Employee transportation and mobility platform",
      period: "08/2017 - 02/2020",
      location: "Gurugram, India",
      details: [
        "Led QA automation and backend, and API testing for microservices using Postman, REST-Assured, and Selenium.",
        "Created robust testing strategies for critical features like scheduling, payments, and routing logic"
      ]
    },
    {
      id: "1mg",
      title: "QA Engineer",
      company: "1mg",
      icon: TataOrgIcon,
      iconColor: "text-red-600",
      description: "Digital healthcare platform and pharmacy",
      period: "07/2015 - 08/2017",
      location: "Gurugram, India",
      details: [
        "Led QA for 1mg's diagnostics product across Web and Mobile platforms, ensuring high-quality releases.",
        "Provided QA support and expertise to cross-functional projects",
        "Executed end-to-end testing strategies, including functional, database, API, and performance testing",
        "Actively debugged and tracked live production issues to improve product stability and reliability"
      ]
    },
    {
      id: "fabfurnish",
      title: "Jr QA Analyst",
      company: "Fabfurnish",
      icon: FabOrgIcon,
      iconColor: "text-amber-600",
      description: "Online furniture and home decor marketplace",
      period: "12/2014 - 07/2015",
      location: "Gurugram, India",
      details: [
        "Performed comprehensive quality assurance and testing activities",
        "Supported senior team members in testing strategies and implementation"
      ]
    }
  ];

  const skillsData = [
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS", icon: SiAmazon, color: "text-orange-500" },
        { name: "Azure", icon: Cloud, color: "text-blue-500" },
        { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
        { name: "Docker", icon: SiDocker, color: "text-blue-400" },
        { name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
        { name: "Ansible", icon: SiAnsible, color: "text-red-600" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "text-gray-800 dark:text-gray-200" }
      ]
    },
    {
      category: "Programming",
      skills: [
        { name: "Python", icon: SiPython, color: "text-blue-500" },
        { name: "Go", icon: SiGo, color: "text-blue-400" },
        { name: "Bash", icon: SiGnubash, color: "text-gray-700 dark:text-gray-300" }
      ]
    },
    {
      category: "Monitoring & Observability",
      skills: [
        { name: "Datadog", icon: SiDatadog, color: "text-purple-600" },
        { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-red-500" },
        { name: "Elasticsearch", icon: SiElasticsearch, color: "text-yellow-500" }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "Redis", icon: SiRedis, color: "text-red-600" },
        { name: "SQL Server", icon: Database, color: "text-red-500" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-40 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                Munish Kumar
                <span className="text-gray-600 dark:text-gray-400 font-normal">· Site Reliability Engineer</span>
              </h1>
            </div>
            <div className="flex items-center space-x-8">
              <nav className="hidden md:flex space-x-8">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </nav>
    
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <ProfileImage className="w-64 h-64" />
            </div>
            
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Hello<span className="text-blue-600">.</span>
              </h2>
              <div className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                <p className="mb-4">
                  I’m a Site Reliability Engineer with a background in QA and a deep interest in how systems behave - especially in production. I care about building systems that are observable, scalable, and resilient. I began my journey as a QA engineer, working closely with backend teams to ensure stability and quality across rapid release cycles. Over time, I became fascinated with how systems break, recover, and scale -  which naturally led me into SRE.
                  
                </p>
                <p>
                  Today, with over 8 years of experience across QA, DevOps, and SRE, I help teams ship confidently, recover quickly, and run production systems with fewer surprises.
                  I focus on building internal tools, defining SLOs, setting up CI/CD pipelines, and strengthening observability — all to help teams ship faster and troubleshoot smarter. I work to reduce operational noise, improve production visibility, and create a smoother on-call experience for engineers. I thrive in high-trust, blameless cultures and enjoy mentoring others — especially those transitioning into SRE, like I once did.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection('about')}
                  className="w-40 h-40 rounded-full flex flex-col items-center justify-center rounded-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <User className="w-8 h-8 mb-2" />
                  About
                </Button>
                <Button
                  onClick={() => scrollToSection('projects')}
                  className="w-40 h-40 rounded-full flex flex-col items-center justify-center rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <FolderKanban className="w-8 h-8 mb-2" />
                  Projects
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="w-40 h-40 rounded-full flex flex-col items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <MailOpen className="w-8 h-8 mb-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">About Me</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                  <Briefcase className="mr-3 text-blue-600" />
                  Work History
                </h3>
                <div className="space-y-4">
                  {workExperience.map((job, index) => {
                    const IconComponent = job.icon;
                    return (
                      <Collapsible key={job.id} open={expandedJobs[job.id]} onOpenChange={() => toggleJobExpansion(job.id)}>
                        <div className={`border-l-4 pl-4 ${index === 0 ? 'border-blue-600' : 'border-gray-300'}`}>
                          <CollapsibleTrigger asChild>
                            <div className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{job.title}</h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <IconComponent className={`h-4 w-4 ${job.iconColor || 'text-blue-600'}`} />
                                    <div>
                                      <p className="text-blue-600 font-medium">{job.company}</p>
                                      <p className="text-gray-500 dark:text-gray-400 text-xs">{job.description}</p>
                                    </div>
                                  </div>
                                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{job.period}, {job.location}</p>
                                  <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">{job.summary}</p>
                                </div>
                                <div className="ml-2">
                                  {expandedJobs[job.id] ? (
                                    <ChevronUp className="h-5 w-5 text-gray-500" />
                                  ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-500" />
                                  )}
                                </div>
                              </div>
                            </div>
                          </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3">
                          <div className="pl-2 border-l-2 border-gray-200 dark:border-gray-700">
                            <h5 className="font-medium text-gray-900 dark:text-white mb-3">Key Achievements:</h5>
                            <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                              {job.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start">
                                  <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">•</span>
                                  <span className="leading-relaxed">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CollapsibleContent>
                        </div>
                      </Collapsible>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Skills & Tools */}
            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                  <Code className="mr-3 text-blue-600" />
                  Skills & Tools
                </h3>
                <div className="space-y-8">
                  {skillsData.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">{category.category}</h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {category.skills.map((skill, skillIndex) => {
                          const IconComponent = skill.icon;
                          return (
                            <div 
                              key={skillIndex}
                              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 cursor-pointer group"
                            >
                              <div className="mb-2 transition-transform duration-200 group-hover:scale-110">
                                <IconComponent size={32} className={`${skill.color} transition-colors duration-200`} />
                              </div>
                              <span className="text-sm font-medium text-gray-900 dark:text-white text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                                {skill.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                  <GraduationCap className="mr-3 text-blue-600" />
                  Education
                </h3>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">B.Tech</h4>
                  <p className="text-blue-600 font-medium">Maharishi Dayanand University</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Rohtak</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                  <Trophy className="mr-3 text-blue-600" />
                  Key Achievements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ChartLine className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">MTTR Improvement</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Reduced Mean Time to Recovery (or Repair) for incidents by 30% through observability improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Cost Optimization</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Cut cloud costs by 25% via rightsizing and monitoring</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Rocket className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">Deployment Velocity</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">Increased deployment velocity by 40% with CI/CD best practices  </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Projects</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-600 mr-3" size={32} />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Infrastructure Automation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automated cloud infrastructure provisioning and configuration using Terraform and Ansible. Defined infrastructure as code for scalable AWS and Azure environments and implemented modular, reusable Terraform modules. Used Ansible for post-provisioning setup, including service configuration and system hardening. Integrated workflows with GitHub Actions for CI/CD-driven infra changes and ensured repeatable, consistent deployments across environments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Terraform</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Ansible</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">AWS</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Azure</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">GitHub Actions</Badge>
                </div>
                <div className="flex space-x-4">
                  {/* <a href="https://github.com/kumarmunish" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                  <a href="#" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a> */}
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Container className="text-red-600 mr-3" size={32} />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Container Orchestration</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed, deployed, and managed production-grade Kubernetes and Nomad clusters for running containerized microservices. Implemented automated deployment pipelines using GitHub Actions, enabling zero-downtime rollouts and consistent release strategies. Configured NGINX ingress controllers, managed secrets and config maps, and optimized resource usage with fine-tuned pod limits and node affinity. Ensured high availability, scalability, and security of workloads across development and staging environments. 
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Kubernetes</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Docker</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Nomad</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Consul</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">Vault</Badge>
                  <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">GitHub Actions</Badge>
              
                </div>
                <div className="flex space-x-4">
                  {/* <a href="https://github.com/kumarmunish" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                  <a href="#" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors">
                    <ExternalLink className="mr-2" size={16} />
                    Case Study
                  </a> */}
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <BarChart3 className="text-yellow-600 mr-3" size={32} />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Observability Stack</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built comprehensive monitoring and observability solutions using Prometheus, Grafana, and Loki. 
                  Implemented distributed tracing and created actionable dashboards for faster incident response.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Prometheus</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Grafana</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Loki</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">Datadog</Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">ELK Stack</Badge>
                </div>
                <div className="flex space-x-4">
                  {/* <a href="https://github.com/kumarmunish" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors">
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                  <a href="#" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-yellow-600 transition-colors">
                    <ExternalLink className="mr-2" size={16} />
                    Documentation
                  </a> */}
                </div>
              </CardContent>
            </Card>

            {/* Project 4 */}
            <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Bot className="text-blue-600 mr-3" size={32} />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">CI/CD Automation</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed and implemented GitHub Actions-based CI/CD pipelines for multiple projects. 
                  Automated testing, building, and deployment processes with advanced security scanning and quality gates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">GitHub Actions</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Jenkins</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Drone CI</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">SonarQube</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">Polaris</Badge>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">CodeQL</Badge>
                </div>
                <div className="flex space-x-4">
                  {/* <a href="https://github.com/kumarmunish" target="_blank" rel="noopener noreferrer" 
                     className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                  <a href="#" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink className="mr-2" size={16} />
                    Templates
                  </a> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">Get In Touch</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="text-blue-600 mr-4" size={20} />
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                      <button 
                        onClick={() => copyToClipboard('munishkumar631@gmail.com', 'Email copied to clipboard!')}
                        className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        munishkumar631@gmail.com
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-600 mr-4" size={20} />
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Phone</p>
                      <button 
                        onClick={() => copyToClipboard('+91-9999954851', 'Phone number copied to clipboard!')}
                        className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        +91-9999954851
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-blue-600 mr-4" size={20} />
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                      <p className="text-gray-900 dark:text-white">Bangalore, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Find Me Online</h3>
                <div className="space-y-4">
                  <a href="https://linkedin.com/in/munishkumar631" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">
                    <Linkedin className="text-blue-600 mr-4" size={32} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">LinkedIn</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Professional networking</p>
                    </div>
                  </a>
                  <a href="https://github.com/kumarmunish" target="_blank" rel="noopener noreferrer" 
                     className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">
                    <Github className="text-blue-600 mr-4" size={32} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">Code repositories</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <p className="text-gray-400">Phone</p>
              <button 
                onClick={() => copyToClipboard('+91-9999954851', 'Phone number copied to clipboard!')}
                className="text-white hover:text-blue-400 transition-colors"
              >
                +91-9999954851
              </button>
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <button 
                onClick={() => copyToClipboard('munishkumar631@gmail.com', 'Email copied to clipboard!')}
                className="text-white hover:text-blue-400 transition-colors"
              >
                munishkumar631@gmail.com
              </button>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Follow Me</p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://linkedin.com/in/munishkumar631" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/kumarmunish" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Munish Kumar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
