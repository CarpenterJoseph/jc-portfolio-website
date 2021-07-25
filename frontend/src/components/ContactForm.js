import React from 'react';
import ReactDOM from 'react-dom';

class ContactForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			contactName: '',
			email: '',
			subject: '',
			message: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		//todo send email with info
		event.preventDefault();
	}

	render() {
		return (
			<form className={"w-full"} onSubmit={this.handleSubmit}>
				<input type="text" className={"bg-white w-full p-1 rounded-sm text-black border-2"} placeholder={"Name"} value={this.state.contactName}
				       onChange={(event) => this.setState({contactName: event.target.value})}/>
				<input type="text" className={"bg-white w-full mt-3 p-1 rounded-sm text-black border-2"} placeholder={"Email Address"} value={this.state.email}
				       onChange={(event) => this.setState({email: event.target.value})}/>
				<input type="text" className={"bg-white w-full mt-3 p-1 rounded-sm text-black border-2"} placeholder={"Subject"} value={this.state.subject}
				       onChange={(event) => this.setState({subject: event.target.value})}/>
				<textarea className={"bg-white w-full mt-3 p-1 pb-0 rounded-sm h-32 text-black border-2 max-h-96"} placeholder={"Your Message"} value={this.state.message}
				       onChange={(event) => this.setState({message: event.target.value})}/>
				<button type="submit" className={"font-pressStart mt-1 bg-grey border-2 rounded border-blue text-blue p-2 duration-300 float-right hover:bg-blue hover:text-gray-dark"}>
					Send Message
				</button>
			</form>
		)
	}
}

export default ContactForm