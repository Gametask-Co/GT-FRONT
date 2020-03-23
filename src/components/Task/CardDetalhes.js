import React from 'react';

import '../Cards/Cards.sass';
import ListaAfazeres from './ListaAfazeres';

function CardDetalhes() {
    return (
        <>
            <div id="card-detalhes" className="col-lg-6">
                <div className="box-titulo-card">
                    <h1 className="titulo-filtro col-lg-10">
                        Detalhes
                    </h1>
                    <div className="bd-example col-lg-2">
                        <button className="btn btn-outline-secondary btn-block">
                            EDITAR
                        </button>
                    </div>
                </div>

                <div id="main-card-detalhes" className="d-flex">
                    <div id="ficha-tecnica" className="col-lg-6">
                        <div className="box-titulo-card">
                            <h3 className="titulo-card">
                                Ficha Técnica:
                            </h3>
                        </div>
                        <div className="cabecalho-ficha-tecnica">
                            <div>
                                <h3 id="titulo-dessa-atividade">
                                    Titulo de titulo
                                </h3>
                            </div>
                            <div>
                                <p>21/03/2000</p>
                            </div>
                        </div>

                        <div className="box-textos-descritivos">
                            <h2 className="titulo-box-textos-descritivos">
                                Titulo da  atividades
                            </h2>

                            <p className="texto-descricao-atividade">
                                Descrição da atividade. batata batata batata batata batata batata batata batata
                                batata batata batata batata batata batata batata batata batata batata batata
                                batata batata batata batata batata batata batata batata batata batata batata batata
                                batata batata batata batata batata batata batata batata batata batata batata batata
                                batata batata batata batata batata batata batata batata batata batata batata batata
                                batata batata batata batata batata batata batata batata batata batata batata batata
                                batata batata batata batata batata batata batata batata batata batata
                                batata batata batata batata batata batata batata
                            </p>

                        </div>
                        <div className="box-btn-inferiores">

                            <div className="col-lg-6">
                                <button type="button" id="btn-desistir" className="btn btn-secondary btn-lg btn-block">
                                    {/* <img srcSet="img/icons-8-cancel.png" srcset="img/icons-8-cancel@2x.png 2x,img/icons-8-cancel@3x.png 3x" className="icons8_cancel"></img> */}
                                    DESISTIR
                                </button>
                            </div>

                            <div className="col-lg-6">
                                <button type="button" id="btn-concluir" className="btn btn-primary btn-lg btn-block">
                                    {/* <img srcSet="img/icons-8-trophy.svg" className="icons8_trophy"></img> */}
                                    CONCLUIR
                                </button>
                            </div>

                        </div>


                    </div>

                    <ListaAfazeres />

                </div>
            </div>
        </>
    );
}

export default CardDetalhes;
