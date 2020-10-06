import React from 'react';

import '../Task/Filtro.sass'

function Filtro() {
    return <>
        <div className="filtro col-lg-3">
            <div className="box-titulo-card">
                <h1 className="titulo-filtro col-lg-12">
                    Filtros
                </h1>
            </div>

            <div className="col-lg-12 box-form-search">
                <form id="busca" action="">
                    <input type="text" name="" id="campo-busca" placeholder="Pesquisar" />
                    <button id="botao-pesquisar" type="submit">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <div id="filtros" className="col-lg-12">

                <div className="box-botao-colapso">
                    <a className="text-primary collapsed" data-toggle="collapse" href="#lista-filtro-atividades"
                        aria-expanded="false" aria-controls="collapseOne">
                        <h3 className="titulo-card">
                            Atividades
                        </h3>
                    </a>
                </div>
                <div className="collapse lista-filtros" id="lista-filtro-atividades" >
                    <div id="filtro-box-form-checkbox">
                        <div className="filtro-form-check">
                            <label className="filtro-checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                        <div className="filtro-form-check">
                            <label className="filtro-checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                        <div className="filtro-form-check">
                            <label className="filtro-checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                    </div>
                </div>

                <div className="box-botao-colapso">
                    <a className="text-primary collapsed" data-toggle="collapse" href="#lista-filtro-disciplinas"
                        aria-expanded="false" aria-controls="collapseOne">
                        <h3 className="titulo-card">Disciplinas</h3>
                    </a>
                </div>
                <div className="collapse lista-filtros" id="lista-filtro-disciplinas">
                    <div id="filtro-box-form-checkbox">
                        <div className="filtro-form-check">
                            <label className="filtro-checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                        <div className="filtro-form-check">
                            <label className="filtro-checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                        <div className="filtro-form-check">
                            <label className="filtro-checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                    </div>
                </div>

                <div className="box-botao-colapso">
                    <a className="text-primary collapsed" data-toggle="collapse" href="#lista-filtro-projetos"
                        aria-expanded="false" aria-controls="collapseOne">
                        <h3 className="titulo-card">projetos</h3>
                    </a>
                </div>
                <div className="collapse lista-filtros" id="lista-filtro-projetos">
                    <div id="filtro-box-form-checkbox">
                        <div className="filtro-form-check">
                            <label className="filtro-checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                        <div className="filtro-form-check">
                            <label className="filtro-checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                        <div className="filtro-form-check">
                            <label className="filtro-checkbox-label">
                                <input type="checkbox" id="batata" />
                                <span className="checkbox-custom rectangular"></span>
                            </label>
                            <label className="form-check-label" forhtml="batata">Questão 1</label>
                        </div>
                    </div>
                </div>


            </div>
            <div className="box-botao-criar-atividade col-lg-12">
                <button className="btn btn-outline-secondary btn-block">NOVA ATIVIDADE</button>
            </div>
        </div>

    </>
};

export default Filtro;
