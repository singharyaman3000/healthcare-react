import React from "react";
import banner from "../../image/about-banner.jpg";
import { Link } from "react-router-dom";
import Imagecom from "../../components/Imagecom";
import { FaRegQuestionCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";
import Doctors from "../Doctors/Doctors";
import "./findDoctor.css";
// import Search from "../../components/Search";

const Finddoctor = ({ setShow }) => {
  setShow(true);
  const [name, setName] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleform = (e) => {
    e.preventDefault();
    if (!name) toast.warning("please enter doctor name");
    else if (name.match(/^[a-zA-Z ]+$/) == null)
      toast.warning("please enter only alphabets");
    else toast.success("success");
  };
  const handleform1 = (e) => {
    e.preventDefault();
    if (!keyword) toast.warning("please enter keyword or speciality");
    else if (keyword.match(/^[a-zA-Z ]+$/) == null)
      toast.warning("please enter only alphabets");
    else toast.success("success");
  };
  const searchName = Doctors.filter((doctor) =>
    doctor.name.match(RegExp(name, "i"))
  );
  const SearchKeyword = Doctors.filter((doctor) =>
    doctor.speciality.match(RegExp(keyword, "i"))
  );
  return (
    <div style={{ background: "#f1f8fc" }}>
      <Imagecom
        image={banner}
        path={[{ text: "home", link: "" }]}
        content={"Our Doctors"}
        title={"PHYSICIAN DIRECTORY"}
      />
      <div className="block">
        <div
          style={{
            fontSize: "20px",
            fontFamily: "Open sans",
            background: "#00bcbd",
            padding: "10px",
            margin: "20px",
            borderRadius: "5px",
            color: "#fff",
          }}
        >
          <FaRegQuestionCircle />
          To find your doctor, please use the search options below:
        </div>
      </div>
      <div
        className="block"
        style={{
          padding: "20px",
          background: "#fff",
          boxShadow: "1px 1px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ background: "#fff" }}>
          <h6 style={{ fontSize: "20px", color: " rgb(24, 79, 104)" }}>
            SEARCH BY DOCTOR NAME
          </h6>
          <p style={{ fontSize: "15px", color: " rgb(24, 79, 104)" }}>
            Enter the first letters of a doctor’s last name.
          </p>
          <div className="search">
            <form
              action="#"
              onSubmit={handleform}
              noValidate
              autoComplete="off"
            >
              <div className="serachbox">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                />
                <div className="searchResult">
                  {name ? (
                    searchName ? (
                      <ul>
                        {searchName.map((names) => (
                          <li>
                            <Link to={`/our-doctor/${names.username}`}>
                              {names.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null
                  ) : null}
                </div>
              </div>
              {/* {console.log(searchName)} */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="submit"
                  style={{
                    background: "#f84d4f",
                    //   display: "inline-block",
                    color: "#fff",
                    border: "none",
                    padding: "12px",
                    textTransform: "uppercase",
                    borderRadius: "5px",
                  }}
                  value="Search"
                />
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className="block"
        style={{
          padding: "20px",
          background: "#fff",
          boxShadow: "1px 1px 10px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ background: "#fff" }}>
          <h6 style={{ fontSize: "20px", color: " rgb(24, 79, 104)" }}>
            SEARCH BY CONDITION OR SPECIALITY
          </h6>
          <p style={{ fontSize: "15px", color: " rgb(24, 79, 104)" }}>
            Type a keyword, specialty or condition to find the right specialist.
          </p>
          <div className="search">
            <form
              action="#"
              onSubmit={handleform1}
              noValidate
              autoComplete="off"
            >
              <div className="serachbox">
                <input
                  type="text"
                  name="name"
                  placeholder="Keyword"
                  required
                  onChange={(e) => setKeyword(e.target.value)}
                  value={keyword}
                  style={{
                    width: "100%",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                />
                <div className="searchResult">
                  {keyword ? (
                    SearchKeyword ? (
                      <ul>
                        {SearchKeyword.map((keywords) => (
                          <li>
                            <Link to={`/our-doctors/${keywords.username}`}>
                              {keywords.name}-{keywords.speciality}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null
                  ) : null}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="submit"
                  style={{
                    background: "#f84d4f",
                    //   display: "inline-block",
                    color: "#fff",
                    border: "none",
                    padding: "12px",
                    textTransform: "uppercase",
                    borderRadius: "5px",
                  }}
                  value="Search"
                />
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <Search
        title="SEARCH BY DOCTOR NAME"
        content="Enter the first letters of a doctor’s last name."
        placeholder="Name"
      /> */}
      {/* <Search
        title="SEARCH BY DOCTOR NAME"
        content="Enter the first letters of a doctor’s last name."
        placeholder="Keyboard"
      /> */}
      <div
        style={{ textAlign: "center", marginInline: "auto", padding: "20px" }}
      >
        <Link to="/our-doctor" className="link">
          MEET OUR EXPERTS
        </Link>
      </div>
    </div>
  );
};

export default Finddoctor;
