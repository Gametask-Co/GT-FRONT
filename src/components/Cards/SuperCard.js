import React from 'react';

import './Cards.sass'
import Filtro from '../Task/Filtro'
import CardResultados from '../Task/CardResultados'
import CardDetalhes from '../Task/CardDetalhes';

function SuperCard() {
    return (
        <>
            <div id="super-card">
                <Filtro/>
                <CardResultados/>
                <CardDetalhes/>
            </div>
        </>
    );
}

export default SuperCard;
