import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";



const App = () => {
	const user = true

	return (
		<BrowserRouter>
			{user ?
				<Switch>
					<Route path='/home' render={() => <Home />} />
					<Redirect to='/home' render={() => <Home />} />
				</Switch>
				:
				<Switch>
					<Route exact={true} path='/' render={() => <Login />} />
					<Route exact={true} path='/registration' render={() => <Registration />} />
					<Redirect to='/' render={() => <Login />} />
				</Switch>
			}
		</BrowserRouter>
	);
}

export default App;
