import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  User,
  UserGreeting,
  Photo,
  UserName,
  Icon,
  HightlightCards,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://github.com/miltonsmendes.png" }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Milton</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HightlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HightlightCards>
    </Container>
  );
}
