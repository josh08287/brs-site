import React from 'react';

const Home = () => (
  <div className="content-container">
    <div className="content-title-group">
      <h2 className="title">Blaines Repair Service and Towing, Inc.</h2>
      <p>Schedule your vehicle service!</p>
	  <iframe title="booking_frame" src='https://outlook.office.com/owa/calendar/BlainesRepairServiceInc@blainesrepair.com/bookings/' width='100%' height='100%' scrolling='yes' style='border:0'></iframe>
    </div>
  </div>
  <script type="text/javascript" src="https://res.public.onecdn.static.microsoft/customerconnect/v1/7dttl/init.js" id="chatbot" environmentId="edc504bf-7d61-efc4-b524-281619104415" crossorigin="anonymous"></script>
);

export default Home;
