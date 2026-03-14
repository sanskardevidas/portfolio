import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My journey <span>&</span>
          <br /> experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Artificial Intelligence and Machine Learning Diploma Student</h4>
                <h5>Ajeenkya D. Y. Patil School of Engineering and Polytechnic</h5>
              </div>
              <h3>2022-2025</h3>
            </div>

            <p>
              Started my journey in AIML focusing on ML
              development, AI technologies, and modern web applications.
              Learning programming, system design, and building real-world
              projects.
            </p>
          </div>
          {/* AI Automation Work */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Automation Builder</h4>
                <h5>Independent Projects</h5>
              </div>
              <h3>2024</h3>
            </div>

            <p>
              Built multiple AI automation systems using tools like n8n,
              OpenAI APIs, and workflow automation. Developed AI agents,
              automation pipelines, and productivity tools.
            </p>
          </div>
          {/* Education */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Computer Science and AI&ML Student</h4>
                <h5>DY Patil International University</h5>
              </div>
              <h3>2025</h3>
            </div>

            <p>
              Started my journey in Computer Science focusing on software
              development, AI technologies, and modern web applications.
              Learning programming, system design, and building real-world
              projects.
            </p>
          </div>

          {/* Entrepreneur */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Entrepreneur & Developer</h4>
                <h5>Building AI & Web Products</h5>
              </div>
              <h3>NOW</h3>
            </div>

            <p>
              Currently working on AI-powered tools, automation platforms,
              and modern web applications. Building projects like AI Resume
              Review Bot, Personal Brand Booster, and business websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;