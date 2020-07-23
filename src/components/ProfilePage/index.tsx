import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Deia Ribeiro</h1>
        <h2>@deiaribeiro</h2>
        <p>
          Developer at <a href="https://rocketseat.com.br">Rocketseat</a>
        </p>
        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 02 de Março de 1985
          </li>
        </ul>
        <Followage>
          <span>
            seguindo <strong> 94 </strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      {/* <Feed /> */}
    </Container>
  );
}

export default ProfilePage;