import "./styles/TechStack.css";
import { IconType } from "react-icons";
import {
  SiTypescript,
  SiHtml5,
  SiJavascript,
  SiPython,
  SiPowerbi,
  SiFigma,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiPrisma,
  SiNodedotjs,
  SiBootstrap,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiDocker,
  SiFirebase,
  SiNginx,
  SiPostman,
  SiCanva,
  SiGithubactions,
  SiSupabase,
  SiAmazon,
  SiJira,
} from "react-icons/si";
import {
  MdTableChart,
  MdDesignServices,
  MdBrush,
  MdTerminal,
  MdAccountTree,
  MdPsychology,
  MdAutoAwesome,
  MdFactCheck,
  MdSecurity,
} from "react-icons/md";

type StackItem = {
  name: string;
  icon: IconType;
};

type StackCategory = {
  title: string;
  items: StackItem[];
};

const stackCategories: StackCategory[] = [
  {
    title: "Computer Languages",
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: SiHtml5 },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Data Tools",
    items: [{ name: "Power BI", icon: SiPowerbi }],
  },
  {
    title: "Software Packages",
    items: [
      { name: "Figma", icon: SiFigma },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "React Native", icon: SiReact },
      { name: "Prisma ORM", icon: SiPrisma },
      { name: "React", icon: SiReact },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Excel", icon: MdTableChart },
      { name: "Express JS", icon: SiExpress },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    title: "Additional Courses",
    items: [{ name: "Data Structure", icon: MdAccountTree }],
  },
  {
    title: "Soft Skills",
    items: [
      { name: "Decision-making", icon: MdFactCheck },
      { name: "Creativity", icon: MdAutoAwesome },
      { name: "Critical Thinking", icon: MdPsychology },
    ],
  },
  {
    title: "Others",
    items: [
      { name: "Git and GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Firebase", icon: SiFirebase },
      { name: "Nginx", icon: SiNginx },
      { name: "Postman", icon: SiPostman },
      { name: "Canva", icon: SiCanva },
      { name: "UI/UX", icon: MdDesignServices },
      { name: "Graphic Design", icon: MdBrush },
      { name: "Bash Scripting", icon: MdTerminal },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Supabase", icon: SiSupabase },
      { name: "OAuth 2.0", icon: MdSecurity },
      { name: "AWS", icon: SiAmazon },
      { name: "Jira", icon: SiJira },
      { name: "Git", icon: SiGit },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="techstack" id="techstack">
      <h2>My Techstack</h2>
      <div className="techstack-grid section-container">
        {stackCategories.map((category) => (
          <article key={category.title} className="tech-card">
            <h3>{category.title}</h3>
            <div className="tech-chip-list">
              {category.items.map((item) => (
                <div key={item.name} className="tech-chip" data-cursor={"disable"}>
                  <item.icon />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
