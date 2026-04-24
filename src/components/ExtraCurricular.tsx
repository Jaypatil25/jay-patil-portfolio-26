import "./styles/ExtraCurricular.css";
import { FaTrophy, FaUsers, FaCode, FaPalette } from "react-icons/fa";
import { IconType } from "react-icons";

type Activity = {
  title: string;
  organization: string;
  description: string;
  icon: IconType;
  highlight?: string;
  color: string;
};

const activities: Activity[] = [
  {
    title: "Indian Innovation Council Hackathon",
    organization: "SIT Pune – Project Morpheus",
    description:
      "Won Silver at national level, competing against 120+ teams, showcasing innovation and technical execution.",
    icon: FaTrophy,
    highlight: "National Silver Winner",
    color: "#FFD700",
  },
  {
    title: "Open-Source Contributor",
    organization: "DrawDB",
    description:
      "Added a new feature to the DrawDB open-source project, which was successfully reviewed and merged, enhancing its database design capabilities.",
    icon: FaCode,
    highlight: "Feature Merged",
    color: "#00FF88",
  },
  {
    title: "Smart India Hackathon (SIH)",
    organization: "SIH",
    description:
      "Cleared college-level round, demonstrating problem-solving and teamwork skills.",
    icon: FaUsers,
    highlight: "College Round",
    color: "#FF6B9D",
  },
  {
    title: "Go For Gold (ICPC Elite Bootcamp)",
    organization: "Core Community Member - Design",
    description:
      "Designed official logo and event goodies, building strong brand identity.",
    icon: FaPalette,
    highlight: "Design Lead",
    color: "#A78BFA",
  },
];

const ExtraCurricular = () => {
  return (
    <section className="extracurricular-section section-container">
      <div className="extracurricular-header">
        <h2>Extra-Curricular Activities</h2>
        <div className="header-glow"></div>
      </div>
      <p className="extracurricular-subtitle">
        Beyond the code - achievements that shaped my journey
      </p>
      <div className="activities-grid">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="activity-card"
            style={
              {
                "--card-color": activity.color,
              } as React.CSSProperties
            }
          >
            <div className="card-glow"></div>
            <div className="card-border"></div>
            <div className="activity-number">{String(index + 1).padStart(2, "0")}</div>
            <div className="activity-icon-wrapper">
              <div className="icon-glow"></div>
              <activity.icon className="activity-icon" />
            </div>
            <div className="activity-content">
              <div className="activity-header">
                <h3>{activity.title}</h3>
              </div>
              {activity.highlight && (
                <span className="activity-highlight">{activity.highlight}</span>
              )}
              <h4>{activity.organization}</h4>
              <p>{activity.description}</p>
            </div>
            <div className="card-shine"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExtraCurricular;
