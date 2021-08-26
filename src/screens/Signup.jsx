import * as React from "react";
import {
	Link,
	useHistory
} from "react-router-dom";
import BitrApi from "../web-apis/bitr-api/bitr-api";

const Signup = () => {
	const history = useHistory();

	const fNameRef = React.useRef();
	const lNameRef = React.useRef();
	const usernameRef = React.useRef();
	const emailRef = React.useRef();
	const passwordRef = React.useRef();

	const createUser = async () => {
		const { payload:user, error } = await BitrApi.users().create({
			fName: fNameRef.current.value,
			lName: lNameRef.current.value,
			username: usernameRef.current.value,
			email: emailRef.current.value,
			password: passwordRef.current.value
		});

		if(error) {
			// TODO: Show a modal or banner to indicate the error
			console.error(error);
		} else {
			localStorage.setItem("username", user.username);
			history.push("/");
		}
	};

	return (
		<div className="w-screen h-screen bg-background">
			<div className="w-full h-full flex flex-col justify-center"> {/* A Wrapper to center the contents to the middle of the screen */}
				<div className="bg-surface w-96 py-8 flex flex-col justify-center px-20 space-y-10 mx-auto rounded-2xl shadow-lg">
					<h1 className="text-3xl text-on-surface">Signup for Bitr</h1>
					<div className="flex flex-col space-y-5">
						<input ref={fNameRef} className="focus:outline-none border border-primary px-2 py-1 rounded-lg" type="text" placeholder="First Name" />
						<input ref={lNameRef} className="focus:outline-none border border-primary px-2 py-1 rounded-lg" type="text" placeholder="Last Name" />
						<input ref={usernameRef} className="focus:outline-none border border-primary px-2 py-1 rounded-lg" type="text" placeholder="Username" />
						<input ref={emailRef} className="focus:outline-none border border-primary px-2 py-1 rounded-lg" type="email" placeholder="Email" />
						<input ref={passwordRef} className="focus:outline-none border border-primary px-2 py-1 rounded-lg" type="password" placeholder="Password" />
					</div>
					<div className="flex space-x-3">
						<Link to="/" className="focus:outline-none text-center w-full px-2 py-1 rounded-full border border-primary text-primary">Login</Link>
						<button onClick={createUser} className="focus:outline-none w-full px-2 py-1 rounded-full bg-primary text-on-primary">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Signup;