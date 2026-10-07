import React from 'react';

function NavBar({ paginaAtiva, onMudarPagina }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">
          Helpdesk TI
        </span>

        <div className="navbar-nav">
          <button
            type="button"
            className={`nav-link btn btn-link ${
              paginaAtiva === 'form' ? 'active' : ''
            }`}
            onClick={() => onMudarPagina('form')}
          >
            Abrir Chamado
          </button>

          <button
            type="button"
            className={`nav-link btn btn-link ${
              paginaAtiva === 'lista' ? 'active' : ''
            }`}
            onClick={() => onMudarPagina('lista')}
          >
            Chamados Abertos
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;