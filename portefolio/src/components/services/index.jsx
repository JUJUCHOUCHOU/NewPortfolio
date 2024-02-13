import dataServices from './data';

const Services = () => {
  return (
    <div id='mes-services' className="containerServices">
      <h1 className='df'>Mes Services</h1>
      <div className="containerServices-List">
        {dataServices.map((service) => (
          <div key={service.id} className="containerServices-Item">
            <div className="containerServices-Icon">{service.icon}</div>
            <div className="mtt containerServices-Details">
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
