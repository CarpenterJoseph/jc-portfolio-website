import React, {Fragment, useEffect, useState} from 'react'
import projectPlaceholder from "../img/projectplaceholder.png";

function Projects() {
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

	function renderProjects() {
		return (
			<Fragment>
				<p>testasdss</p>
			</Fragment>
		)
	}

	return (
		<Fragment>

			<h2 className="text-center text-4xl font-pressStart">Projects</h2>

			{projects.map((project) => {
				return (
					<div
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

			{/*Portfolio*/}
			<div
				className="cursor-pointer duration-300 w-10/12 m-auto mt-3 mb-0 p-3 flex flex-row items-center bg-gray-darkest hover:bg-gray">
				<div className="w-4/12">
					<img src={projectPlaceholder}/>
				</div>
				<div className="w-8/12 pl-3">
					<h3 className="text-md font-pressStart">Portfolio</h3>
					<p className="text-sm">This is a project about a podcast website where you can listen to a padcast
						and all that stuff.</p>
				</div>
			</div>

			{/*Margarita Mania*/}
			<div
				className="cursor-pointer duration-300 w-10/12 m-auto mt-3 mb-0 p-3 flex flex-row items-center bg-gray-darkest hover:bg-gray">
				<div className="w-4/12">
					<img src={projectPlaceholder}/>
				</div>
				<div className="w-8/12 pl-3">
					<h3 className="text-md font-pressStart">Portfolio</h3>
					<p className="text-sm">This is a project about a podcast website where you can listen to a padcast
						and all that stuff.</p>
				</div>
			</div>


			<div
				className="cursor-pointer duration-300 w-10/12 m-auto mt-3 mb-0 p-3 flex flex-row items-center bg-gray-darkest hover:bg-gray">
				<div className="w-4/12">
					<img src={projectPlaceholder}/>
				</div>
				<div className="w-8/12 pl-3">
					<h3 className="text-md font-pressStart">Portfolio</h3>
					<p className="text-sm">This is a project about a podcast website where you can listen to a padcast
						and all that stuff.</p>
				</div>
			</div>
		</Fragment>
	)
}

function Project(props) {

	return (
		<Fragment>

		</Fragment>
	)
}

export default Projects