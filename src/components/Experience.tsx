import "./styles/Career.css";

const Experience = () => {
  return (
    <section className="career-section timeline-section section-container experience-section">
      <div className="career-container">
        <h2>Experience</h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Bhairavacha Bhandara - Ticket Booking Site, Pune</h5>
              </div>
              <h3>Mar 2025 - May 2025</h3>
            </div>
            <p>
              Redesigned and optimized the UI of a ticket booking platform using React and Tailwind CSS, improving usability and responsiveness. Collaborated with designers and backend teams to deliver product-aligned features efficiently and ensure seamless integration. Integrated Supabase for backend services, enabling real-time data handling and streamlined admin panel functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
