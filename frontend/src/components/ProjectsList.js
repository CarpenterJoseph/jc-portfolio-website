import React, {Fragment} from 'react'

function ProjectsList(props) {
	return (
		<Fragment>
			{props.projects.map((project) => {
				return (
					<div
						key={project._id}
						className="cursor-pointer duration-300 w-10/12 m-auto mt-3 mb-0 p-3 flex flex-row items-center bg-gray-darkest hover:bg-gray">
						<div className="w-4/12">
							<img src={project.picture_url} alt={project.name}/>
						</div>
						<div className="w-8/12 pl-3">
							<h3 className="text-md font-pressStart">{project.name}</h3>
							<p className="text-sm">{project.description}</p>
						</div>
					</div>
				)
			})}
		</Fragment>
	)
}

export default ProjectsList