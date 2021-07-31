import React, {useEffect, useState} from "react";
import {Router} from "@reach/router"

//pages
import Home from './Home'
import Project from "./Project";

function App() {
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
		<Router>
			<Home path='/' projects={projects}/>
			<Project path='/project/:projectID' projects={projects}/>
		</Router>
	);
}

export default App;
