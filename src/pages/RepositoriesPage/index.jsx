import React from 'react'
import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'

function RepositoriesPage() {
  const user = {
    login: "VictorSalome",
    name: "Victor Salome",
    avatar_url: "https://avatars.githubusercontent.com/u/141586661?v=4",
    followers: 2,
    following: 0,
    company: "",
    blog: "",
    location: "",
  }


  return (

    <Container>

      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        main
      </Main>

    </Container>

  )
}


export default RepositoriesPage
