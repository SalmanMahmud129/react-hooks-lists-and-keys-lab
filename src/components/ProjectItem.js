import React from "react";

function ProjectItem({ name, about, technologies }) {

  // console.log(technologies)
  const technologyList = technologies.map((oneTech) =>{
    return(
      <span key={oneTech}>{oneTech}</span>
    )
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{technologyList}</div>
    </div>
  );
}

export default ProjectItem;
