import React from "react";

const ContactBanner = () => {
  return (
    <section className="rounded-lg p-5 flex justify-evenly flex-wrap items-center dark:bg-gray-900 dark:text-gray-50">
      <div className="flex justify-around w-full flex-wrap items-center">
      <div className="flex flex-col justify-center my-5 items-center mx-5">
        <h1 className="text-4xl font-bold">Get in touch</h1>
        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
        <div className="space-y-4">
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 sm:mr-6"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>5775 Blue Lagoon Dr, Suite 102 Miami, FL 33126 </span>
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 sm:mr-6"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>(305) 433-4777</span>
          </p>
          <p className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 mr-2 sm:mr-6"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>Contactus@yestravel.us</span>
          </p>
        </div>
      </div>
      <div className="">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14370.44500828898!2d-80.29078!3d25.783401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9c3b0bcec1b%3A0xfd983da3054e6685!2s5775%20Blue%20Lagoon%20Dr%20Suite%20102%2C%20Miami%2C%20FL%2033126%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1675726296524!5m2!1ses-419!2spe"
  style={{
    width: '100%',
    height: '400px',
    maxWidth: '500px',
    maxHeight: '400px',
    border: 0
  }}
  className="rounded-lg"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>
</div>

      </div>
    </section>
  );
};

export default ContactBanner;
