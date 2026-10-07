import React from 'react';

function ListaChamados({ chamados, loading }) {
  if (loading) {
    return (
      <section>
        <h1>Chamados Abertos</h1>
        <p>Carregando chamados...</p>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-4">
        <h1>Chamados Abertos</h1>
        <p className="text-muted">
          Lista de chamados registrados no sistema.
        </p>
      </div>

      {chamados.length === 0 ? (
        <div className="alert alert-info">
          Nenhum chamado cadastrado.
        </div>
      ) : (
        <div className="row">
          {chamados.map((chamado) => (
            <div className="col-md-6 mb-4" key={chamado.id}>
              <div className="card h-100">
                <div className="card-body">

                  <h5 className="card-title">
                    #{chamado.id} - {chamado.solicitante}
                  </h5>

                  <p className="card-text">
                    <strong>Setor:</strong> {chamado.setor}
                  </p>

                  <p className="card-text">
                    <strong>Tipo:</strong> {chamado.tipo}
                  </p>

                  <p className="card-text">
                    <strong>Descrição:</strong> {chamado.descricao}
                  </p>

                  <p className="card-text">
                    <strong>Prioridade:</strong>{' '}

                    {chamado.prioridade === 'Baixa' && (
                      <span className="badge bg-success">
                        Baixa
                      </span>
                    )}

                    {chamado.prioridade === 'Média' && (
                      <span className="badge bg-warning text-dark">
                        Média
                      </span>
                    )}

                    {chamado.prioridade === 'Alta' && (
                      <span className="badge bg-danger">
                        Alta
                      </span>
                    )}
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default ListaChamados;