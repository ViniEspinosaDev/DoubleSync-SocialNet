import React from 'react'
import { useForm } from "react-hook-form"
import axios from "axios"
import "./Cadastro.css"
import logo from "../../images/logo.png"


export default function Cadastro() {

	const { register, handleSubmit, watch, errors } = useForm();


	const onSubmit = (data, e) => {
		e.preventDefault();
		axios.post("http://localhost:3333/usuarios", {
			nome: data.nome,
			email: data.email,
			senha: data.senha
		}).then(response => {
			console.log("inserido!")
		})
	}

	console.log(watch("example")); // watch input value by passing the name of it

	return (
		/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */
		<div className="Principal">
			<div className="logo">
				<img src={logo}></img>
			</div>

			<div className="containerForms">
				<div>
					<h1>CADASTRE-SE</h1>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					{/* register your input into the hook by invoking the "register" function"  */}


					<input type="text" name="nome"  ref={register({ required: true })} placeholder="Nome" />




					<input type="text" name="email"  ref={register({ required: true })} placeholder="Email" />




					<input type="password" name="senha"  ref={register({ required: true })} placeholder="Senha" />
					{errors.exampleRequired && <span>This field is required</span>}



					<button type="submit" className="botaoSubmit">
						CADASTRAR</button>
						</form>
			</div>
		</div>

	)
}
