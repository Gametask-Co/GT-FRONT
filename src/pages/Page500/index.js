import React from 'react';
import { Link } from 'react-router-dom';

import { PageError, Gametask } from '../../components/Modais/styled';
import { BackgroundModal } from '../../components/Modais';

function Page500() {
  return (
    <BackgroundModal>
      <PageError>
        <Gametask />
        <div>
          <h1>500!</h1>
          <span>Erro em serviço interno</span>
          <p>Não sabe como veio parar aqui?</p>
          <Link to="/">Voltar para página inicial!</Link>
        </div>
      </PageError>
    </BackgroundModal>
  );
}

export default Page500;
