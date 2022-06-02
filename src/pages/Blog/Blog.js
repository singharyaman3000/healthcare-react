import React from "react";
import { Link } from "react-router-dom";
import Imagecom from "../../components/Imagecom";
import banner from "../../image/blog-banner.jpg";
import blog1 from "../../image/inner-blog-1.jpg";
import blog2 from "../../image/inner-blog-2.jpg";
import blog3 from "../../image/inner-blog-3.jpg";
import blog4 from "../../image/inner-blog-4.jpg";
import blog5 from "../../image/inner-blog-5.jpg";
import blog6 from "../../image/inner-blog-6.jpg";
import blog7 from "../../image/inner-blog-7.jpg";
import blog8 from "../../image/inner-blog-8.jpg";
import post1 from "../../image/popular-post-1.jpg";
import post2 from "../../image/popular-post-2.jpg";
import post3 from "../../image/popular-post-3.jpg";
import post4 from "../../image/popular-post-4.jpg";
import post5 from "../../image/popular-post-5.jpg";
import post6 from "../../image/popular-post-6.jpg";
import { FaQuoteLeft, FaLink } from "react-icons/fa";
import "./blog.css";
import Popularpostcom from "../../components/Popularpostcom";
const Blog = ({ setShow }) => {
  setShow(true);
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
      <Imagecom
        image={banner}
        path={[{ text: "home", link: "" }]}
        content={"Blog"}
        title={"FROM OUR BLOG"}
      />
      <div
        style={{
          background: "#f1f8fc",
          paddingTop: "0px",
          paddingBottom: "40px",
        }}
      >
        <div className="bloggrid block">
          <div>
            <div style={{ background: "#fff", marginBlock: "10px" }}>
              <img src={blog1} alt="" />
              <div>
                <div style={{ color: "#f84d4f" }}>December 15, 2019</div>
                <Link to="/blog-detail" className="bloglink">
                  Evening Shall Appear Fruitful Brought Forth Signs His Name
                </Link>
                <p style={{ color: "#184f68" }}>
                  Abundantly a for the beginning waters of spirit above, evening
                  beginning herb...
                </p>
              </div>
            </div>
            <div style={{ background: "#fff", marginBlock: "10px" }}>
              <img src={blog2} alt="" />
              <div>
                <div style={{ color: "#f84d4f" }}>November 09, 2019</div>
                <Link to="/blog-detail" className="bloglink">
                  Daily Morning Exercise Routine
                </Link>
                <p style={{ color: "#184f68" }}>
                  Behold you'll days sea you're earth man created lights and
                  for. Very them...
                </p>
              </div>
            </div>
            <div style={{ background: "#fff", marginBlock: "10px" }}>
              <div style={{ color: "#f84d4f" }}>September 13, 2019</div>
              <Link to="/blog-detai" className="bloglink">
                Him Days Earth Saw Whales That Form Itself Evening
              </Link>
              <p style={{ color: "#184f68" }}>
                Place were in divide. There. Living creature said. Great fourth
                likeness lesser...
              </p>
            </div>
          </div>
          <div>
            <div
              style={{
                background: "#00bcbd",
                color: "#fff",
                textAlign: "center",
                padding: "45px",
                marginTop: "10px",
              }}
            >
              <FaQuoteLeft fontSize={"35px"} />
              <div style={{ fontSize: "25px" }}>
                Second Yielding Wherein First Wherein A Sea Was God Green Don't
                Face Greater.Good Fourth A Had
              </div>
              <div style={{ fontSize: "15px" }}>DIETER RAMS</div>
            </div>
            <div style={{ background: "#fff", marginBlock: "10px" }}>
              <img src={blog3} alt="" />
              <div>
                <div style={{ color: "#f84d4f" }}>October 23, 2019</div>
                <Link to="/blog-detail" className="bloglink">
                  Lights Image Great Two Day Have Said Make Fruit.
                </Link>
                <p style={{ color: "#184f68" }}>
                  Abundantly a for the beginning waters of spirit above, evening
                  beginning herb...
                </p>
              </div>
            </div>
            <div style={{ background: "#fff", marginBlock: "10px" }}>
              <img src={blog4} alt="" />
              <div>
                <div style={{ color: "#f84d4f" }}>September 03, 2019</div>
                <Link to="/blog-detail" className="bloglink">
                  Moving Beast Lights Form Let Open Sea
                </Link>
                <p style={{ color: "#184f68" }}>
                  Abundantly a for the beginning waters of spirit above, evening
                  beginning herb...
                </p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ background: "#fff", marginBlock: "10px" }}>
              <img src={blog5} alt="" />
              <div>
                <div style={{ color: "#f84d4f" }}>December 09, 2019</div>
                <Link to="/blog-detail" className="bloglink">
                  Daily Morning Exercise Routine
                </Link>
                <p style={{ color: "#184f68" }}>
                  Behold you'll days sea you're earth man created lights and
                  for. Very them...
                </p>
              </div>
            </div>
            <div
              style={{
                background: "#fff",
                color: "#184f68",
                textAlign: "center",
                padding: "45px",
                marginTop: "10px",
              }}
            >
              <FaLink fontSize={"35px"} />
              <div style={{ fontSize: "25px" }}>
                Cattle Day She'd Over Saying Man Which Void Likeness Their Set
                Living
              </div>
              <Link style={{ fontSize: "15px" }} to="/">
                WWW.HEALTHCARE.COM
              </Link>
            </div>
            <div style={{ background: "#fff", marginBlock: "10px" }}>
              <img src={blog6} alt="" />
              <div>
                <div style={{ color: "#f84d4f" }}>September 12, 2019</div>
                <Link to="/blog-detail" className="bloglink">
                  Bearing Winged Lights Fourth Seed Them Fruit To
                </Link>
                <p style={{ color: "#184f68" }}>
                  Behold you'll days sea you're earth man created lights and
                  for. Very them...
                </p>
              </div>
            </div>
          </div>
          <div>
            <div style={{ background: "#fff", marginBlock: "10px" }}>
              <img src={blog7} alt="" />
              <div>
                <div style={{ color: "#f84d4f" }}>December 04, 2019</div>
                <Link to="/blog-detail" className="bloglink">
                  Also Creature Morning Likeness Moved Years God
                </Link>
                <p style={{ color: "#184f68" }}>
                  Place were in divide. There. Living creature said. Great
                  fourth likeness lesser...
                </p>
              </div>
            </div>
            <div style={{ background: "#fff", marginBlock: "10px" }}>
              <img src={blog8} alt="" />
              <div>
                <div style={{ color: "#f84d4f" }}>October 09, 2019</div>
                <Link to="/blog-detail" className="bloglink">
                  Green Whales Fruitful One Together Fly Saw Life Saying Light
                </Link>
                <p style={{ color: "#184f68" }}>
                  Place were in divide. There. Living creature said. Great
                  fourth likeness lesser...
                </p>
              </div>
            </div>
            <div
              style={{
                background: "#f84d4f",
                color: "#fff",
                textAlign: "center",
                padding: "45px",
                marginTop: "10px",
              }}
            >
              <FaLink fontSize={"35px"} />
              <div style={{ fontSize: "25px" }}>
                Cattle Day She'd Over Saying Man Which Void Likeness Their Set
                Living
              </div>
              <Link style={{ fontSize: "15px" }} to="/">
                WWW.HEALTHCARE.COM
              </Link>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="blogbtn" onClick={() => window.scroll(0, 0)}>
            PREV
          </button>
          <button className="blogbtn1" onClick={() => window.scroll(0, 0)}>
            1
          </button>
          <button className="blogbtn" onClick={() => window.scroll(0, 0)}>
            2
          </button>
          <button className="blogbtn" onClick={() => window.scroll(0, 0)}>
            3
          </button>
          <button className="blogbtn" onClick={() => window.scroll(0, 0)}>
            NEXT
          </button>
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
                  <Link to="/blog">Health care37</Link>
                </li>
                <li>
                  <Link to="/blog">Medical Treatment23</Link>
                </li>
                <li>
                  <Link to="/blog">Lifestyle15</Link>
                </li>
                <li>
                  <Link to="/blog">Fitness27</Link>
                </li>
                <li>
                  <Link to="/blog">Food23</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>TAGS</h3>
              <ul className="tags">
                <li>
                  <Link to="/blog">Food</Link>
                </li>
                <li>
                  <Link to="/blog">Lifestyle</Link>
                </li>
                <li>
                  <Link to="/blog">Healthcare</Link>
                </li>
                <li>
                  <Link to="/blog">Treatment</Link>
                </li>
                <li>
                  <Link to="/blog">Medical</Link>
                </li>
                <li>
                  <Link to="/blog">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
