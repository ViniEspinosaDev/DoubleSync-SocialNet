import React from 'react'
import './App.css'

import Cadastro from './components/Cadastro/Cadastro'
import Card from './components/layout/Card'




export default props =>
(
	<div className="App">
		<Card>
			<Cadastro></Cadastro>
		</Card>
	</div>
)