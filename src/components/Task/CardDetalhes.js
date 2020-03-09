import React from 'react';

import '../Cards/Cards.sass';

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
            </div>
        </>
    );
}

export default CardDetalhes;
