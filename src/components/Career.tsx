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
                <h4>Full Stack Developer</h4>
                <h5>360XpertSolutions</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Built 6+ complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>3zBio</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Led two development teams on 3zBio, a large-scale insurance
              operations platform. Developed multiple modules using React.js &
              migrated critical functionalities to Node.js microservices And Also Buit A Voice and Chatbots.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Local Reviews</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Its a US company where I am working and responsible for developing and
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Full Stack Lead Developer</h4>
                <h5>Tronics Digital</h5>
              </div>
              <h3>Now</h3>
            </div>
            <p>
              As a Senior Full‑Stack Lead Developer, I lead a team of 6 engineers to deliver production‑ready, enterprise‑grade solutions across web, mobile, and e‑commerce platforms.

Built Solid, a proprietary low‑code platform using Angular, Next.js, and NestJS
Delivered CMS‑based solutions, including:
E‑commerce platforms
CRM systems
Import/export automation
Led development for:
Web applications
Mobile applications
WordPress & Shopify storefronts and integrations
This combines hands‑on architecture, team leadership, and full‑stack execution across modern stacks and business domains.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
