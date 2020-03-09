import React from 'react';

import '../Cards/Cards.sass'

function Filtro() {
    return <>
        <div className="filtro">
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
                        Atividades
                        </a>
                </div>
                <div className="collapse lista-filtros" id="lista-filtro-atividades" >
                    <li>
                        <input type="checkbox" name="todas" id="todas" />
                        <label htmlFor="todas">Todas</label>
                    </li>
                    <li>
                        <input type="checkbox" name="pendentes" id="pendentes" />
                        <label htmlFor="pendentes">Pendentes</label>
                    </li>
                    <li>
                        <input type="checkbox" name="concluidas" id="concluidas" />
                        <label htmlFor="concluidas">Concluídas</label>
                    </li>
                </div>


                <div className="box-botao-colapso">
                    <a className="text-primary collapsed" data-toggle="collapse" href="#lista-filtro-disciplinas"
                        aria-expanded="false" aria-controls="collapseOne">
                        Disciplinas
                    </a>
                </div>
                <div className="collapse lista-filtros" id="lista-filtro-disciplinas">
                    <li>
                        <input type="checkbox" name="todas" id="todas" />
                        <label htmlFor="todas">Todas</label>
                    </li>
                    <li>
                        <input type="checkbox" name="pendentes" id="pendentes" />
                        <label htmlFor="pendentes">Pendentes</label>
                    </li>
                    <li>
                        <input type="checkbox" name="concluidas" id="concluidas" />
                        <label htmlFor="concluidas">Concluídas</label>
                    </li>
                </div>

                <div className="box-botao-colapso">
                    <a className="text-primary collapsed" data-toggle="collapse" href="#lista-filtro-projetos"
                        aria-expanded="false" aria-controls="collapseOne">
                        Projetos
                    </a>
                </div>
                <div className="collapse lista-filtros" id="lista-filtro-projetos">
                    <li>
                        <input type="checkbox" name="todas" id="todas" />
                        <label htmlFor="todas">Todas</label>
                    </li>
                    <li>
                        <input type="checkbox" name="pendentes" id="pendentes" />
                        <label htmlFor="pendentes">Pendentes</label>
                    </li>
                    <li >
                        <input type="checkbox" name="concluidas" id="concluidas" />
                        <label htmlFor="concluidas">Concluídas</label>
                    </li>
                </div>
            </div>

            <div className="box-botao-criar-atividade col-lg-12">
                <button className="btn btn-outline-secondary btn-block">NOVA ATIVIDADE</button>
            </div>
        </div>

    </>
};

export default Filtro;
