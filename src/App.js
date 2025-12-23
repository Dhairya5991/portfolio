import React, { useState, useEffect } from 'react';
import { Code, Mail, Phone, MapPin, Linkedin, Download, Menu, X, Briefcase, GraduationCap, Award, Folder } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    window.open('Dhairyashil_Pansare_Resume.pdf', '_blank');
  };

  const skills = [
    'HTML/HTML5', 'CSS/CSS3', 'Bootstrap', 'jQuery/JavaScript',
    'WordPress CMS', 'Core PHP', 'MySQL', 'Git'
  ];

  const experience = [
    {
      title: 'Sr. Software Engineer',
      company: 'LTIMindtree, Pune',
      period: '06/2022 – 11/2023',
      responsibilities: [
        'Managed WordPress CMS for website administration',
        'Configured updates for plugins and themes',
        'Managed customization of WordPress'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Savy Software Pvt. Ltd., Pune',
      period: '06/2019 – 06/2022',
      responsibilities: [
        'Developed websites utilizing WordPress CMS',
        'Performed WordPress modifications',
        'Increased efficiency of applications through optimization'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Nucleosys Technologies, Pune',
      period: '05/2017 – 06/2019',
      responsibilities: [
        'Constructed user-friendly WordPress platforms',
        'Managed website operations and database backups',
        'Enhanced website performance for optimal loading times'
      ]
    },
    {
      title: 'System Administrator',
      company: 'Mythos Technology, Satara',
      period: '08/2015 – 12/2016',
      responsibilities: [
        'Monitor System Performance',
        'Perform Daily Security Backups and Restores',
        'Install and Configure Software and Hardware'
      ]
    }
  ];

  const projects = [
    {
      name: 'Scania Supplier Portal',
      period: '08/2022 – 09/2023',
      description: [
        'Developed custom templates for WordPress',
        'Administer user accounts and their management',
        'Refresh website content, plugins, and themes'
      ]
    },
    {
      name: 'Pilospray',
      period: '05/2021 – 01/2022',
      description: [
        'Developed an e-commerce website for products utilizing WordPress',
        'Managed the integration of payment gateways',
        'Facilitate customization of the WordPress platform'
      ]
    },
    {
      name: 'Fortix',
      period: '06/2020 – 04/2021',
      description: [
        'Developed an online shopping website using WordPress',
        'Managed customization of WordPress',
        'Managed the integration of payment gateways'
      ]
    },
    {
      name: 'Meddiespices',
      period: '',
      description: [
        'Developed an e-commerce website for products utilizing WordPress',
        'Managed the integration of payment gateways',
        'Refresh website content, plugins, and themes'
      ]
    },
    {
      name: 'Venkateshwara Greens',
      period: '',
      description: [
        'Created a real estate website featuring a catalog of properties',
        'Managed the coordination of brochures for these properties',
        'Amenities and Specifications Presented through animation'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Code className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">DP</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            <button
              onClick={handleDownloadResume}
              className="hidden md:flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'education', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-slate-700 rounded-md"
                >
                  {section}
                </button>
              ))}
              <button
                onClick={handleDownloadResume}
                className="flex items-center space-x-2 w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-md"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Dhairyashil Pansare
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Software Engineer</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            With 6+ years of experience in the software industry, specializing in WordPress CMS, 
            Core PHP, and modern web technologies. Successfully delivered innovative software solutions 
            across various domains.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
            >
              Get In Touch
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Professional Summary</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                A competitive Software Developer with 6+ years of experience in the software industry. 
                Successfully completed projects using WordPress CMS, Core PHP, and MySQL.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Strong understanding of HTML/HTML5, CSS/CSS3, Bootstrap, jQuery/JavaScript, and Git. 
                Diverse skill set allows effective contribution to the development and implementation of 
                innovative software solutions.
              </p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-purple-400">Languages</h4>
                <div className="flex gap-2">
                  {['English', 'Hindi', 'Marathi'].map((lang, index) => (
                    <span key={index} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded text-sm">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-center mb-12">
            <Briefcase className="w-8 h-8 mr-3 text-blue-400" />
            <h2 className="text-4xl font-bold">Work Experience</h2>
          </div>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{job.title}</h3>
                    <p className="text-gray-300">{job.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-center mb-12">
            <Folder className="w-8 h-8 mr-3 text-blue-400" />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-purple-400">{project.name}</h3>
                  {project.period && (
                    <span className="text-gray-400 text-sm">{project.period}</span>
                  )}
                </div>
                <ul className="space-y-2">
                  {project.description.map((desc, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start text-sm">
                      <span className="text-purple-400 mr-2">→</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-center mb-12">
            <GraduationCap className="w-8 h-8 mr-3 text-blue-400" />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400">Bachelor of Engineering</h3>
              <p className="text-gray-300">Computer Science and Engineering</p>
              <p className="text-gray-400">Shivaji University, Kolhapur</p>
              <p className="text-gray-500 text-sm">08/2011 – 07/2014</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg backdrop-blur-sm border border-slate-700">
              <h3 className="text-xl font-semibold text-blue-400">Diploma</h3>
              <p className="text-gray-300">Computer Engineering</p>
              <p className="text-gray-400">MSBTE, Satara</p>
              <p className="text-gray-500 text-sm">06/2008 – 07/2011</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+91 8805555319</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:dspansare1991@gmail.com" className="hover:text-blue-400 transition-colors">
                    dspansare1991@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>Pune, India 411038</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-5 h-5 text-blue-400" />
                  <a href="https://lked.in/dhairyashil" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    linkedin.com/in/dhairyashil
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-purple-400">Management Skills</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Handled and oversaw several projects simultaneously</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Facilitated efficient collaboration with teams</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Achieved successful project delivery within established timelines</span>
                </li>
                <li className="flex items-start">
                  <Award className="w-5 h-5 text-purple-400 mr-2 mt-1 flex-shrink-0" />
                  <span>Implemented programs and assessed user feedback</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Dhairyashil Pansare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
