import OlamoBrand from "/src/assets/images/logo.jpg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src={OlamoBrand}
        alt="Logo de Olamo Bordados"
        width="100px"
        className="col p=5"
      />
    </Link>
  );
};

export default Logo;
