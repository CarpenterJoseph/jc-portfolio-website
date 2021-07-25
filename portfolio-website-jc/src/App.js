import React from "react";
import {Link as ScrollLink, animateScroll as scroll} from "react-scroll";
import './App.css';


//components
import ContactForm from './components/ContactForm'
import SideMenu from "./components/SideMenu";

//project images
import projectPlaceholder from './img/projectplaceholder.png'


function App() {
	return (
		<div className="font-roboto bg-gray-dark">
			<SideMenu />

			{/*Home*/}
			<section
				id="home"
				className="font-pressStart bg-gray-dark text-white pl-52 ml-2 p-2 min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-center text-6xl">Hi I'm Joe<span className="text-green">!</span></h1>
				<h2 className="text-center text-4xl mt-6">A <span className="text-purple">first class</span></h2>
				<h2 className="text-center text-4xl mt-6">Full Stack <span className="text-red">developer</span></h2>
				<ScrollLink
					className="cursor-pointer border-2 rounded border-blue text-blue p-2 mt-6 duration-300 hover:bg-blue hover:text-gray-dark"
					activeClass="active"
					to="contact"
					spy={true}
					smooth={true}
					duration={500}>
					Contact Me
				</ScrollLink>
			</section>

			{/*About*/}
			<section
				id="about"
				className="bg-black text-white pl-52 ml-2 p-2 min-h-screen flex flex-col justify-center">
				<h2 className="text-center text-4xl font-pressStart">About</h2>
				<div className="flex flex-row justify-center leading-8 max-w-4xl m-auto mb-0 mt-3">
					<p className="w-5/12 max-w-lg mr-2 text-justify">
						I am a young American technologist who has had a life-long avid interest in programming.
						I acquired my first taste of programming when I was in middle school, where we made basic
						websites with HTML, CSS, and Javascript. In high school, I took every programming course
						available to me. In my spare time I’ve built computers, created websites, and made mods
						for video games.
					</p>
					<p className="w-5/12 max-w-xl ml-2 text-justify">
						Since high school, I’ve continued my education by studying computer science at North Hennepin
						Community College after which I moved to Denmark to study web development at Business Academy
						Aarhus. My passion and education make me a perfect candidate for an internship where I’ll be
						able to
						work on a team to leverage technology to solve real world business problems. After my
						internship, I
						hope to continue to work as a web developer in Denmark.
					</p>
				</div>

			</section>

			{/*Skills*/}
			<section
				id="skills"
				className="bg-gray-dark text-white pl-52 ml-2 p-2 min-h-screen flex flex-col justify-center">
				<h2 className="text-center text-4xl font-pressStart mt-12">Skills</h2>
			</section>

			{/*Projects*/}
			<section
				id="projects"
				className="bg-black text-white pl-52 ml-2 p-2 min-h-screen flex flex-col justify-center">
				<h2 className="text-center text-4xl font-pressStart">Projects</h2>
				{/*Table container*/}
				<div className="">

				</div>

				{/*Portfolio*/}
				<div className="cursor-pointer duration-300 w-10/12 m-auto mt-3 mb-0 p-3 flex flex-row items-center bg-gray-darkest hover:bg-gray">
					<div className="w-4/12">
						<img src={projectPlaceholder}/>
					</div>
					<div className="w-8/12 pl-3">
						<h3 className="text-md font-pressStart">Portfolio</h3>
						<p className="text-sm">This is a project about a podcast website where you can listen to a padcast and all that stuff.</p>
					</div>
				</div>

				{/*Margarita Mania*/}
				<div className="cursor-pointer duration-300 w-10/12 m-auto mt-3 mb-0 p-3 flex flex-row items-center bg-gray-darkest hover:bg-gray">
					<div className="w-4/12">
						<img src={projectPlaceholder}/>
					</div>
					<div className="w-8/12 pl-3">
						<h3 className="text-md font-pressStart">Portfolio</h3>
						<p className="text-sm">This is a project about a podcast website where you can listen to a padcast and all that stuff.</p>
					</div>
				</div>


				<div className="cursor-pointer duration-300 w-10/12 m-auto mt-3 mb-0 p-3 flex flex-row items-center bg-gray-darkest hover:bg-gray">
					<div className="w-4/12">
						<img src={projectPlaceholder}/>
					</div>
					<div className="w-8/12 pl-3">
						<h3 className="text-md font-pressStart">Portfolio</h3>
						<p className="text-sm">This is a project about a podcast website where you can listen to a padcast and all that stuff.</p>
					</div>
				</div>
			</section>

			{/*Contact*/}
			<section
				id="contact"
				className="bg-grey text-white pl-52 ml-2 p-2 min-h-screen flex flex-col items-center justify-center">
				<h2 className="text-center text-4xl font-pressStart">Contact</h2>
				<h3 className="text-center font-pressStart mt-3">I'll be happy to answer your questions!</h3>

				{/*Contact Form container*/}
				<div className={"w-8/12 max-w-xl mt-3"}>
					<ContactForm/>
				</div>
			</section>
		</div>
	);
}

export default App;
