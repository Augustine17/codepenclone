import React from 'react'

const ProjectCard = ({project, index}) => {
  return (
    <div className='card'>
          <iframe title="result" srcDoc={project.output} style={{border:'none', width:'100%', height:'100%'}}/>
    </div>
  )
}

export default ProjectCard