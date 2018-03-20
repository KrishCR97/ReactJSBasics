import React,{ Component } from 'react';
import ProjectItems from './projectItems';
class Projects extends Component {
    render() {
        let projectItems
        if(this.props.projects){
        projectItems = this.props.projects.map(project =>{
            //console.log(project)
            return (
                <ProjectItems key = {project.title} project = {project} />
            )
        })
        }

        //console.log(this.props)
        return (
            <div className = "ProjectClass">
            {projectItems}
            </div>
        )
    }
}

export default Projects;