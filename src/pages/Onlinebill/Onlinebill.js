import React from "react";
import Imagecom from "../../components/Imagecom";
import banner from "../../image/carrer-banner.jpg";
import "./onlinebill.css";
const Onlinebill = ({ setShow }) => {
  setShow(true);
  return (
    <div>
      <Imagecom
        image={banner}
        path={"home"}
        content={"Online Bill Pay"}
        title={"PAY YOUR BILL ONLINE"}
      />
      <div className="block" style={{ color: "#184f68" }}>
        <form action="#">
          <h3
            style={{ color: "#00bcbd", fontSize: "20px", paddingBlock: "20px" }}
          >
            MAKE A PAYMENT
          </h3>
          <p>
            Please fill out the information below to get started with your
            online payment. If you have any questions about your bill or the
            past due amount, please contact the Patient Financial Services
            office at (561) 223-1234 Monday through Friday from 8 a.m. to 5 p.m.
          </p>
          <div className="onlinebill">
            <div>
              <p>Please enter your mobile number</p>
              <input type="text" />
            </div>
            <div>
              <p>Please enter your account number:</p>
              <input type="text" />
            </div>
            <div>
              <p>Payment amount</p>
              <input type="text" />
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <input type="submit" value="Continue" className="billcontinuebtn" />
            <input type="reset" value="Reset" className="billresetbtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Onlinebill;
