import React from "react";
const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3690.7654139846695!2d73.246953!3d22.32471!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9fc0ebd9e27%3A0xea7d0f6b7843c44d!2sSolexpert%20Solar%20Panel%20Cleaning%20Service!5e0!3m2!1sen!2sin!4v1710001384912!5m2!1sen!2sin"
        style={{
          border: 0,
          width: "100%",
          height: "450px",
        }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default AddressMap;
