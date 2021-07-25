import jcLogo from "../img/jclogo.png";
import githubLogo from "../img/githublogo.png";
import linkedinLogo from "../img/linkedinlogo.png";
import React from "react";

import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";

class SideMenu extends React.Component {

	render() {
		return (
			<div className="w-52 h-screen fixed bg-gray-darkest select-none">

				{/*Logo*/}
				<ScrollLink
					className="cursor-pointer"
					to="home"
					spy={true}
					smooth={true}
					duration={500}>
					<div className="text-white h-52 bg-black flex flex-col items-center">
						<img className="mt-9 w-9/12 " alt="Joseph Carpenter Logo" src={jcLogo}/>
						<h1 className="mt-3 font-medium text-3xl">Joseph</h1>
						<h3 className="font-thin text-xl">Web Developer</h3>
					</div>
				</ScrollLink>

				{/*Menu*/}
				<div className="text-white pt-36 flex flex-col items-center text-xl">
					<ScrollLink
						className="cursor-pointer font-light p-1 w-9/12 border-b-2 pl-1 border-purple text-left transition duration-300 hover:bg-purple hover:text-black"
						activeClass="active"
						to="about"
						spy={true}
						smooth={true}
						duration={500}>
						About
					</ScrollLink>

					<ScrollLink
						className="cursor-pointer font-light mt-5 p-1 w-9/12 border-b-2 pl-1 border-green text-left duration-300 hover:bg-green hover:text-black"
						activeClass="active"
						to="skills"
						spy={true}
						smooth={true}
						duration={500}>
						Skills
					</ScrollLink>

					<ScrollLink
						className="cursor-pointer font-light mt-5 p-1 w-9/12 border-b-2 pl-1 border-blue text-left duration-300 hover:bg-blue hover:text-black"
						activeClass="active"
						to="projects"
						spy={true}
						smooth={true}
						duration={500}>
						Projects
					</ScrollLink>

					<ScrollLink
						className="cursor-pointer font-light mt-5 p-1 w-9/12 border-b-2 pl-1 border-red text-left duration-300 hover:bg-red hover:text-black"
						activeClass="active"
						to="contact"
						spy={true}
						smooth={true}
						duration={500}>
						Contact
					</ScrollLink>
				</div>

				{/*External Link Logos*/}
				<div className="pt-24 flex flex-row justify-center space-x-4">
					<a className="cursor-pointer w-6 duration-300 icon"><img alt="Github Link" src={githubLogo}/></a>
					<a className="cursor-pointer w-6 duration-300 icon"><img alt="Linkedin Link" src={linkedinLogo}/></a>
				</div>
			</div>
		)
	}
}

export default SideMenu