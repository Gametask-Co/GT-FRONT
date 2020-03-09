import React from 'react';

import '../Cards/Cards.sass';

function CardDetalhes() {
    return (
        <>
            <div id="card-detalhes">
                <div className="cabecalho-card col-lg-12">
                    <h2 className="title">DETALHES</h2>
                    <div>
                        <button className="btn btn-outline-primary">
                            EDITAR
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDetalhes;
