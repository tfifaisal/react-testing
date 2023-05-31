import './App.css'
import {Application} from './components/Application/Application'
import {Skills} from './components/Skill/Skills'

function App() {
	const skills = ['html', 'css', 'js']
	return (
		<div className="App">
			<Application />
			<br />
			<Skills skills={skills} />
		</div>
	)
}

export default App
