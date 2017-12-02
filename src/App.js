import React from 'react'
import './App.css'
// Containers
import Todos from './containers/Todos'
// Components
import Header from './components/Header'

const App = () => (
	<div className="App">
		<Header />
		<Todos />
	</div>
)

export default App
