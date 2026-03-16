import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-me">

        <h3 className="about-title">
          ABOUT <span>ME</span>
        </h3>

        <p className="about-intro">
          Hello, I'm <span className="highlight">Sanskar Devidas Dherange</span> — a
          Computer Science student and passionate developer building
          <span className="highlight"> AI-powered systems</span>,
          automation workflows, and modern web applications.
        </p>

        <p className="about-text">
          My focus is on creating intelligent solutions using technologies like
          <span className="tech"> React.js</span>,
          <span className="tech"> Node.js</span>,
          <span className="tech"> APIs</span>, and
          <span className="tech"> AI platforms</span>.
          I love designing systems that automate tasks, improve productivity,
          and deliver real-world impact.
        </p>

        <p className="about-text">
          I have built projects such as
          <span className="highlight"> AI Resume Review Bots</span>,
          <span className="highlight"> YouTube Automation Systems</span>,
          and
          <span className="highlight"> AI tools for personal brands</span>.
        </p>

        <p className="about-text last">
          My mission is to build innovative products and companies that merge
          <span className="highlight"> technology</span>,
          <span className="highlight"> creativity</span>, and
          <span className="highlight"> entrepreneurship</span>.
        </p>

      </div>
    </section>
  );
};

export default About;