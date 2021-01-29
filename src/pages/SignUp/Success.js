import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Header, Gametask } from '../../components/Modais/styled';
import { BackgroundModal } from '../../components/Modais';

import { useHistory } from 'react-router-dom';

const Success = () => {
  const [count, setCount] = useState(5);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setCount((a) => {
        return a - 1;
      });
    }, 1000);

    if (count === 0) {
      history.push('/signin');
    }
  }, [count, history]);

  return (
    <BackgroundModal>
      <Header>
        <Gametask />
        <h1>Confirme seu email</h1>
        <p>
          Para concluir o seu cadastro clique no link que enviamos para seu
          email.
        </p>
        <p>
          Não recebeu nenhum email? <Link to="/signin">Reenviar</Link>
        </p>
      </Header>
      <span>Redirecionando ao login em {count}...</span>
    </BackgroundModal>
  );
};

export default Success;
