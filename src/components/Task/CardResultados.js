import React from 'react';

import '../Cards/Cards.sass'

function CardResultados() {
    return (
        <>
            <div id="card-resultados" className="col-lg-3">
                <div className="box-titulo-card">
                    <h1 className="titulo-filtro col-lg-12">
                        Resultados
                    </h1>
                </div>
                <div id="box-lista-resultados">
                    <ul id="lista-resultados">
                        <li className="retangulo active col-lg-10">
                            <div className="row cabecalho-resultado">
                                <h4 className="title titulo-resultado">
                                    Titulo do resultado
                                </h4>
                                <h4>
                                    30/01/2021
                                </h4>
                            </div>
                            <div className="retangulo-titulo-atividade">
                                <h2>Titulo da Atividade</h2>
                            </div>
                        </li>

                        {/* <li className="retangulo col-lg-10">
                            <div className="row cabecalho-resultado">
                                <h4 className="title titulo-resultado">
                                    Titulo do resultado
                                </h4>
                                <h4>
                                    30/01/2021
                                </h4>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default CardResultados;
