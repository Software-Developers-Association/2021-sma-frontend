import * as React from "react";
import {
	Link
} from "react-router-dom";

const Signup = () => {
	return (
		<div className="w-screen h-screen bg-background">
			<div className="w-full h-full flex flex-col justify-center"> {/* A Wrapper to center the contents to the middle of the screen */}
				<div className="bg-surface w-96 h-96 flex flex-col justify-center px-20 space-y-10 mx-auto rounded-2xl shadow-lg">
					<h1 className="text-3xl text-on-surface">Signup for Bitr</h1>
					<div className="flex flex-col space-y-5">
						<input className="focus:outline-none border border-primary px-2 py-1 rounded-lg" type="email" placeholder="Email" />
						<input className="focus:outline-none border border-primary px-2 py-1 rounded-lg" type="text" placeholder="Username" />
						<input className="focus:outline-none border border-primary px-2 py-1 rounded-lg" type="password" placeholder="Password" />
					</div>
					<div className="flex space-x-3">
						<Link to="/" className="focus:outline-none text-center w-full px-2 py-1 rounded-full border border-primary text-primary">Login</Link>
						<button className="focus:outline-none w-full px-2 py-1 rounded-full bg-primary text-on-primary">Sign Up</button>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Signup;