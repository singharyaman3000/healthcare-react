import React from "react";
import Imagecom from "../../components/Imagecom";
import Locationcom from "../../components/Locationcom";
import banner from "../../image/location-banner.jpg";
const Location = ({ setShow }) => {
  setShow(true);
  const Locations = [
    {
      title: "HEALTHCARE MEDICAL CENTER",
      location: "3947 Terry Lane, Winter Park Florida, 32789",
      phoneno: "(561) 223-1234",
      map: (
        <iframe
          title="HEALTHCARE MEDICAL CENTER"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d56047.81003023557!2d-81.35725!3d28.600133!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7655760ff3823%3A0x908f4ff6df22a0ea!2sWinter%20Park%2C%20FL%2032789%2C%20USA!5e0!3m2!1sen!2sin!4v1653465789602!5m2!1sen!2sin"
          style={{ borderRadius: "5px" }}
          allowfullscreen=""
          loading="fast"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      link: "https://goo.gl/maps/TxwSxwowpBhBgQfM6",
    },
    {
      title: "ALEGO HEALTH CO.",
      location: "3007 Cotter Lake Cir, Missouri City,TX, 77459",
      phoneno: "(912) 523-5983",
      map: (
        <iframe
          title="ALEGO HEALTH CO."
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6940.1228521680705!2d-95.576763!3d29.572816000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e5e410135fbb%3A0x22f88f179471f996!2s3007%20Cotter%20Lake%20Cir%2C%20Missouri%20City%2C%20TX%2077459%2C%20USA!5e0!3m2!1sen!2sin!4v1653465966902!5m2!1sen!2sin"
          style={{ borderRadius: "5px" }}
          allowfullscreen=""
          loading="fast"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      link: "https://goo.gl/maps/2mR47Yma3weQNumSA",
    },
    {
      title: "ECHO HEALTH CENTER",
      location: "1950 Lacrosse St, Pittsburgh,PA, 15218",
      phoneno: "(412) 371-0234",
      map: (
        <iframe
          title="ECHO HEALTH CENTER"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6074.398742931052!2d-79.883211!3d40.426584000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834ee7a55e71d0d%3A0x977e71d384f36343!2s1950%20Lacrosse%20St%2C%20Pittsburgh%2C%20PA%2015218%2C%20USA!5e0!3m2!1sen!2sin!4v1653466124483!5m2!1sen!2sin"
          style={{ borderRadius: "5px" }}
          allowfullscreen=""
          loading="fast"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      link: "https://goo.gl/maps/3FvbjxvrCYBkB5Fz9",
    },
    {
      title: "HAWTHORNE HEALTH CORP.",
      location: "1069 Forest Creek Dr, Garland,TX, 75043",
      phoneno: "(660) 213-3338",
      map: (
        <iframe
          title="HAWTHORNE HEALTH CORP."
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6703.152023388166!2d-96.615877!3d32.856476!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea65320475d27%3A0xf4509d7db92083b4!2sDuck%20Creek%20Dr%2C%20Garland%2C%20TX%2075043%2C%20USA!5e0!3m2!1sen!2sin!4v1653466288074!5m2!1sen!2sin"
          style={{ borderRadius: "5px" }}
          allowfullscreen=""
          loading="fast"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      ),
      link: "https://goo.gl/maps/77QJzJFjytcm3q3k9",
    },
  ];
  return (
    <div>
      <Imagecom
        image={banner}
        path={"home"}
        content={"Loactions"}
        title={"LOCATIONS"}
      />
      <div className="block">
        <h1 style={{ color: "#214e66" }}>HEALTHCARE LOCATIONS</h1>
        <Locationcom Locations={Locations} />
      </div>
    </div>
  );
};

export default Location;
