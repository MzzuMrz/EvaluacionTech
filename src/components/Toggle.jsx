import PropTypes from "prop-types";
import Arrow from "../assets/imgs/Arrow.png";

const Toggle = ({ onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer translate-y-1/2">
      <img className="w-5 bg-white rounded-r-lg py-5" src={Arrow} alt="arrow" />
    </div>
  );
};

Toggle.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Toggle;
