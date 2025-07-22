import { useState } from "react";
import styles from './Formulario.module.css';


const Formulario = ({ enviarUsuario }) => {
    const [nomeUsuario, setNomeUsuario] = useState("");

    const enviarFormulario = (e) => {
        e.preventDefault();

        const nomeLimpo = nomeUsuario.trim();
        if (nomeLimpo.length > 0) {
            enviarUsuario(nomeLimpo);
            setNomeUsuario(""); // limpa o input
        }
    };

    return (
        <form className={styles.formContainer} onSubmit={enviarFormulario}>
            <label htmlFor="usuario">Digite o login do GitHub:</label>
            <input
                id="usuario"
                type="text"
                required
                value={nomeUsuario}
                onChange={(e) => setNomeUsuario(e.target.value)}
                placeholder="ex: thiagolopes-dev"
            />
            <button type="submit">Pesquisar</button>
        </form>
    );
};

export default Formulario;
