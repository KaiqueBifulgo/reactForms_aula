import "./MyForm.css"

import { useState } from "react"

const MyForm = () => {

    // GERENCIAMENTO DE DADOS
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const [bio, setBio] = useState("");

    const [role, setRole] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    }


    // ENVIO DE FORM
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(name, email, bio, role);


    // LIMPAR INPUT
        setName("");
        setEmail("");

        setBio("");

        setRole("");
    }


  return (
    <div>
        {/* CRIAÇÃO DE FORM */}
        {/* ENVIO DE FORMULARIO */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    onChange={handleName} 
                    placeholder="Digite seu nome" 
                    // CONTROLLED INPUT
                    value={name || ""}
                />
            </div>
        {/* LABEL ENVOLVENDO INPUT */}
            <label>
                <span>Email:</span>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Digite seu email" 
                    // SIMPLIFICANDO A MANIPULAÇÃO
                    onChange={(e) => setEmail(e.target.value)}    
                    // CONTROLLED INPUT
                    value={email || ""}
                />
            </label>
            {/* TEXT AREA */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Biografia do usuario" onChange={(e) => setBio(e.target.value)} value={bio}> </textarea>
            </label>
            {/* SELECT */}
            <label>
                <span>Funções</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="adm">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm