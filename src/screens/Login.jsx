import * as React from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";
import {
	Link
} from "react-router-dom";

// create the component
function Login() {
	return (
		<div className="w-screen h-screen bg-background"> {/* screen container */}
			<div className="w-full h-full flex items-center"> {/* A wrapper to vertically align our child component using flex */}
				<div
					className="bg-surface w-full h-full sm:w-96 sm:h-96 mx-auto flex flex-col justify-center sm:rounded-2xl sm:shadow-lg"> {/* card container */}
					<div className="w-full max-w-xs sm:max-w-none mx-auto sm:mx-0 px-4 sm:px-16 space-y-16 sm:space-y-8"> { /* content container */}
						<div className="flex flex-col space-y-3">
							<Logo className="text-primary mx-auto sm:mx-0" />
							<h1 className="text-3xl text-on-surface">Log into Bitr</h1>
						</div>
						<div className="flex flex-col space-y-5">
							<input className="border border-primary px-2 py-1 rounded-lg focus:outline-none" type="text" placeholder="Username" />
							<input className="border border-primary px-2 py-1 rounded-lg focus:outline-none" type="password" placeholder="Password" />
						</div>
						<div className="flex space-x-3">
							<Link to="/sign-up" className="focus:outline-none w-full px-2 py-1 text-center text-sm rounded-full border border-primary text-primary">
								Sign Up
							</Link>
							<button className="focus:outline-none w-full px-2 py-1 text-sm rounded-full bg-primary text-on-primary" type="button">
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

// Expose it by exporting it to the outside world!
export default Login;