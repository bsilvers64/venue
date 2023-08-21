import React from "react";

function Location() {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d70607.4103463302!2d-80.29766788114023!3d25.967104762298007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9af0497b5f3a9%3A0x5815e194c60bf9db!2sHard%20Rock%20Stadium!5e0!3m2!1sen!2sus!4v1692607361183!5m2!1sen!2sus"
        width="100%"
        height="500px"
        title="gglmaps"
        allowfullscreen=""
      ></iframe>

    <div className="location_tag">
        <div>
            Location
        </div>
    </div>

    </div>
  );
}

export default Location;
