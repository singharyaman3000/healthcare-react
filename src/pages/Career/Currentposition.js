import React from "react";
import Positioncom from "./Positioncom";

const Currentposition = () => {
  const positions = [
    { position: "Technical Ambassador" },
    { position: "Account Excutive" },
    { position: "Infection Control Officer" },
    { position: "Research Associate" },
    { position: "AR Analyst" },
    { position: "HCC Medical Coding" },
    { position: "Head - Human Resource" },
    { position: "Medical Transcriptionist" },
    { position: "Medical Representative" },
    { position: "Orthopaedic Surgeon" },
  ];
  return (
    <div className="block">
      <h3
        style={{
          color: "#184f68",
          textAlign: "center",
          fontSize: "40px",
          padding: "20px",
        }}
      >
        CURRENT POSITIONS
      </h3>
      <Positioncom positions={positions} />
    </div>
  );
};

export default Currentposition;
