import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.9011363246486!2d124.64652157477421!3d8.508979691533039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff256565b6711%3A0xd90b9da445a17573!2sBonbon%20Barangay%20Hall!5e0!3m2!1sfil!2sph!4v1731939649689!5m2!1sfil!2sph"
        className="w-full h-[90vh] max-lg:h-[45vh]  max-sm:h-[30vh]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Embed"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
