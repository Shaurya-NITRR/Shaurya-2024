import { useEffect } from "react";
import {holdSection} from '../utilits'
import rocket from "../assets/svgs/rocket.svg"
// import { RxRocket } from "react-icons/rx";

const HailTechno = () => {
  useEffect(() => {
    holdSection();
  }, []);
  return (
    <div id="social" className="hold">
       <div className="social">
        <h4 className="title" style={{fontFamily:"font1", fontSize:"1.5rem", letterSpacing:"2px", display:"flex", position:"relative", zIndex:"10"}}>
          HAIL &nbsp;TECHNOCRACY &nbsp;
          <img src={rocket} width={30} alt="" />
          {/* <RxRocket size={40}/> */}
        </h4>
      </div>
    </div>
  );
};
export default HailTechno;
