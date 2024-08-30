const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="cf">
          <div className="footerColLeft">
            <p className="copyright">
              Copyright ©2019 RAILMADAD. All Rights Reserved.
            </p>
          </div>
          <div className="footerColRight">
            <ul className="footerLinks">
              <li>
                <a href="home.html">
                  <span className="Home">Home</span>
                </a>
              </li>
              <li>
                <a href="#" data-toggle="modal" data-target="#faqModal" className="FAQs">
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title="Railway Admin Login"
                  data-toggle="modal"
                  data-target="#adminModal"
                  className="adminLogin"
                >
                  Railway Admin Login
                </a>
              </li>
              <li>
                <a
                  href="https://railmadad.indianrailways.gov.in/rmmis/final/home.jsp"
                  title="MIS Report Login"
                  target="_blank"
                  className="misReportLogin"
                >
                  MIS Report Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
