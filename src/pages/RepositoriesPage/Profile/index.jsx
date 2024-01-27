import React from 'react'
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles'


function Profile() {
  return (

    <Container>
      <Header>
        <Avatar src="https://avatars.githubusercontent.com/u/141586661?v=4" alt="Avatar" />
        <Login>VictorSalome</Login>
        <Name>Victor Salome</Name>
      </Header>
      <Inner>
        <Data> <MdGroup size={20} />30&nbsp;<i>seguidores</i>&nbsp;&middot; &nbsp;10&nbsp;<i>seguindo</i></Data>
        <Data> <MdWork size={20} />Programador Front End</Data>
        <Data> <MdLocationCity size={20} />São Paulo, Capital</Data>
        <Data>
          <MdLink size={20} />
          <a href="https://github.com/VictorSalome">Portifolio </a>
        </Data>

      </Inner>
    </Container>

  )
}


export default Profile
