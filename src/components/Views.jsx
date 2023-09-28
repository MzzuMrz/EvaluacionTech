import AberturasView from "../Views/AberturasView";
import EquipamientoView from "../Views/EquipamientoView";
import TerminacionesView from "../Views/TerminacionesView";


import PropTypes from "prop-types";

const Views = ({ category }) => {
  switch (category) {
    case "Aberturas":
      return <AberturasView />;
    case "Equipamiento":
      return <EquipamientoView />;
    case "Terminaciones":
      return <TerminacionesView />;

    default:
      break;
  }
};

Views.propTypes = {
  category: PropTypes.oneOf(["Aberturas", "Equipamiento", "Terminaciones"]),
};

export default Views;
