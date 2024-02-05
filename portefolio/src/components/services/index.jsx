import dataServices from './data';

const Services = () => {
  return (
    <div id='mes-services' className="services-container">
      <h1>Mes Services</h1>
      <div className="services-list">
        {dataServices.map((service) => (
          <div key={service.id} className="service-item">
            <div className="service-icon">{service.icon}</div>
            <div className="service-details">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
