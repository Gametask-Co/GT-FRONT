import React from 'react';

import '../Cards/Cards.sass'

function ListaAfazeres() {
    return <>
        <div id="lista-afazeres" className="col-lg-6" >
            <div className="box-titulo-card">
                <h2 className="titulo-filtro col-lg-12">
                    Lista de afazeres
                    </h2>
            </div>

            <div className="box-checkbox-afazeres">
                <div className="checkbox-afazeres">
                    <div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="materialChecked" />
                            <label className="form-check-label" for="materialChecked">Questão 1</label>
                        </div>
                        <div>
                            <p>Breve descrição da atividade</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
};


export default ListaAfazeres;
