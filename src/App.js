import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import FormChamado from './components/FormChamado';
import ListaChamados from './components/ListaChamados';
import './App.css';

function App() {
  const [chamados, setChamados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [paginaAtiva, setPaginaAtiva] = useState('form');

  useEffect(() => {
    fetch('http://localhost:3000/chamados')
      .then((res) => res.json())
      .then((dados) => {
        setChamados(dados);
        setLoading(false);
      })
      .catch((erro) => {
        console.error('Erro ao buscar chamados:', erro);
        setLoading(false);
      });
  }, []);

  function adicionarChamado(chamado) {
    return fetch('http://localhost:3000/chamados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(chamado)
    })
      .then((res) => res.json())
      .then((novoChamado) => {
        setChamados((prev) => [...prev, novoChamado]);
        setPaginaAtiva('lista');
      });
  }

  return (
    <div>
      <NavBar
        paginaAtiva={paginaAtiva}
        onMudarPagina={setPaginaAtiva}
      />

      <main className="container mt-4">
        {paginaAtiva === 'form' && (
          <FormChamado onAdicionarChamado={adicionarChamado} />
        )}

        {paginaAtiva === 'lista' && (
          <ListaChamados
            chamados={chamados}
            loading={loading}
          />
        )}
      </main>
    </div>
  );
}

export default App;