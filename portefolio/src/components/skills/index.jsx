import dataSkills from "./data";

const SkillsComponent = () => {
  return (
    <div>
      {dataSkills.map((skill) => (
        <div className="skillsContent" key={skill.name}>
          {skill.icon} <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
};

function Skills() {
  return (
    <div className="containerSkills">
      <h2 id="competences">Mes compétences</h2>
      <SkillsComponent />
    </div>
  );
}

export default Skills;
