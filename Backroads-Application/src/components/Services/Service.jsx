import PropTypes from "prop-types";

export default function Service({ title, desc }) {
  return (
    <article className="service">
      <span className="service-icon">
        <i className="fas fa-wallet fa-fw"></i>
      </span>
      <div className="service-info">
        <h4 className="service-title">{title}</h4>
        <p className="service-text">{desc}</p>
      </div>
    </article>
  );
}

Service.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
