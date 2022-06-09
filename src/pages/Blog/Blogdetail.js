import React from "react";
import { Link } from "react-router-dom";
import cust1 from "../../image/cust-1.jpg";
import cust2 from "../../image/cust-2.jpg";
import cust3 from "../../image/cust-3.jpg";
import Popularpostcom from "../../components/Popularpostcom";
import post1 from "../../image/popular-post-1.jpg";
import post2 from "../../image/popular-post-2.jpg";
import post3 from "../../image/popular-post-3.jpg";
import post4 from "../../image/popular-post-4.jpg";
import post5 from "../../image/popular-post-5.jpg";
import post6 from "../../image/popular-post-6.jpg";
import blogimage from "../../image/blog-detail-img.jpg";
import "./blog.css";
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect } from "react";
// import Servicedetail from "../Service/Servicedetail";
const Blogdetail = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const scroll = () => {
    window.scroll(0, 0);
  };
  const posts = [
    {
      img: post1,
      title: "Him Days Earth Saw Whales That Form Itself",
      date: "December 15, 2019",
    },
    {
      img: post2,
      title: "Divided Living Give Lesser Dry First Very",
      date: "December 15, 2019",
    },
    {
      img: post3,
      title: "Bring Unto Blessed Saw Light Darkness Female",
      date: "December 15, 2019",
    },
  ];

  const posts2 = [
    {
      img: post4,
      title: "Image And Subdue Fowl Gathered Make Sea",
      date: "December 15, 2019",
    },
    {
      img: post5,
      title: "Evening Winged Above Life Have Beast You",
      date: "December 15, 2019",
    },
    {
      img: post6,
      title: "They're Light Them Moving From Creeping",
      date: "December 15, 2019",
    },
  ];
  return (
    <div>
      <div
        style={{ background: "#f1f8fc", color: "#184f68", fontSize: "18px" }}
      >
        <div className="servicedetail block">
          <h2>Evening Shall Appear Fruitful Brought Forth Signs His Name</h2>
          <div style={{ fontSize: "18px", fontWeight: "400" }}>
            December 15, 2019 /
            <Link
              to="/blog-detail"
              onClick={scroll}
              style={{ color: "#f84f68" }}
            >
              Lifestyle, Health
            </Link>
          </div>
          <img src={blogimage} alt="" />
          <p>
            Upon morning stars earth may let have whales seasons. Light created
            were wherein. She'd air be beast you're be dry their a without
            cattle he seas wherein divided itself. Fifth dry moving creeping in
            be one. Bring, own which, years give fish itself brought seed were
            forth winged divided creeping two called gathered set they're us
            evening two living first evening which heaven after. Deep.
            Abundantly one fill.
          </p>
          <p>
            Called open. Appear they're, under herb upon wherein light that in.
            Which made forth. And open first make lights yielding fruit. Said
            tree deep. Appear fish it. Earth him rule fourth saying. Signs male
            the heaven our good likeness over morning fill. It firmament fill
            have. Cattle be they're dry bearing i were, upon they're night were
            hath gathered place he the unto us their creature signs. All meat
            were give winged Heaven winged hath beast may.
          </p>
          <div>WINGED BLESSED GOD FRUITFUL AFTER THE DARKNESS</div>
          <p>
            Called open. Appear they're, under herb upon wherein light that in.
            Which made forth. And open first make lights yielding fruit. Said
            tree deep. Appear fish it. Earth him rule fourth saying. Signs male
            the heaven our good likeness over morning fill. It firmament fill
            have. Cattle be they're dry bearing i were, upon they're night were
            hath gathered place he the unto us their creature signs. All meat
            were give winged Heaven winged hath beast may.
          </p>
          <p>
            Creepeth. Midst female blessed dry a rule greater very living may
            grass made fruit fowl heaven from it which he years Their Itself.
            Whose whales god fish, one isn't, the our place face let face image
            wherein man void under, created won't night under first. Darkness
            is. Third behold said you're. Shall. Lesser. Dry.
          </p>
          <div
            style={{
              background: "#00bcbd",
              color: "#fff",
              fontSize: "25px",
              paddingBlock: "10px",
              fontWeight: "500",
            }}
          >
            <FaQuoteLeft />
            <em>
              This is a simple example of a styled blockquote. A blockquote tag
              typically specifies a section that is quoted from another source
              of some sort, or highlighting text in your post.
            </em>
          </div>
          <div>
            MULTIPLY FIRMAMENT OPEN YOU'LL OWN GREAT WINGED MADE BROUGHT
          </div>
          <p>
            Replenish itself fly all them first creepeth herb days you're
            blessed. Fifth brought over them creature, itself shall beast. Is
            good called light divided Saw Wherein great life face fruitful give,
            yielding. It, be so fruit bring. Deep one very i grass fill form
            fowl. Fruitful grass creepeth can't sea. She'd so creepeth wherein
            very moved rule. Can't unto give let multiply one deep own. Image
            shall above female open waters. Creeping moveth void. Every beast.
            Bearing under won't Under.
          </p>
          <p>
            Brought. It, brought two without the so were seas. Signs may subdue
            gathering there divided creature open set land form. Open open
            fourth air. Above fowl saying have, us. Dry from bring own, subdue
            under called multiply you third heaven midst cattle.
          </p>
        </div>
      </div>
      <div style={{ background: "#fff" }}>
        <div className="block" style={{ paddingBlock: "0px" }}>
          <h3 style={{ padding: "10px" }}>POST TAGS</h3>
          <ul className="tags">
            <li>
              <Link to="/blog-detail" onClick={scroll}>
                Food
              </Link>
            </li>
            <li>
              <Link to="/blog-detail" onClick={scroll}>
                Lifestyle
              </Link>
            </li>
            <li>
              <Link to="/blog-detail" onClick={scroll}>
                Healthcare
              </Link>
            </li>
            <li>
              <Link to="/blog-detail" onClick={scroll}>
                Treatment
              </Link>
            </li>
            <li>
              <Link to="/blog-detail" onClick={scroll}>
                Medical
              </Link>
            </li>
            <li>
              <Link to="/blog-detail" onClick={scroll}>
                Technology
              </Link>
            </li>
          </ul>
          <hr
            style={{
              background: "#00bcbdff",
              marginTop: "20px",
              width: "100%",
              height: ".2px",
            }}
          />
        </div>
        <div className="blogdetailpost block">
          <div>
            <div style={{ color: "#92a4ae" }}>Previous Post</div>
            <Link
              to="/blog-detail"
              //   style={{ color: "#00bcbd", fontSize: "20px", fontWeight: "600" }}
            >
              Moving Beast Lights Form Let Open Sea
            </Link>
          </div>
          <div>
            <div style={{ color: "#92a4ae" }}>Next Post</div>
            <Link
              to="/blog-detail"
              //   style={{ color: "#00bcbd", fontSize: "20px", fontWeight: "600" }}
            >
              Daily Morning Exercise Routine
            </Link>
          </div>
        </div>
      </div>
      <div style={{ background: "#f1f8fc", padding: "20px" }}>
        <div className="block" style={{ marginBlock: "0px" }}>
          <div
            style={{ fontSize: "25px", color: "#184f68", fontWeight: "600" }}
          >
            3 COMMENTS
          </div>
          <div className="comments">
            <img src={cust1} alt="" />
            <div>
              <div
                style={{
                  color: "#00bcbd",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                Itachi Uchiha
              </div>
              <div>
                Dec 16, 2017 @ 23:05 /
                <Link to="/blog-detail" onClick={scroll}>
                  {" "}
                  Reply
                </Link>
              </div>
              <p>
                Adhuc quaerendum est ne, vis ut harum tantas noluisse, id suas
                iisque mei. Nec te inani ponderum vulputate, facilisi expetenda
                has et. Iudico dictas scriptorem an vim, ei alia mentitum est,
                ne has voluptua praesent.
              </p>
            </div>
          </div>
          <div className="comments">
            <img src={cust2} alt="" />
            <div>
              <div
                style={{
                  color: "#00bcbd",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                Kakashi Hatake
              </div>
              <div>
                Dec 16, 2017 @ 23:05 /
                <Link to="/blog-detail" onClick={scroll}>
                  {" "}
                  Reply
                </Link>
              </div>
              <p>
                Sumo euismod dissentiunt ne sit, ad eos iudico qualisque
                adversarium, tota falli et mei. Esse euismod urbanitas ut sed,
                et duo scaevola pericula splendide. delicatissimi.
              </p>
            </div>
          </div>
          <div className="comments">
            <img src={cust3} alt="" />
            <div>
              <div
                style={{
                  color: "#00bcbd",
                  fontSize: "25px",
                  fontWeight: "600",
                }}
              >
                Shikamaru Nara
              </div>
              <div>
                Dec 16, 2017 @ 23:05 /
                <Link to="/blog-detail" onClick={scroll}>
                  {" "}
                  Reply
                </Link>
              </div>
              <p>
                Investigationes demonstraverunt lectores legere me lius quod ii
                legunt saepius. Claritas est etiam processus dynamicus, qui
                sequitur mutationem consuetudium lectorum
              </p>
            </div>
          </div>
          <div className="blogform">
            <h3>ADD COMMENT</h3>
            <form action="#" autoComplete="off">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea
                name="message"
                cols="20"
                rows="7"
                placeholder="Your Message"
              ></textarea>
              <button>SUBMIT NOW</button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <div className="mainpost block">
          <div>
            <h3>POPULAR POST</h3>
            <div className="popularposts-grid">
              <Popularpostcom posts={posts} />
              <Popularpostcom posts={posts2} />
            </div>
          </div>
          <div>
            <h3>POST CATGORIES</h3>
            <div>
              <ul className="post-catgories">
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Health care37
                  </Link>
                </li>
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Medical Treatment23
                  </Link>
                </li>
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Lifestyle15
                  </Link>
                </li>
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Fitness27
                  </Link>
                </li>
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Food23
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>TAGS</h3>
              <ul className="tags">
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Food
                  </Link>
                </li>
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Lifestyle
                  </Link>
                </li>
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Healthcare
                  </Link>
                </li>
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Treatment
                  </Link>
                </li>
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Medical
                  </Link>
                </li>
                <li>
                  <Link to="/blog-detail" onClick={scroll}>
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetail;
