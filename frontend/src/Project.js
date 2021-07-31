import React, {useEffect, useState} from 'react'
import SideMenu from "./components/SideMenu"
import DOMPurify from 'dompurify';

function Project(props) {

	const [project, setProject] = useState([])
	const [projectHTML, setProjectHTML] = useState('')


	useEffect(() => {
		setProject(props.projects.find(project => project._id === props.projectID))

		async function fetchProjectHTML() {
			const response = await fetch('http://localhost:3001/static/pages/margarita_mania.html')
			const data = await response.text()
			//necessary to prevent xss attacks
			const cleanedData = DOMPurify.sanitize(data)
			setProjectHTML(cleanedData)
		}

		fetchProjectHTML().catch((error) => {
			console.log(error)
		})
	}, [])

	return (
		<div>
			<SideMenu/>

			{/*Project container*/}
			<div dangerouslySetInnerHTML={{__html: projectHTML}} className="ml-2 pl-52 bg-black min-h-screen text-white">
			</div>
		</div>
	)
}

export default Project