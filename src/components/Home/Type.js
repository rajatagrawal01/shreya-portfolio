import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior Salesforce Developer",
          "LWC, Apex Classes, Triggers, Sales Cloud Territory Management",
          "Certified Salesforce Platform Developer-II",
          "Lightning Communities, Flow Builder, Approval Process",
          "Agile model, Scrum methodology",
          "Lowe's,IBM,Accenture,TCS",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
