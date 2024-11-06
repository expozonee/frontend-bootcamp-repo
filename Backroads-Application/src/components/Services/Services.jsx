import Service from "./Service";
import "./Services.css";
import servicesData from "./services.json";

export default function Services() {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className="section-center services-center">
        {servicesData.map(({ id, title, desc }) => {
          return <Service key={id} title={title} desc={desc} />;
        })}
      </div>
    </section>
  );
}
