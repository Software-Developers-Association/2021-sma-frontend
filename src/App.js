import Login from "./screens/Login";
import Signup from "./screens/Signup";
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/sign-up" component={Signup} />
			</Switch>
		</Router>
	);
}

export default App;
