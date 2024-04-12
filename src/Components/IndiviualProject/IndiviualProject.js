import React from 'react'
import './IndiviualProject.css'
import {useSelector} from 'react-redux'
import ProjectCard from '../ProjectCard'

const IndiviualProject = () => {
    const projects = useSelector((state)=> state.projects?.projects)
  return (
    <div className='flexItem'>{projects && projects.map((project,idx)=><ProjectCard key={project.id} project={project} index={idx}/>)}</div>
  )
}

export default IndiviualProject