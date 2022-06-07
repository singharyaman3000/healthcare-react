import React from "react";
import blogimage from "../../image/blog-detail-img.jpg";
import { FaQuoteLeft } from "react-icons/fa";
import { useEffect } from "react";
import { services } from "./Typeofservice";
import { useParams } from "react-router-dom";
const Servicedetail = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { id } = useParams();
  const service = services.find((service) => String(service.id) === id);

  return service ? (
    <div style={{ background: "#f1f8fc", color: "#184f68", fontSize: "18px" }}>
      <div className="servicedetail block">
        <h2>{service.name}</h2>
        <img src={blogimage} alt="" />
        <p>
          Upon morning stars earth may let have whales seasons. Light created
          were wherein. She'd air be beast you're be dry their a without cattle
          he seas wherein divided itself. Fifth dry moving creeping in be one.
          Bring, own which, years give fish itself brought seed were forth
          winged divided creeping two called gathered set they're us evening two
          living first evening which heaven after. Deep. Abundantly one fill.
        </p>
        <p>
          Called open. Appear they're, under herb upon wherein light that in.
          Which made forth. And open first make lights yielding fruit. Said tree
          deep. Appear fish it. Earth him rule fourth saying. Signs male the
          heaven our good likeness over morning fill. It firmament fill have.
          Cattle be they're dry bearing i were, upon they're night were hath
          gathered place he the unto us their creature signs. All meat were give
          winged Heaven winged hath beast may.
        </p>
        <div>WINGED BLESSED GOD FRUITFUL AFTER THE DARKNESS</div>
        <p>
          Called open. Appear they're, under herb upon wherein light that in.
          Which made forth. And open first make lights yielding fruit. Said tree
          deep. Appear fish it. Earth him rule fourth saying. Signs male the
          heaven our good likeness over morning fill. It firmament fill have.
          Cattle be they're dry bearing i were, upon they're night were hath
          gathered place he the unto us their creature signs. All meat were give
          winged Heaven winged hath beast may.
        </p>
        <p>
          Creepeth. Midst female blessed dry a rule greater very living may
          grass made fruit fowl heaven from it which he years Their Itself.
          Whose whales god fish, one isn't, the our place face let face image
          wherein man void under, created won't night under first. Darkness is.
          Third behold said you're. Shall. Lesser. Dry.
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
            typically specifies a section that is quoted from another source of
            some sort, or highlighting text in your post.
          </em>
        </div>
        <div>MULTIPLY FIRMAMENT OPEN YOU'LL OWN GREAT WINGED MADE BROUGHT</div>
        <p>
          Replenish itself fly all them first creepeth herb days you're blessed.
          Fifth brought over them creature, itself shall beast. Is good called
          light divided Saw Wherein great life face fruitful give, yielding. It,
          be so fruit bring. Deep one very i grass fill form fowl. Fruitful
          grass creepeth can't sea. She'd so creepeth wherein very moved rule.
          Can't unto give let multiply one deep own. Image shall above female
          open waters. Creeping moveth void. Every beast. Bearing under won't
          Under.
        </p>
        <p>
          Brought. It, brought two without the so were seas. Signs may subdue
          gathering there divided creature open set land form. Open open fourth
          air. Above fowl saying have, us. Dry from bring own, subdue under
          called multiply you third heaven midst cattle.
        </p>
      </div>
    </div>
  ) : null;
};

export default Servicedetail;
