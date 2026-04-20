import "./styles/Career.css";

const Career = () => {
  return (
    <section className="career-section timeline-section section-container">
      <div className="career-container">
        <h2>Education</h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Technology (AI ML)</h4>
                <h5>Newton School of Technology, ADYPU</h5>
              </div>
              <h3>2024-2028</h3>
            </div>
            <p>
              Focused on applied AI-ML foundations, software engineering, and real-world product development through hands-on projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate (Class XII)</h4>
                <h5>Pace Junior Science College, Kalyan</h5>
              </div>
              <h3>2023-2024</h3>
            </div>
            <p>
              Built strong fundamentals in mathematics, science, and analytical problem-solving that now support my engineering workflow.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Matriculation (Class X)</h4>
                <h5>Smt. K.C. Gandhi English School, Kalyan</h5>
              </div>
              <h3>2021-2022</h3>
            </div>
            <p>
              Completed core school education with emphasis on discipline, communication, and a strong base for technical learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
