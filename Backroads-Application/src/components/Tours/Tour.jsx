import PropTypes from "prop-types";

export default function Tour({
  title,
  desc,
  country,
  tripLong,
  price,
  date,
  imageUrl,
}) {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={imageUrl} className="tour-img" alt="" />
        <p className="tour-date">{date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
        </div>
        <p>{desc}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {country}
          </p>
          <p>{tripLong} days</p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
}

Tour.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  country: PropTypes.string,
  tripLong: PropTypes.number,
  price: PropTypes.number,
  date: PropTypes.string,
  imageUrl: PropTypes.string,
};
