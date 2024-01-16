import React from "react";

import { MdSearch } from "react-icons/md";
import { Button, Container, Form, Input, Logo, Title } from "./styles";

import githubLogo from "../../assets/images/github-logo.svg";

function MainPage() {
  return (
    <Container>
      <Logo src={githubLogo} alt="API GitHub" />
      <Title>API Github</Title>
      <Form>
        <Input placeholder="Pesquisar úsuario Github" />
        <Button>
          <MdSearch size={42} color="white" />
        </Button>


      </Form>
    </Container>
  );
}

export default MainPage
