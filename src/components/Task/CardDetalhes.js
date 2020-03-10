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

                <div id="main-card-detalhes" className=" col-lg-12 d-flex">
                    <div id="ficha-tecnica" className="col-lg-6">
                        <div className="box-titulo-card">
                            <h2 className="titulo-filtro col-lg-12">
                                Ficha Técnica
                            </h2>
                        </div>
                    </div>



                    <ListaAfazeres />

                </div>
            </div>
        </>
    );
}

export default CardDetalhes;
