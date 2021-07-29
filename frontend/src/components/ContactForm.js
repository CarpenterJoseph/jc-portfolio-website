import React, {useState} from 'react';

function ContactForm() {
	const [contactName, setContactName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')


	function handleSubmit(event) {
		console.log(contactName + " " + email + " " + subject + " " + message)
		//todo handle form submit
		event.preventDefault();
	}

	//todo handle required fields

	return (
		<form className={"w-full"} onSubmit={(event => handleSubmit(event))}>
			<input
				type="text"
				className={"bg-white w-full p-1 rounded-sm text-black border-2"}
				placeholder={"Name"}
				value={contactName}
				onChange={(event) => setContactName(event.target.value)}/>
			<input
				type="text"
				className={"bg-white w-full mt-3 p-1 rounded-sm text-black border-2"}
				placeholder={"Email Address"}
				value={email}
				onChange={(event) => setEmail(event.target.value)}/>
			<input
				type="text"
				className={"bg-white w-full mt-3 p-1 rounded-sm text-black border-2"}
				placeholder={"Subject"}
				value={subject}
				onChange={(event) => setSubject(event.target.value)}/>
			<textarea
				className={"bg-white w-full mt-3 p-1 pb-0 rounded-sm h-32 text-black border-2 max-h-96"}
				placeholder={"Your Message"}
				value={message}
				onChange={(event) => setMessage(event.target.value)}/>
			<button
				type="submit"
				className={"font-pressStart mt-1 bg-grey border-2 rounded border-blue text-blue p-2 duration-300 float-right hover:bg-blue hover:text-gray-dark"}>
				Send Message
			</button>
		</form>
	)
}

export default ContactForm