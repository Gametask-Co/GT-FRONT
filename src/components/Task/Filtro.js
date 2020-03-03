import React from 'react';

import '../Cards/Cards.sass'

function Filtro() {
    return <>
        <div class="filtro">
            <div class="box-titulo-filtro">
                <h2 class="titulo-filtro">
                    Filtros
                </h2>
            </div>
            <div>
                <form id="busca" action="">
                    <input type="text" name="" id="campo-busca" placeholder="Pesquisar"/>
                    <button id="botao-pesquisar" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
            </div>

            <div id="filtros">

                    <div class="box-botao-colapso">
                        <a className="text-primary collapsed" data-toggle="collapse" href="#lista-filtro-atividades"
                           aria-expanded="false" aria-controls="collapseOne">
                            Atividades
                        </a>
                    </div>
                    <div class="collapse lista-filtros" id="lista-filtro-atividades" >
                        <li>
                            <input type="checkbox" name="todas" id="todas"/>
                            <label htmlFor="todas">Todas</label>
                        </li>
                        <li>
                            <input type="checkbox" name="pendentes" id="pendentes"/>
                            <label htmlFor="pendentes">Pendentes</label>
                        </li>
                        <li>
                            <input type="checkbox" name="concluidas" id="concluidas"/>
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
                        <input type="checkbox" name="todas" id="todas"/>
                        <label htmlFor="todas">Todas</label>
                    </li>
                    <li>
                        <input type="checkbox" name="pendentes" id="pendentes"/>
                        <label htmlFor="pendentes">Pendentes</label>
                    </li>
                    <li>
                        <input type="checkbox" name="concluidas" id="concluidas"/>
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
                        <input type="checkbox" name="todas" id="todas"/>
                        <label for="todas">Todas</label>
                    </li>
                    <li>
                        <input type="checkbox" name="pendentes" id="pendentes"/>
                        <label htmlFor="pendentes">Pendentes</label>
                    </li>
                    <li >
                        <input type="checkbox" name="concluidas" id="concluidas"/>
                        <label htmlFor="concluidas">Concluídas</label>
                    </li>
                </div>
            </div>

        </div>
    </>
};

export default Filtro;
