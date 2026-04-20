import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Bhairavacha Bhandara</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Redesigned and optimized the UI of a ticket booking platform using React and Tailwind CSS. Collaborated with designers and backend teams to deliver product-aligned features efficiently. Integrated Supabase for backend services and streamlined admin panel functionality.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelancing</h4>
                <h5>Media One PR</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed a responsive PR agency website using React and Tailwind CSS. Built reusable UI components and optimized performance using Vite. Structured and presented high-impact content highlighting 1M+ campaign impressions and 50+ industry collaborations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (AI ML)</h4>
                <h5>Newton School of Technology, ADYPU</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Passionate Computer Science student specializing in AI-ML with hands-on experience in web development. Grade: 5.84/10.0. Focus on delivering impactful and innovative tech solutions through collaborative project execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
