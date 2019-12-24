/** @format */

import React from "react";
// import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestAxios from "./pages/TestAxios";
import Home from "./pages/Home";
import Nav from "./components/Nav";

function App() {
	return (
		<Router>
			<div>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/testAxios">
						<TestAxios />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;

function About() {
	return <h2>About</h2>;
}
/* <nav>
<ul>
	<li>
		<Link to="/">Home</Link>
	</li>
	<li>
		<Link to="/about">About</Link>
	</li>
	<li>
		<Link to="/users">Users</Link>
	</li>
</ul>
</nav> */

// <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo" />
//                 <p>
//                     Edit <code>src/App.js</code> and save to reload.
//                 </p>
//                 <a
//                     className="App-link"
//                     href="https://reactjs.org"
//                     target="_blank"
//                     rel="noopener noreferrer">
//                     Learn React
//                 </a>
//             </header>
//         </div>
