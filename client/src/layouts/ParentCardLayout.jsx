import PropTypes from "prop-types";
import PlayOnce from "../components/Animations";
const ParentCardLayout = ({ header, title, icon, tools, component }) => {
  return (
    <div className="col col-lg-6">
      <div className="card card-default">
        <div className="card-header">
          <h3 className="card-title">{header}</h3>

          <div className="card-tools">{tools}</div>
        </div>
        <div className="card-body">
          <div
            className="row d-flex justify-content-between"
            style={{
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="col col-lg-3">
              <PlayOnce ICON={icon} />
            </div>
            <div className="col">
              <div className="card-title">
                <h2>{title}</h2>
              </div>
            </div>
          </div>
          {component}
        </div>
      </div>
    </div>
  );
};

ParentCardLayout.propTypes = {
  header: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  tools: PropTypes.element,
  component: PropTypes.element.isRequired,
};

export default ParentCardLayout;
