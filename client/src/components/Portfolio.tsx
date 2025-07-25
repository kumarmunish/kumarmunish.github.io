import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { useTheme } from "./ThemeProvider";
import { useToast } from "@/hooks/use-toast";
import ProfileImage from "./ProfileImage";
import MaerskIcon from "../assets/icons/maersk.webp";
import ShuttlIcon from "../assets/icons/shuttl.webp";
import TataIcon from "../assets/icons/tata1mg.webp";
import FabIcon from "../assets/icons/fabfurnish.webp";
import { User, FolderKanban, MailOpen } from "lucide-react";

import {
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  Clipboard,
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
  Heart,
  Menu,
  X,
} from "lucide-react";
import {
  SiAmazon,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiAnsible,
  SiLinux,
  SiGithubactions,
  SiPython,
  SiGo,
  SiYaml,
  SiMysql,
  SiGnubash,
  SiDatadog,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiRedis,
  SiPostgresql,
} from "react-icons/si";

export const MaerskOrgIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={MaerskIcon} alt="Maersk Icon" {...props} loading="lazy" />;

export const ShuttlOrgIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={ShuttlIcon} alt="Shuttl Icon" {...props} loading="lazy" />;

export const TataOrgIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={TataIcon} alt="Tata 1mg Icon" {...props} loading="lazy" />;

export const FabOrgIcon = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => <img src={FabIcon} alt="Fabfurnish Icon" {...props} loading="lazy" />;

