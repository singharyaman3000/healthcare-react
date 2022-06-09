import React, { useState } from "react";
import { toast } from "react-toastify";
import Imagecom from "../../components/Imagecom";
import banner from "../../image/carrer-banner.jpg";
import "./onlinebill.css";
const Onlinebill = ({ setShow }) => {
  setShow(true);
  const [formdata, setFormdata] = useState({
    mobile: "",
    accountno: "",
    amount: "",
  });
  const validate = (e) => {
    e.preventDefault();
    if (handlemobile(formdata.mobile)) {
      toast.warning(handlemobile(formdata.mobile));
    } else if (handleaccount(formdata.accountno))
      toast.warning(handleaccount(formdata.accountno));
    else if (handleamount(formdata.amount))
      toast.warning(handleamount(formdata.amount));
  };
  const handlechange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlemobile = (mobile) => {
    if (!mobile) return "please enter your number";
    else if (
      !mobile.match(/^[0-9]+$/) ||
      mobile.length !== 10 ||
      !mobile.match(/^[6789]/)
    )
      return "enter valid mobile number";
  };
  const handleaccount = (accountno) => {
    if (!accountno) return "please enter account number";
    else if (accountno.length < 10 || accountno.length > 16)
      return "enter valid account number";
  };
  const handleamount = (amount) => {
    if (!amount) return "enter amount";
    else if (!amount.match(/^[0-9]+$/)) return "enter valid amount";
  };

  return (
    <div>
      <Imagecom
        image={banner}
        path={[{ text: "home", link: "" }]}
        content={"Online Bill Pay"}
        title={"PAY YOUR BILL ONLINE"}
      />
      <div className="block" style={{ color: "#184f68" }}>
        <form action="#" onSubmit={validate} autoComplete="off">
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
              <input
                type="text"
                name="mobile"
                value={formdata.mobile}
                onChange={handlechange}
              />
            </div>
            <div>
              <p>Please enter your account number:</p>
              <input
                type="text"
                name="accountno"
                value={formdata.accountno}
                onChange={handlechange}
              />
            </div>
            <div>
              <p>Payment amount</p>
              <input
                type="text"
                name="amount"
                value={formdata.amount}
                onChange={handlechange}
              />
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <input type="submit" value="Continue" className="billcontinuebtn" />
            <input type="reset" className="billresetbtn" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Onlinebill;
