import * as React from "react";
import { ReactComponent as Logo } from "../assets/icons/logo.svg";

// create the component
function Login() {
	return (
		<div
			style={{
				backgroundColor: "#F1F1F1"
			}}
			className="w-screen h-screen">
			<div className="w-full h-full flex items-center"> {/* A wrapper to vertically align our child component using flex */}
				<div
					className="bg-white w-96 h-96 mx-auto flex flex-col px-16 justify-center rounded-2xl shadow-lg">
					<div className="flex flex-col space-y-3">
						<Logo />
						<h1 className="text-3xl">Log into Bitr</h1>
					</div>
					<div className="flex flex-col space-y-5 my-8">
						<input className="border border-green-500 px-2 py-1 rounded-lg focus:outline-none" type="text" placeholder="Username" />
						<input className="border border-green-500 px-2 py-1 rounded-lg focus:outline-none" type="password" placeholder="Password" />
					</div>
					<div className="flex space-x-3">
						<button className="focus:outline-none w-full px-2 py-1 text-sm rounded-full border border-green-500 text-green-500" type="button">
							Sign Up
						</button>
						<button className="focus:outline-none w-full px-2 py-1 text-sm rounded-full bg-green-500 text-white" type="button">
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	)
};

// Expose it by exporting it to the outside world!
export default Login;