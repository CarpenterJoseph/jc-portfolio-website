import React, {Fragment, useEffect, useState} from 'react'

function ProjectsList() {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		async function fetchProjectsAPI() {
			const response = await fetch('http://localhost:3001/api/projects/')
			const projects = await response.json()
			setProjects(projects)
		}

		fetchProjectsAPI().catch((error) => {
			console.log(error)
		})
	}, [])

	return (
		<Fragment>
			{projects.map((project) => {
				return (
					<div
						key={project._id}
						className="cursor-pointer duration-300 w-10/12 m-auto mt-3 mb-0 p-3 flex flex-row items-center bg-gray-darkest hover:bg-gray">
						<div className="w-4/12">
							<img src={project.imageURL}/>
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