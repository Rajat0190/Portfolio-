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
                <h4>Machine Learning Intern</h4>
                <h5>TECHCRATS</h5>
              </div>
              <h3>WORK</h3>
            </div>
            <p>
              Developed a Spotify clone using Python machine learning, specializing in data visualization and processing. Enhanced proficiency in various libraries throughout the project, contributing to team success and project completion.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Application (BCA)</h4>
                <h5>KR MANGALAM UNIVERSITY</h5>
              </div>
              <h3>ACADEMICS</h3>
            </div>
            <p>
              Pursuing BCA with focus on Web Development, Software Engineering, and Database Management. Completed 12th Grade with 88%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Volunteer & Participant</h4>
                <h5>Befikra Bachpan & IIT Mandi</h5>
              </div>
              <h3>VOLUNTEER</h3>
            </div>
            <p>
              Active volunteer at Befikra Bachpan Innovative Foundation, cultivating leadership and public dealing. Participant at IIT Mandi Drone and Robotics Boot Camp.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
