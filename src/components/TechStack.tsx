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
import { MdTableChart } from "react-icons/md";

type StackLogo = {
  name: string;
  icon: IconType;
  color: string;
};

const techLogos: StackLogo[] = [
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML", icon: SiHtml5, color: "#E34F26" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Power BI", icon: SiPowerbi, color: "#F2C811" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Prisma ORM", icon: SiPrisma, color: "#2D3748" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Excel", icon: MdTableChart, color: "#217346" },
  { name: "Express JS", icon: SiExpress, color: "#FFFFFF" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Nginx", icon: SiNginx, color: "#009639" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Canva", icon: SiCanva, color: "#00C4CC" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
];

const TechStack = () => {
  return (
    <section className="techstack" id="techstack">
      <h2>My Techstack</h2>
      <div className="techstack-logos section-container">
        {techLogos.map((item) => (
          <div
            key={item.name}
            className="tech-logo-item"
            data-cursor={"disable"}
            title={item.name}
            aria-label={item.name}
          >
            <item.icon style={{ color: item.color }} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
