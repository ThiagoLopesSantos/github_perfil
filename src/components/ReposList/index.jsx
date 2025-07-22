import { useEffect, useState } from "react";
import styles from './ReposList.module.css';

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        setEstaCarregando(true);
        setErro(null);

        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if(!res.ok) {
                throw new Error("Usuário não encontrado ou erro ao buscar dados.");
            }
            return res.json();
        })
        .then(resJson => {
            // Caso tenha usuário, mas esteja sem projetos
            if (!Array.isArray(resJson)) {
                throw new Error("Erro ao carregar repositórios.");
            }

            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 3000)
        })

        .catch((err) => {
            setErro(err.message);
            setEstaCarregando(false);
        })
    }, [nomeUsuario]);

    let conteudo;

    if (estaCarregando) {
        conteudo = <h1>Carregando...</h1>;
    } else if (erro) {
        conteudo = (
            <p className={styles.erro}>
                {erro}
            </p>
        );
    } else if (repos.length === 0) {
        conteudo = (
            <p className={styles.erro}>
                Usuário encontrado, mas nenhum repositório foi carregado. 
            </p>
        );
    } else {
        conteudo = (
            <ul className={styles.list} >
                {repos.map(({ id, name, language, html_url }) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}>
                            <b>Nome:</b> 
                            {name} 
                        </div>
                        <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> 
                            {language} 
                        </div>
                        <a className={styles.itemLink}  target="_blank" href={html_url}>Visitar no Github</a>
                    </li>
                ))}
            </ul>
        );
    }
    return (
        <div className="container">
            {conteudo}
        </div>
    )
}

export default ReposList;