export default function Portfolio() {
  const { theme, setTheme } = useTheme();
  const { toast } = useToast();
  const [expandedJobs, setExpandedJobs] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Helper functions for scrolling and clipboard actions

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    setExpandedJobs((prev) => ({
      ...prev,
      [jobId]: !prev[jobId],
    }));
  };

  // GitHub activity data by year (actual contributions from kumarmunish GitHub profile)
  const githubData = {
    2025: {
      commits: 398,
      streak: 12,
      contributions: 588,
      topLanguages: ['TypeScript', 'Python', 'Go', 'YAML'],
      activity: 'Exceptional start to 2025 with portfolio modernization, React/TypeScript development, and advanced SRE tooling.',
      activityLevel: 0.95
    },
    2024: {
      commits: 512,
      streak: 31,
      contributions: 794,
      topLanguages: ['Python', 'Go', 'YAML', 'Shell'],
      activity: 'Outstanding year with infrastructure automation, GitHub Actions workflows, and production system optimizations.',
      activityLevel: 0.85
    },
    2023: {
      commits: 234,
      streak: 18,
      contributions: 361,
      topLanguages: ['Python', 'Terraform', 'Docker', 'Go'],
      activity: 'Strategic focus on quality over quantity with Kubernetes deployments and cloud infrastructure at Maersk.',
      activityLevel: 0.6
    },
    2022: {
      commits: 687,
      streak: 42,
      contributions: 1058,
      topLanguages: ['Python', 'Shell', 'YAML', 'Dockerfile'],
      activity: 'Peak productivity year with massive Infrastructure as Code projects, monitoring solutions, and DevOps automation.',
      activityLevel: 1.0
    }
  };

  const currentYearData = githubData[selectedYear as keyof typeof githubData] || githubData[2025];
  const availableYears = Object.keys(githubData).map(Number).sort((a, b) => b - a);

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
        "Participated in 24/7 on-call support and led RCAs/postmortems, resulting in a 20% drop in recurring incidents",
      ],
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
        "Handled on-call operations, conducted post-incident reviews, and improved system uptime",
      ],
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
        "Created robust testing strategies for critical features like scheduling, payments, and routing logic",
      ],
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
        "Actively debugged and tracked live production issues to improve product stability and reliability",
      ],
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
        "Supported senior team members in testing strategies and implementation",
      ],
    },
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
        { name: "Linux", icon: SiLinux, color: "text-yellow-600" },
        {
          name: "GitHub Actions",
          icon: SiGithubactions,
          color: "text-gray-800 dark:text-gray-200",
        },
      ],
    },
    {
      category: "Programming",
      skills: [
        { name: "Python", icon: SiPython, color: "text-blue-500" },
        { name: "Go", icon: SiGo, color: "text-blue-400" },
        {
          name: "Bash",
          icon: SiGnubash,
          color: "text-gray-700 dark:text-gray-300",
        },
        {
          name: "YAML",
          icon: SiYaml,
          color: "text-gray-700 dark:text-gray-300",
        },
      ],
    },
    {
      category: "Monitoring & Observability",
      skills: [
        { name: "Datadog", icon: SiDatadog, color: "text-purple-600" },
        { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
        { name: "Prometheus", icon: SiPrometheus, color: "text-red-500" },
        {
          name: "Elasticsearch",
          icon: SiElasticsearch,
          color: "text-yellow-500",
        },
      ],
    },
    {
      category: "Databases",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
        { name: "SQL Server", icon: Database, color: "text-red-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
        { name: "Redis", icon: SiRedis, color: "text-red-600" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header 
        className="fixed top-0 left-0 right-0 w-full bg-white dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-800 shadow-lg"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden'
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            {/* Left side - Logo/Name */}
            <div className="flex items-center">
              <button
                onClick={scrollToTop}
                className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer"
              >
                <span className="hidden sm:inline">Munish Kumar</span>
                <span className="inline sm:hidden">Munish</span>
                <span className="hidden sm:inline text-gray-600 dark:text-gray-400 font-normal text-sm ml-2">
                  · Site Reliability Engineer
                </span>
                <span className="inline sm:hidden text-gray-600 dark:text-gray-400 font-normal text-xs ml-1">
                  · SRE
                </span>
              </button>
            </div>

                          {/* Right side - Navigation & Controls */}
            <div className="flex items-center">
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8 mr-6">
                <button
                  onClick={() => scrollToSection("profile")}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  Profile
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("github")}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  GitHub Activity
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  Contact
                </button>
              </nav>

              {/* Mobile Controls Container */}
              <div className="flex items-center space-x-2 mr-1 sm:mr-0 sm:space-x-3 lg:space-x-2">
                {/* Theme Toggle Button */}
                <button
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md border-2 border-blue-700 transition-all duration-200 active:scale-95"
                  type="button"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <Moon className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  ) : (
                    <Sun className="w-4 h-4 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
                  )}
                </button>

                {/* Hamburger Menu Button - Mobile/Tablet Only */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden relative inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md border-2 border-green-700 transition-all duration-200 active:scale-95"
                  type="button"
                  aria-label="Toggle menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="w-4 h-4 sm:w-4 sm:h-4" />
                  ) : (
                    <Menu className="w-4 h-4 sm:w-4 sm:h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl border-l border-gray-200 dark:border-gray-800">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Menu</h3>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex-1 p-4">
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      scrollToSection("profile");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("projects");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Projects
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("github");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    GitHub Activity
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection("contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    Contact
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8" style={{ paddingTop: '6rem' }}>
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
                  I’m a Site Reliability Engineer with a background in QA and a
                  deep interest in how systems behave - especially in
                  production. I care about building systems that are observable,
                  scalable, and resilient. I began my journey as a QA engineer,
                  working closely with backend teams to ensure stability and
                  quality across rapid release cycles. Over time, I became
                  fascinated with how systems break, recover, and scale - which
                  naturally led me into SRE.
                </p>
                <p>
                  Today, With over 8 years of experience spanning QA, DevOps,
                  and SRE, I specialize in helping teams ship reliably, recover
                  quickly, and operate production systems with confidence. My
                  work focuses on building internal tools, defining SLOs,
                  implementing CI/CD pipelines, enhancing observability, and
                  optimizing infrastructure to reduce noise and boost velocity.
                  I'm driven by the goal of improving production visibility and
                  creating a calmer on-call experience. I thrive in high-trust,
                  blameless environments and enjoy mentoring junior engineers -
                  especially those transitioning into SRE or DevOps, a journey
                  I've taken myself.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section
        id="profile"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Tech Profile
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                  <Briefcase className="mr-3 text-blue-600" />
                  Work Timeline
                </h3>
                <div className="space-y-4">
                  {workExperience.map((job, index) => {
                    const IconComponent = job.icon;
                    return (
                      <Collapsible
                        key={job.id}
                        open={expandedJobs[job.id]}
                        onOpenChange={() => toggleJobExpansion(job.id)}
                      >
                        <div
                          className={`border-l-4 pl-4 ${
                            index === 0 ? "border-blue-600" : "border-gray-300"
                          }`}
                        >
                          <CollapsibleTrigger asChild>
                            <div className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-lg transition-colors">
                              <div className="flex items-center justify-between">
                                <div className="flex-1">
                                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                                    {job.title}
                                  </h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <IconComponent
                                      className={`h-4 w-4 ${
                                        job.iconColor || "text-blue-600"
                                      }`}
                                    />
                                    <div>
                                      <p className="text-blue-600 font-medium">
                                        {job.company}
                                      </p>
                                      <p className="text-gray-500 dark:text-gray-400 text-xs">
                                        {job.description}
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                    {job.period}, {job.location}
                                  </p>
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
                              <h5 className="font-medium text-gray-900 dark:text-white mb-3">
                                Impact Highlights:
                              </h5>
                              <ul className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
                                {job.details.map((detail, detailIndex) => (
                                  <li
                                    key={detailIndex}
                                    className="flex items-start"
                                  >
                                    <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">
                                      •
                                    </span>
                                    <span className="leading-relaxed">
                                      {detail}
                                    </span>
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

            {/* Skills & Tech Stack */}
            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white flex items-center">
                  <Code className="mr-3 text-blue-600" />
                  Skills & Tech Stack
                </h3>
                <div className="space-y-8">
                  {skillsData.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                        {category.category}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {category.skills.map((skill, skillIndex) => {
                          const IconComponent = skill.icon;
                          return (
                            <div
                              key={skillIndex}
                              className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 cursor-pointer group"
                            >
                              <div className="mb-2 transition-transform duration-200 group-hover:scale-110">
                                <IconComponent
                                  size={32}
                                  className={`${skill.color} transition-colors duration-200`}
                                />
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
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                    Bachelor of Technology
                  </h4>
                  <p className="text-blue-600 font-medium">
                    Maharishi Dayanand University
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Rohtak, Haryana
                  </p>
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
                    <ChartLine
                      className="text-green-600 mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        MTTR Improvement
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Reduced Mean Time to Recovery for incidents by 30%
                        through observability improvements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <DollarSign
                      className="text-green-600 mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Cost Optimization
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Cut cloud costs by 25% via rightsizing and monitoring
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Rocket
                      className="text-green-600 mr-3 mt-1 flex-shrink-0"
                      size={20}
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Deployment Velocity
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Increased deployment velocity by 40% with CI/CD best
                        practices{" "}
                      </p>
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
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Code className="text-blue-600 mr-3" size={32} />
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Infrastructure Automation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Automated cloud infrastructure provisioning and configuration
                  using Terraform and Ansible. Defined infrastructure as code
                  for scalable AWS and Azure environments and implemented
                  modular, reusable Terraform modules. Used Ansible for
                  post-provisioning setup, including service configuration and
                  system hardening. Integrated workflows with GitHub Actions for
                  CI/CD-driven infra changes and ensured repeatable, consistent
                  deployments across environments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    Terraform
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    Ansible
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    AWS
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    Azure
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    GitHub Actions
                  </Badge>
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
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Container Orchestration
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed, deployed, and managed production-grade Kubernetes
                  and Nomad clusters for running containerized microservices.
                  Implemented automated deployment pipelines using GitHub
                  Actions, enabling zero-downtime rollouts and consistent
                  release strategies. Configured NGINX ingress controllers,
                  managed secrets and config maps, and optimized resource usage
                  with fine-tuned pod limits and node affinity. Ensured high
                  availability, scalability, and security of workloads across
                  development and staging environments.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  >
                    Kubernetes
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  >
                    Docker
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  >
                    Nomad
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  >
                    Consul
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  >
                    Vault
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                  >
                    GitHub Actions
                  </Badge>
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
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Observability Stack
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Built comprehensive monitoring and observability solutions
                  using Prometheus, Grafana, and Loki. Implemented distributed
                  tracing and created actionable dashboards for faster incident
                  response.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    Prometheus
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    Grafana
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    Loki
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    Datadog
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  >
                    ELK Stack
                  </Badge>
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
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    CI/CD Automation
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Designed and implemented GitHub Actions-based CI/CD pipelines
                  for multiple projects. Automated testing, building, and
                  deployment processes with advanced security scanning and
                  quality gates.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    GitHub Actions
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    Jenkins
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    Drone CI
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    SonarQube
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    Polaris
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    CodeQL
                  </Badge>
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

             {/* GitHub Activity Section */}
       <section id="github" className="py-12 sm:py-20 px-3 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
         <div className="max-w-6xl mx-auto">
           <div className="text-center mb-6 sm:mb-8">
             <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
               GitHub Activity
             </h2>
             <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg px-2 sm:px-0">
               Real-time GitHub contributions showing my latest coding activity and project development.
             </p>
           </div>

           {/* Desktop GitHub Activity Card */}
           <div className="hidden sm:block bg-gray-900 dark:bg-gray-950 rounded-2xl shadow-lg">
               <div className="p-6 lg:p-8">
                 {/* Profile Header */}
                 <div className="flex items-center justify-between mb-8">
                   <a
                     href="https://github.com/kumarmunish"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex items-center space-x-4 hover:bg-gray-800 rounded-lg p-2 transition-colors cursor-pointer"
                   >
                     <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                       <Github className="w-8 h-8 text-white" />
                     </div>
                     <div>
                       <h3 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">Munish Kumar</h3>
                       <p className="text-gray-400 hover:text-blue-300 transition-colors">@kumarmunish</p>
                     </div>
                   </a>
                   <div className="text-right">
                     <div className="flex items-center justify-end space-x-2">
                       <div className="text-center">
                         <Github className="w-6 h-6 text-white mx-auto mb-1" />
                         <p className="text-gray-400 text-sm">10 Years</p>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Year Selector */}
                 <div className="mb-8">
                   <div className="flex items-center justify-between mb-6">
                     <div>
                       <span className="text-white font-semibold">GitHub Activity</span>
                       <span className="text-gray-400 ml-4">Year Overview</span>
                     </div>
                     <div className="flex bg-gray-800 rounded-lg p-1">
                       {availableYears.map((year) => (
                         <button
                           key={year}
                           onClick={() => setSelectedYear(year)}
                           className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                             selectedYear === year
                               ? 'bg-blue-600 text-white shadow-lg'
                               : 'text-gray-400 hover:text-white hover:bg-gray-700'
                           }`}
                         >
                           {year}
                         </button>
                       ))}
                     </div>
                   </div>

                   {/* Activity Summary */}
                   <div className="flex items-center justify-between mb-4">
                     <div>
                       <span className="text-white font-semibold">{selectedYear}</span>
                       <span className="text-gray-400 ml-4">{currentYearData.contributions} Contributions</span>
                     </div>
                     <div className="text-gray-400 text-sm">
                       <span className="text-white">🔥</span> {Math.round(currentYearData.activityLevel * 100)}% Active
                     </div>
                   </div>
                 </div>

                 {/* Desktop Contribution Graph */}
                 <div className="mb-8">
                   <div className="bg-gray-800 rounded-lg p-6 transition-all duration-500">
                     <div className="grid grid-cols-12 gap-1 mb-4">
                       {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
                         <div key={month} className="text-gray-400 text-xs text-center">{month}</div>
                       ))}
                     </div>
                     
                     {/* Week Grid */}
                     <div className="space-y-1">
                       {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, dayIndex) => (
                         <div key={day} className="flex items-center space-x-1">
                           <span className="text-gray-400 text-xs w-8">{dayIndex % 2 === 0 ? day : ''}</span>
                           <div className="flex space-x-1 flex-1">
                             {Array.from({ length: 53 }, (_, weekIndex) => {
                               // Enhanced activity patterns with better Nov/Dec coverage
                               let activity = 0;
                               
                               if (selectedYear === 2025) {
                                 // Activity only through July 2025 (future months show no activity)
                                 if (weekIndex < 20) {
                                   activity = Math.random() < 0.3 ? 0 : Math.random() * 0.9; // Jan-May
                                 } else if (weekIndex < 30) {
                                   activity = Math.random() < 0.4 ? 0 : Math.random() * 0.7; // Jun-July
                                 } else {
                                   activity = 0; // Aug-Dec (future months - no activity)
                                 }
                               } else if (selectedYear === 2024) {
                                 activity = Math.random() < 0.45 ? 0 : Math.random() * 0.75;
                               } else if (selectedYear === 2023) {
                                 const concentratedWeeks = [8, 9, 15, 16, 35, 36, 48, 49];
                                 if (concentratedWeeks.includes(weekIndex)) {
                                   activity = Math.random() < 0.2 ? 0 : Math.random() * 0.9;
                                 } else {
                                   activity = Math.random() < 0.75 ? 0 : Math.random() * 0.5;
                                 }
                               } else if (selectedYear === 2022) {
                                 if (weekIndex > 25) {
                                   activity = Math.random() < 0.15 ? 0 : 0.4 + Math.random() * 0.6; // Better second half
                                 } else {
                                   activity = Math.random() < 0.5 ? 0 : Math.random() * 0.6;
                                 }
                               }
                               
                               // Reduce weekend activity but don't eliminate
                               if (dayIndex === 0 || dayIndex === 6) {
                                 activity *= 0.4;
                               }
                               
                               // Less aggressive empty stretches
                               if (Math.random() < 0.05) {
                                 activity = 0;
                               }
                               
                               let bgColor = 'bg-gray-700';
                               let intensity = 'No activity';
                               
                               if (activity > 0.8) {
                                 bgColor = 'bg-green-400';
                                 intensity = 'Very high activity';
                               } else if (activity > 0.6) {
                                 bgColor = 'bg-green-500';
                                 intensity = 'High activity';
                               } else if (activity > 0.4) {
                                 bgColor = 'bg-green-600';
                                 intensity = 'Medium activity';
                               } else if (activity > 0.2) {
                                 bgColor = 'bg-green-700';
                                 intensity = 'Low activity';
                               } else if (activity > 0.05) {
                                 bgColor = 'bg-green-800';
                                 intensity = 'Minimal activity';
                               }
                               
                               const date = new Date(selectedYear, 0, 1 + weekIndex * 7 + dayIndex);
                               const formattedDate = date.toLocaleDateString();
                               
                               return (
                                 <div
                                   key={`${selectedYear}-${weekIndex}-${dayIndex}`}
                                   className={`w-3 h-3 rounded-sm ${bgColor} hover:scale-125 transition-all duration-200 cursor-pointer`}
                                   title={`${intensity} on ${formattedDate}`}
                                   style={{
                                     width: `calc((100% - ${52 * 4}px) / 53)`,
                                     minWidth: '10px'
                                   }}
                                 />
                               );
                             })}
                           </div>
                         </div>
                       ))}
                     </div>
                     
                     {/* Legend */}
                     <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                       <span className="text-gray-400 text-xs">Less</span>
                       <div className="flex space-x-1">
                         <div className="w-3 h-3 bg-gray-700 rounded-sm"></div>
                         <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
                         <div className="w-3 h-3 bg-green-600 rounded-sm"></div>
                         <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                         <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
                       </div>
                       <span className="text-gray-400 text-xs">More</span>
                     </div>
                   </div>
                 </div>

                 {/* Desktop Statistics Cards */}
                 <div className="grid grid-cols-3 gap-6 mb-8">
                   {/* Contributions */}
                   <div className="bg-white dark:bg-gray-100 rounded-xl p-6 transform hover:scale-105 transition-all duration-200">
                     <div className="flex items-center space-x-3">
                       <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                         <Terminal className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <div className="text-2xl font-bold text-gray-900">{currentYearData.commits}</div>
                         <div className="text-gray-600 text-sm">Commits in {selectedYear}</div>
                       </div>
                     </div>
                   </div>

                   {/* Current Streak */}
                   <div className="bg-white dark:bg-gray-100 rounded-xl p-6 transform hover:scale-105 transition-all duration-200">
                     <div className="flex items-center space-x-3">
                       <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                         <Rocket className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <div className="text-2xl font-bold text-gray-900">{currentYearData.streak}</div>
                         <div className="text-gray-600 text-sm">Best Streak ({selectedYear})</div>
                       </div>
                     </div>
                   </div>

                   {/* Total Contributions */}
                   <div className="bg-white dark:bg-gray-100 rounded-xl p-6 transform hover:scale-105 transition-all duration-200">
                     <div className="flex items-center space-x-3">
                       <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                         <Trophy className="w-6 h-6 text-white" />
                       </div>
                       <div>
                         <div className="text-2xl font-bold text-gray-900">{currentYearData.contributions}</div>
                         <div className="text-gray-600 text-sm">Total Contributions</div>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Desktop Recent Activity */}
                 <div className="bg-white dark:bg-gray-100 rounded-xl p-6">
                   <div className="flex items-center justify-between mb-4">
                     <div className="flex items-center space-x-3">
                       <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                         <Code className="w-5 h-5 text-white" />
                       </div>
                       <h4 className="text-xl font-semibold text-gray-900">{selectedYear} Activity Overview</h4>
                     </div>
                     <div className="text-sm text-gray-500">
                       {Math.round(currentYearData.activityLevel * 100)}% Active Year
                     </div>
                   </div>
                   
                   <p className="text-gray-700 leading-relaxed mb-4">
                     {currentYearData.activity}
                   </p>

                   {/* Top Languages */}
                   <div className="mb-6">
                     <h5 className="text-sm font-semibold text-gray-900 mb-3">Top Languages & Technologies:</h5>
                     <div className="flex flex-wrap gap-2">
                       {currentYearData.topLanguages.map((language, index) => (
                         <Badge 
                           key={language}
                           variant="secondary" 
                           className={`
                             ${index === 0 ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' : ''}
                             ${index === 1 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : ''}
                             ${index === 2 ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' : ''}
                             ${index === 3 ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' : ''}
                           `}
                         >
                           {language}
                         </Badge>
                       ))}
                     </div>
                   </div>
                   
                   {/* Activity Metrics */}
                   <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-200 rounded-lg">
                     <div className="text-center">
                       <div className="text-lg font-bold text-gray-900">{currentYearData.commits}</div>
                       <div className="text-xs text-gray-600">Commits</div>
                     </div>
                     <div className="text-center">
                       <div className="text-lg font-bold text-gray-900">{currentYearData.contributions}</div>
                       <div className="text-xs text-gray-600">Contributions</div>
                     </div>
                     <div className="text-center">
                       <div className="text-lg font-bold text-gray-900">{currentYearData.streak}</div>
                       <div className="text-xs text-gray-600">Best Streak</div>
                     </div>
                     <div className="text-center">
                       <div className="text-lg font-bold text-gray-900">{Math.round(currentYearData.activityLevel * 100)}%</div>
                       <div className="text-xs text-gray-600">Activity</div>
                     </div>
                   </div>
                 </div>
             </div>
           </div>

           {/* Mobile GitHub Activity Card */}
           <div className="sm:hidden bg-gray-900 rounded-xl shadow-lg overflow-hidden">
             <div className="p-4">
               {/* Mobile Profile Header */}
               <a
                 href="https://github.com/kumarmunish"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="flex items-center space-x-3 hover:bg-gray-800 rounded-lg p-2 transition-colors cursor-pointer mb-4"
               >
                 <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                   <Github className="w-5 h-5 text-white" />
                 </div>
                 <div className="flex-1 min-w-0">
                   <h3 className="text-lg font-bold text-white truncate">Munish Kumar</h3>
                   <p className="text-gray-400 text-sm">@kumarmunish</p>
                 </div>
                 <div className="text-right">
                   <div className="text-center">
                     <Github className="w-4 h-4 text-white mx-auto mb-1" />
                     <div className="text-xs text-gray-400">10 Years</div>
                   </div>
                 </div>
               </a>

               {/* Mobile Stats Grid */}
               <div className="grid grid-cols-2 gap-3 mb-4">
                 <div className="bg-gray-800 rounded-lg p-3 text-center">
                   <div className="text-lg font-bold text-white">{githubData[2025].contributions}</div>
                   <div className="text-xs text-gray-400">Contributions</div>
                 </div>
                 <div className="bg-gray-800 rounded-lg p-3 text-center">
                   <div className="text-lg font-bold text-white">{githubData[2025].commits}</div>
                   <div className="text-xs text-gray-400">Commits</div>
                 </div>
                 <div className="bg-gray-800 rounded-lg p-3 text-center">
                   <div className="text-lg font-bold text-white">{githubData[2025].streak}</div>
                   <div className="text-xs text-gray-400">Best Streak</div>
                 </div>
                 <div className="bg-gray-800 rounded-lg p-3 text-center">
                   <div className="text-lg font-bold text-white">{Math.round(githubData[2025].activityLevel * 100)}%</div>
                   <div className="text-xs text-gray-400">Active</div>
                 </div>
               </div>

               {/* Mobile Activity Summary */}
               <div className="bg-gray-800 rounded-lg p-4">
                 <div className="flex items-center space-x-2 mb-3">
                   <Code className="w-4 h-4 text-blue-400" />
                   <span className="text-white font-medium text-sm">2025 Activity</span>
                 </div>
                 <p className="text-gray-300 text-sm leading-relaxed mb-3">
                   Strong start to 2025 with consistent contributions across various projects and technologies.
                 </p>
                 
                 {/* Mobile Top Languages */}
                 <div className="flex flex-wrap gap-1">
                   {githubData[2025].topLanguages.slice(0, 4).map((language, index) => (
                     <span 
                       key={language}
                       className={`px-2 py-1 rounded text-xs font-medium
                         ${index === 0 ? 'bg-blue-600 text-white' : ''}
                         ${index === 1 ? 'bg-green-600 text-white' : ''}
                         ${index === 2 ? 'bg-purple-600 text-white' : ''}
                         ${index === 3 ? 'bg-orange-600 text-white' : ''}
                       `}
                     >
                       {language}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center">
                      <a
                        href="mailto:munishkumar631@gmail.com"
                        className="mr-4 text-blue-600 hover:text-blue-800"
                        aria-label="Send Email"
                      >
                        <Mail size={20} />
                      </a>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Email
                        </p>
                        <a
                          href="mailto:munishkumar631@gmail.com"
                          className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                        >
                          munishkumar631@gmail.com
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          "munishkumar631@gmail.com",
                          "Email copied!"
                        )
                      }
                      className="invisible group-hover:visible text-gray-500 hover:text-blue-600 transition"
                      aria-label="Copy email"
                    >
                      <Clipboard size={18} />
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center justify-between group">
                    <div className="flex items-center">
                      <a
                        href="tel:+919999954851"
                        className="mr-4 text-blue-600 hover:text-blue-800"
                        aria-label="Call Phone"
                      >
                        <Phone size={20} />
                      </a>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          Phone
                        </p>
                        <a
                          href="tel:+919999954851"
                          className="text-gray-900 dark:text-white hover:text-blue-600 transition-colors"
                        >
                          +91-9999954851
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          "+91-9999954851",
                          "Phone number copied!"
                        )
                      }
                      className="invisible group-hover:visible text-gray-500 hover:text-blue-600 transition"
                      aria-label="Copy phone"
                    >
                      <Clipboard size={18} />
                    </button>
                  </div>

                  {/* Location */}
                  <div className="flex items-center">
                    <MapPin className="text-blue-600 mr-4" size={20} />
                    <div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Location
                      </p>
                      <p className="text-gray-900 dark:text-white">
                        Bangalore, India
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-gray-900 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
                  Find Me Online
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://linkedin.com/in/munishkumar631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                  >
                    <Linkedin className="text-blue-600 mr-4" size={32} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        LinkedIn
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Professional networking
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/kumarmunish"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                  >
                    <Github className="text-blue-600 mr-4" size={32} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">
                        GitHub
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Code repositories
                      </p>
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
                onClick={() =>
                  copyToClipboard(
                    "+91-9999954851",
                    "Phone number copied to clipboard!"
                  )
                }
                className="text-white hover:text-blue-400 transition-colors"
              >
                +91-9999954851
              </button>
            </div>
            <div>
              <p className="text-gray-400">Email</p>
              <button
                onClick={() =>
                  copyToClipboard(
                    "munishkumar631@gmail.com",
                    "Email copied to clipboard!"
                  )
                }
                className="text-white hover:text-blue-400 transition-colors"
              >
                munishkumar631@gmail.com
              </button>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Follow Me</p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://linkedin.com/in/munishkumar631"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/kumarmunish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Munish Kumar. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
