import { BiHive } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { BiLogoLinkedin} from "react-icons/bi";
// import { BiLogoInstagram } from "react-icons/bi";

function Footer(){
    return(
        
          <div className="footer">
            <a href="#"><BiHive />HiVE</a>
            <div className="us">
            <a href="#">Contact Us </a>
            <a href="#">About Us</a>
            </div>
            <a href="#">Services</a>
            <a href="#">FAQs</a>
            <div className="f_logo">
                <a href="#"><BiLogoTwitter/></a>
                <a href="#"><BiLogoFacebook/></a>
                <a href="#"><BiLogoInstagram/></a>
                <a href="#"><BiLogoLinkedin/></a>
            </div>
          </div>
    
    )
}
export default Footer; 