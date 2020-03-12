import React from 'react';

import '../Cards/Cards.sass';
import ListaAfazeres from './ListaAfazeres';

function CardDetalhes() {
    return (
        <>
            <div id="card-detalhes">
                <div className="box-titulo-card col-lg-12">
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
                            <h2 className="titulo-filtro col-lg-12">
                                Ficha Técnica
                            </h2>
                        </div>
                        <div className="cabecalho-ficha-tecnica col-lg-12">
                            <div>
                                <h2>
                                    Titulo de titulo
                                </h2>
                            </div>
                            <div>
                                <p>21/03/2000</p>
                            </div>
                        </div>

                        <div className="">
                            <h2>
                                Titulo da  atividades
                            </h2>

                            <p>
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
                        <div>
                            
                        </div>


                    </div>



                    <ListaAfazeres />

                </div>
            </div>
        </>
    );
}

export default CardDetalhes;
