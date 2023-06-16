import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="container my-2">
        <h1 className="mb-5">About Us</h1>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                <strong>Our Mission</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse">
              <div className="accordion-body">At iNotebook, we believe in the power of words and the importance of staying organized. Our mission is to provide a simple, user-friendly notes taking app that enhances your productivity and keeps your thoughts well-structured. Whether you're a student, professional, or simply someone who loves to jot down ideas, iNotebook is here to accompany you on your journey of note-taking and organization.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                <strong>Account Creation and Note Management Made Easy</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
              <div className="accordion-body">
                Creating an account with iNotebook is quick and hassle-free. Simply sign up, and you'll unlock a world of organized note-taking possibilities. Once you're in, you can start <strong>creating, editing, and deleting notes</strong> effortlessly. Our intuitive and user-friendly interface ensures that you can focus on your thoughts rather than struggling with complex features.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <strong>Tagging for Efficient Organization</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
              <div className="accordion-body">We understand that finding the right note at the right time is crucial. That's why we've implemented a robust tagging system within iNotebook. With tags, you can categorize your notes based on topics, projects, or any other criteria that make sense to you.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                <strong>Secure Storage for Your Peace of Mind</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse">
              <div className="accordion-body">At iNotebook, we take the security and privacy of your data seriously. We employ industry-standard encryption and data protection protocols to ensure that your login information and notes are kept secure. You can trust us to handle your personal information with the utmost care, allowing you to focus on your note-taking without worrying about data breaches or unauthorized access.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                <strong>Free to Use, Unlimited Potential</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse">
              <div className="accordion-body">We believe that great tools should be accessible to everyone, which is why iNotebook is completely free to use. There are no hidden costs or premium features behind paywalls. We want to empower as many individuals as possible to unleash their creativity and boost their productivity through organized note-taking. Your journey with iNotebook starts and continues without any financial burden.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
