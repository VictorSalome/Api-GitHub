import React from 'react'
import { Container, Sidebar, Main } from './styles'
import Profile from './Profile'
import Filter from './Filter'
import { getLangsFrom } from '../../services/api'


function RepositoriesPage() {
  const user = {
    login: "VictorSalome",
    name: "Victor Salome",
    avatar_url: "https://avatars.githubusercontent.com/u/141586661?v=4",
    followers: 2,
    following: 0,
    company: "Desenvolvedor Front End",
    blog: "",
    location: "São Paulo/SP",
  }

  const repositories = [

    {
      name: 'Repo 1',
      description: 'Descrição',
      html_url: '',
      language: 'JavaScript'

    }, {
      name: 'Repo 2',
      description: 'Descrição',
      html_url: '',
      language: 'Ruby'

    },
    {
      name: 'Repo 3',
      description: 'Descrição',
      html_url: '',
      language: 'JavaScript'

    },
    {
      name: 'Repo 4',
      description: 'Descrição',
      html_url: '',
      language: 'Java'

    },
    {
      name: 'Repo 5',
      description: 'Descrição',
      html_url: '',
      language: 'Python'

    },
    {
      name: 'Repo 6',
      description: 'Descrição',
      html_url: '',
      language: 'TypeScript'

    },
  ]

  const languages = getLangsFrom(repositories)


  return (

    <Container>

      <Sidebar>
        <Profile user={user} />
        <Filter
          repositories={repositories}
          languages={languages} />
      </Sidebar>
      <Main>
        main
      </Main>

    </Container>

  )
}


export default RepositoriesPage
