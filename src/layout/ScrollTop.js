import { useEffect } from "react";
import { scrollTop } from "../utilits";
import uparrow from "../assets/svgs/uparrow.svg"
import { animateScroll as scroll } from "react-scroll";

const ScrollTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 1000, // Adjust the duration as needed
      smooth: "easeInOut", // Adjust the easing function as needed
    });
  };

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div
      onClick={scrollToTop}
      className="metaportal_fn_totop"
      style={{ height: "183px", cursor: "pointer" }}
    >
      <span className="totop_inner">
        <span className="icon">
          {/* <ImArrowUp2 size={20} color="black"/> */}
          <img src={uparrow} alt="" />
        </span>
      </span>
    </div>
  );
};
export default ScrollTop;
