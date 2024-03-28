import FacebookLogo from "../assets/images/facebook.jpg";
import InstagramLogo from "../assets/images/instagram.jpg";
import Navbar from "./Navbar";

export const Footer = () => {
  return (
    <div className="footer container p-5">
      <div className="row">
        <hr />
        <Navbar />

        <nav className="social col gx-5 gy-5 p-3">
          <ul>
            <li>
              <a href="#">
                <img
                  src={FacebookLogo}
                  width="20px"
                  height="20px"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={InstagramLogo}
                  width="20px"
                  height="20px"
                  alt="Instagram"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
// export default Footer;
