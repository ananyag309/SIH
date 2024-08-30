import logo from '../assets/images/logog20.png'


const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="cf">
          <div id="logo">
            <a title="RailMadad, A Grievance Redressal Mechanism" className="logo" href="home.html">
              <img
                style={{ height: '70px', width: '170px' }}
                className="p1 pr-3 pt-2"
                src={logo}
                alt="RailMadad, A Grievance Redressal Mechanism"
              />
              <h1>
                <span className="RailMadadL">RailMadad</span>
              </h1>
              <p>
                <span className="CaptionL">A Grievance Redressal Mechanism</span>
              </p>
            </a>
          </div>
          <div className="headerRight">
            <div className="medicalNumber">
              <a href="tel:139" className="numberValue">
                <span className="icon sprite"></span>139
              </a>
              <p className="medical">
                For Security/Medical <br /> Assistance
              </p>
            </div>
            <ul className="buttonList">
              <li>
                <a href="#" className="headerBtn loginBtn loginClearInput" title="Login">
                  <span className="LogInL">Login</span>
                </a>
              </li>
              <li>
                <a href="#" className="headerBtn signUpBtn loginClearInput" title="Sign Up">
                  <span className="SignUp">Sign Up</span>
                </a>
              </li>
              <li>
                <select
                  className="languageDropdown"
                  id="langdropdown"
                  onChange={() => changelangdropdown('')}
                  title="Select Language"
                >
                  <option value="en" selected="selected">
                    English
                  </option>
                  <option value="hi">हिन्दी</option>
                  <option value="bn">বাংলা</option>
                  <option value="mr">मराठी</option>
                  <option value="gu">ગુજરાતી</option>
                  <option value="kn">ಕನ್ನಡ</option>
                  <option value="ml">മലയാളം</option>
                  <option value="pa">ਪੰਜਾਬੀ</option>
                  <option value="or">ଓଡ଼ିଆ</option>
                  <option value="sa">संस्कृत</option>
                  <option value="ta">தமிழ்</option>
                  <option value="te">తెలుగు</option>
                  <option value="ur">اردو</option>
                </select>
              </li>
              <li>
                <div>
                  <img
                    id="image"
                    alt="Login"
                    style={{ width: '50px', height: '40px' }}
                    src="images/google_mic.png"
                    onClick={() => runSpeechRecog()}
                  />
                  <label id="action" style={{ color: 'grey' }}></label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
