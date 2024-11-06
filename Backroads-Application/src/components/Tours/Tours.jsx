import Tour from "./Tour";
import "./Tours.css";
import tripData from "./tours.json";

export default function Tours() {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        {tripData.map(
          ({ id, title, desc, country, tripLong, price, date, image }) => {
            return (
              <Tour
                key={id}
                title={title}
                desc={desc}
                country={country}
                tripLong={tripLong}
                price={price}
                date={date}
                imageUrl={image}
              />
            );
          }
        )}
      </div>
    </section>
  );
}
