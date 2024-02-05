import React from 'react';
import dataWorks from './data';

const WorksComponent = () => {
  return (
    <div>
      {dataWorks.map((work) => (
        <div key={work.id}>
          <h2>
            {work.icon} {work.title}
          </h2>
          {work.description && <p>{work.description}</p>}
          {work.link && (
            <a href={work.link} target="_blank" rel="noopener noreferrer">
              Voir sur GitHub
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

function Works() {
  return (
    <div id='travaux' className="containerWorks">
      <WorksComponent />
    </div>
  );
}

export default Works;

