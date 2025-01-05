import {
  Github,
  Linkedin,
  Mail,
  Award,
  Download,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import pic from "../assets/pic.jpg";
import resume from "../assets/SriBalaji-Profile.pdf";
import { Button } from "./ui/button";

const Portfolio = () => {
  const personalInfo = {
    name: "Sri Balaji",
    title: "Senior Frontend Developer",
    yearsOfExperience: "8+",
    location: "Chennai, India",
    photoUrl: pic,
    introduction: `Hey there! I'm Sri, a passionate Senior Frontend Developer with over 8 years of hands-on experience crafting digital experiences. I specialize in building scalable web applications using React.js and TypeScript, and I absolutely love turning complex problems into elegant solutions. Throughout my journey, I've had the privilege of working on diverse projects ranging from network automation systems to investment banking platforms. I'm particularly proud of my contributions to improving developer experiences and mentoring junior developers. When I'm not coding, you'll find me exploring new technologies or brainstorming ways to optimize user interfaces.`,
  };

  const skills = {
    core: ["React.js", "TypeScript", "Next.js", "JavaScript (ES6+)"],
    framework: ["Tailwind CSS", "Shadcn/UI", "Material-UI", "SCSS/SASS"],
    libraries: ["Cytoscape.js", "AG Grid", "Zustand", "Redux", "Recharts"],
    tools: ["Git", "Webpack", "Jest", "Vite", "Vitest", "Jira"],
  };

  const experiences = [
    {
      title: "Development Engineer 3",
      company: "Leading Telecom Company",
      period: "2023 - Present",
      achievements: [
        "Developed a network automation frontend using React.js, Next.js, and Shadcn/UI",
        "Built and maintained a network graph wrapper library using Cytoscape.js & React.js, receiving Star awards for exceptional contribution",
        "Led the implementation of modern UI components with Tailwind CSS and state management with Zustand",
        "Mentored junior developers and conducted code reviews to maintain high code quality standards",
      ],
    },
    {
      title: "Application Development Specialist",
      company: "Accenture",
      period: "2021 - 2023",
      achievements: [
        "Developed multiple customer-facing brand websites with optimized performance metrics (CLS < 0.1)",
        "Created interactive product galleries and media carousels for enhanced user engagement",
        "Built investment banking applications using TypeScript & React.js, earning the Apex Award",
        "Implemented a comprehensive financial advisor registration system with team management",
        "Designed and developed a dashboard using AG Grid with advanced filtering capabilities",
        "Created an efficient investment style tracking system",
      ],
    },
    {
      title: "Associate (Projects)",
      company: "Cognizant",
      period: "2016 - 2020",
      achievements: [
        "Started career as a Mainframe developer and successfully transitioned to frontend development",
        "Developed automation tools for loading Missing SKUs/UPCs in POS machines using Core Java",
        "Automated daily electronic journal file processing, improving operational efficiency",
        "Implemented ORPOS and IBM POS solutions for multiple offshore locations",
        "Created frontend dashboards to monitor retail POS metrics across global locations",
        "Contributed to Agile team processes and maintained version control using Git",
      ],
    },
  ];

  const achievements = [
    {
      title: "SKY Star Award",
      description:
        "Recognized for exceptional contribution to network automation project",
      year: "2024",
    },
    {
      title: "SKY Star Award",
      description:
        "Recognized for exceptional contribution to network graph project",
      year: "2024",
    },
    {
      title: "Accenture Apex Award",
      description:
        "Outstanding performance in investment banking application development",
      year: "2023",
    },
    {
      title: "Star Performer of the Quarter",
      description: "Recognized for exemplary work in retail project",
      year: "2019",
    },
  ];

  const colorSchemes = {
    modern: {
      primary: "from-blue-600 to-indigo-700",
      secondary: "from-slate-50 to-blue-50",
      accent: "text-blue-600",
      cardBg: "bg-white/90",
      textPrimary: "text-slate-900",
      textSecondary: "text-blue-700",
    },
  };

  const colorScheme = colorSchemes.modern;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <nav className="bg-white/70 backdrop-blur-md sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-blue-500">
                {personalInfo.name}
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className={colorScheme.accent}>
                About
              </a>
              <a href="#experience" className={colorScheme.accent}>
                Experience
              </a>
              <a href="#skills" className={colorScheme.accent}>
                Skills
              </a>
              <a href="#contact" className={colorScheme.accent}>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="about"
        className={`bg-gradient-to-b ${colorScheme.primary} py-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-48 h-48 rounded-full border-4 border-white/20 shadow-xl overflow-hidden flex items-center justify-center">
                <img
                  src={pic}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  style={{
                    minWidth: "100%",
                    minHeight: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
            <div className="md:w-2/3 text-white">
              <h1 className="text-4xl font-bold mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl font-medium text-blue-100 mb-4">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                {personalInfo.introduction}
              </p>
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="bg-white text-blue-600 hover:bg-blue-50 flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Technical Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="shadow-lg">
                <CardHeader>
                  <CardTitle>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center text-blue-700"
                      >
                        <span className="mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Achievements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-500" />
                    <CardTitle>{achievement.title}</CardTitle>
                  </div>
                  <CardDescription>{achievement.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription>{exp.company}</CardDescription>
                    </div>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className={`bg-gradient-to-b ${colorScheme.primary} py-16`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-blue-100 mb-6">
            Looking for a frontend developer? Let's connect and discuss your
            project.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Sribalajia2710"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-8 h-8 text-blue-100 hover:text-white transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/Sri-balaji-a-48743077/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-8 h-8 text-blue-100 hover:text-white transition-colors" />
            </a>
            <a href="mailto:Sribalaji.anbarasu@@outlook.com">
              <Mail className="w-8 h-8 text-blue-100 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
