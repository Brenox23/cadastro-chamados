import React, { useState } from 'react';

function FormChamado({ onAdicionarChamado }) {
  const [solicitante, setSolicitante] = useState('');
  const [setor, setSetor] = useState('');
  const [tipo, setTipo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [prioridade, setPrioridade] = useState('');

  const [erros, setErros] = useState({});
  const [enviando, setEnviando] = useState(false);

  function validar() {
    const novosErros = {};

    if (solicitante.trim().length < 3) {
      novosErros.solicitante =
        'O nome deve ter pelo menos 3 caracteres.';
    }

    if (setor === '') {
      novosErros.setor = 'Selecione um setor.';
    }

    if (tipo === '') {
      novosErros.tipo = 'Selecione o tipo de problema.';
    }

    if (descricao.trim().length < 10) {
      novosErros.descricao =
        'A descrição deve ter pelo menos 10 caracteres.';
    }

    if (prioridade === '') {
      novosErros.prioridade = 'Selecione uma prioridade.';
    }

    return novosErros;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const novosErros = validar();

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    }

    setErros({});
    setEnviando(true);

    const chamado = {
      solicitante,
      setor,
      tipo,
      descricao,
      prioridade
    };

    onAdicionarChamado(chamado)
      .then(() => {
        setSolicitante('');
        setSetor('');
        setTipo('');
        setDescricao('');
        setPrioridade('');
        setErros({});
      })
      .catch((erro) => {
        console.error('Erro ao cadastrar chamado:', erro);
      })
      .finally(() => {
        setEnviando(false);
      });
  }

  return (
    <section>
      <div className="mb-4">
        <h1>Abrir Chamado</h1>
        <p className="text-muted">
          Preencha os dados para abrir um novo chamado técnico.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label htmlFor="solicitante" className="form-label">
            Nome do Solicitante
          </label>

          <input
            type="text"
            id="solicitante"
            className="form-control"
            value={solicitante}
            onChange={(event) => setSolicitante(event.target.value)}
            placeholder="Digite seu nome"
          />

          {erros.solicitante && (
            <div className="text-danger mt-1">
              {erros.solicitante}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="setor" className="form-label">
            Setor
          </label>

          <select
            id="setor"
            className="form-select"
            value={setor}
            onChange={(event) => setSetor(event.target.value)}
          >
            <option value="">Selecione um setor</option>
            <option value="TI">TI</option>
            <option value="RH">RH</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Operações">Operações</option>
            <option value="Comercial">Comercial</option>
          </select>

          {erros.setor && (
            <div className="text-danger mt-1">
              {erros.setor}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="tipo" className="form-label">
            Tipo de Problema
          </label>

          <select
            id="tipo"
            className="form-select"
            value={tipo}
            onChange={(event) => setTipo(event.target.value)}
          >
            <option value="">Selecione o tipo de problema</option>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Rede">Rede</option>
            <option value="Acesso">Acesso</option>
          </select>

          {erros.tipo && (
            <div className="text-danger mt-1">
              {erros.tipo}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="descricao" className="form-label">
            Descrição do Problema
          </label>

          <textarea
            id="descricao"
            className="form-control"
            rows="5"
            value={descricao}
            onChange={(event) => setDescricao(event.target.value)}
            placeholder="Descreva o problema..."
          />

          {erros.descricao && (
            <div className="text-danger mt-1">
              {erros.descricao}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="prioridade" className="form-label">
            Prioridade
          </label>

          <select
            id="prioridade"
            className="form-select"
            value={prioridade}
            onChange={(event) => setPrioridade(event.target.value)}
          >
            <option value="">Selecione a prioridade</option>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>

          {erros.prioridade && (
            <div className="text-danger mt-1">
              {erros.prioridade}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          disabled={enviando}
        >
          {enviando ? 'Enviando...' : 'Abrir Chamado'}
        </button>
      </form>
    </section>
  );
}

export default FormChamado;