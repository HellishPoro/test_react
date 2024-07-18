import logo from './logo.svg';
import './App.css';

// декларативный
export const App = () => {
	let date = new Date()

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<p>{date.getFullYear()} год</p>
			</header>
		</div>
	);
}

