import { useState } from 'react';

import Formulario from './components/Formulario';
import Perfil from './components/Perfil';
import ReposList from './components/ReposList';



function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [mostrarFormulario, setMostraFormulario] = useState(true);

  const pesquisarUsuario = (usuario) => {
    setNomeUsuario(usuario);
    setMostraFormulario(false);
  };

  const MostrarFormulario = () => {
    setMostraFormulario(true);
    setNomeUsuario('');
  }

  return(
    <div className='container'>
      <h1 className='logo'>Veja os seus repositórios no GitHub</h1>

      {mostrarFormulario ? (
        <Formulario enviarUsuario={pesquisarUsuario} />
      ) : (
        <button 
          className="botao-voltar" 
          onClick={MostrarFormulario}
        >
          Pesquisar outro usuário
        </button>
      )}

      {nomeUsuario.length > 0 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </ div>
  )
}

export default App
