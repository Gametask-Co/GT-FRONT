import React from 'react';

import '../Cards/Cards.sass'

function ListaAfazeres() {
    return <>
        <div id="lista-afazeres">
            <div className="box-titulo-card">
                <h3 className="titulo-card col-lg-12">
                    Lista de afazeres:
                </h3>
            </div>

            <div className="box-checkbox-afazeres">
                <div className="checkbox-afazeres">
                    <div id="box-form-checkbox">
                        <div className="form-check">
                            <label className="checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                        <div>
                            <p className="descricao-atividade">Breve descrição da atividade</p>
                        </div>
                    </div>
                    <div id="box-form-checkbox">
                        <div className="form-check">
                            <label className="checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 2</label>
                        </div>
                        <div>
                            <p className="descricao-atividade">Breve descrição da atividade</p>
                        </div>
                    </div>
                    <div id="box-form-checkbox">
                        <div className="form-check">
                            <label className="checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 3</label>
                        </div>
                        <div>
                            <p className="descricao-atividade">Breve descrição da atividade</p>
                        </div>
                    </div>
                    <div id="box-form-checkbox">
                        <div className="form-check">
                            <label className="checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 4</label>
                        </div>
                        <div>
                            <p className="descricao-atividade">Breve descrição da atividade</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
};


export default ListaAfazeres;
