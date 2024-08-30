

const MainContent = () => {
  return (
    <main id="main">
      <div className="homeContent">
        <div className="container h100">
          <div className="colWrap h100 cf">
            <div className="colLeft h100 cf">
              {/* Optional Banner */}
              {/* <div className="addBanner">
                <img
                  src="images/protected-from-corona-img.jpg"
                  width="382"
                  height="200"
                  style={{ backgroundColor: 'white', padding: '8px' }}
                  id="covidimg"
                  alt="Stay Protected from Corona"
                  title="Stay Protected from Corona"
                />
              </div> */}
              <ul className="impLinks">
                <li>
                  <a href="https://www.irctc.co.in/nget/" title="Ticket Booking" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <img src="images/booking-icon-1.png" width="61" height="61" alt="Ticket Booking" />
                    </span>
                    <span className="titleText TicketBooking">
                      Ticket <br /> Booking
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://enquiry.indianrail.gov.in/" title="Train Enquiry" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <img src="images/booking-icon-2.png" width="61" height="61" alt="Train Enquiry" />
                    </span>
                    <span className="titleText TrainEnquiry">
                      Train <br /> Enquiry
                    </span>
                  </a>
                </li>
                <li>
                  <a href="http://www.indianrail.gov.in/" title="Reservation Enquiry" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <img src="images/booking-icon-3.png" width="61" height="61" alt="Reservation Enquiry" />
                    </span>
                    <span className="titleText ReservationEnquiries">
                      Reservation <br /> Enquiry
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://rr.irctc.co.in/#/home" title="Retiring Room Booking" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <img src="images/booking-icon-4.png" width="61" height="61" alt="Retiring Room Booking" />
                    </span>
                    <span className="titleText RR">
                      Retiring <br /> Room Booking
                    </span>
                  </a>
                </li>
                <li>
                  <a href="http://www.indianrailways.gov.in/" title="Indian Railways" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <img src="images/booking-icon-5.png" width="61" height="61" alt="Indian Railways" />
                    </span>
                    <span className="titleText IR">
                      Indian <br /> Railways
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.cris.utsmobile&amp;hl=en_IN" title="UTS Ticketing" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <img src="images/booking-icon-6.png" width="61" height="61" alt="UTS Ticketing" />
                    </span>
                    <span className="titleText UT">
                      UTS <br /> Ticketing
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://www.fois.indianrail.gov.in/RailSAHAY/index.jsp" title="Freight Business" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <img src="images/booking-icon-7.png" width="61" height="61" alt="Freight Business" />
                    </span>
                    <span className="titleText FreightBussiness">
                      Freight <br /> Business
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://parcel.indianrail.gov.in/" title="Railway Parcel Website" target="_blank" rel="noopener noreferrer">
                    <span className="icon">
                      <img src="images/booking-icon-2.png" width="61" height="61" alt="Railway Parcel Website" />
                    </span>
                    <span className="titleText ParcelWebsite">
                      Railway <br /> Parcel Website
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="colRight h100 cf">
              <div className="verticalTab resTab cf">
                <ul className="nav nav-tabs nav-justified tabNav" id="myTab">
                  <li style={{ width: '100%' }}>
                    <a id="train" data-toggle="tab" href="#traincomp" role="tab" aria-controls="home" aria-selected="false">
                      <span className="icon icon1 sprite "></span>
                      <span className="TrainComplaint">Train <br /> Complaints</span>
                    </a>
                  </li>
                  <li style={{ width: '100%' }}>
                    <a id="station" data-toggle="tab" href="#stationcomp" role="tab" aria-controls="profile" aria-selected="false">
                      <span className="icon icon2 sprite"></span>
                      <span className="StationComplaint">Station <br /> Complaints</span>
                    </a>
                  </li>
                  <li style={{ width: '100%' }}>
                    <a id="railanubh-tab" data-toggle="tab" href="#railanubh" role="tab" aria-controls="railanubh" aria-selected="false">
                      <span className="icon icon5 sprite "></span>
                      <span className="RailAnubhav">Rail <br /> Anubhav</span>
                    </a>
                  </li>
                  <li style={{ width: '100%' }}>
                    <a id="freightparcel-tab" data-toggle="tab" href="#freightparcel" role="tab" aria-controls="freightparcel" aria-selected="false">
                      <span className="icon icon3 sprite"></span>
                      <span className="FPTab">Freight/Parcel <br /> Inquiry</span>
                    </a>
                  </li>
                  <li style={{ width: '100%' }}>
                    <a id="track-tab" data-toggle="tab" href="#track" role="tab" aria-controls="contact" aria-selected="false">
                      <span className="icon icon4 sprite"></span>
                      <span className="TrackComplaint">Track your <br /> Concern</span>
                    </a>
                  </li>
                  <li style={{ width: '100%' }}>
                    <a id="suggestions-tab" data-toggle="tab" href="#suggestions" role="tab" aria-controls="suggestions" aria-selected="false">
                      <span className="icon icon5 sprite"></span>
                      <span className="Suggestion">Your Suggestions</span>
                    </a>
                  </li>
                </ul>
                <div className="tabContainer" style={{ minHeight: '615px' }}>
                  <div className="tabContent" id="traincomp" role="tabpanel" aria-labelledby="home-tab"></div>
                  <div className="tabContent" id="stationcomp" role="tabpanel" aria-labelledby="profile-tab"></div>
                  <div className="tabContent" id="railanubh" role="tabpanel" aria-labelledby="railanubh-tab"></div>
                  <div className="tabContent" id="freightparcel" role="tabpanel" aria-labelledby="freightparcel-tab"></div>
                  <div className="tabContent" id="track" role="tabpanel" aria-labelledby="contact-tab"></div>
                  <div className="tabContent" id="suggestions" role="tabpanel" aria-labelledby="suggestions-tab"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
