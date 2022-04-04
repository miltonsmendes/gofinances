import React from "react";
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import LogoSvg from "../../assets/logo.svg";
import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";

import { useAuth } from "../../hooks/auth";

import { SignInSocialButton } from "../../components/SignInSocialButton";

import {
  Container,
  Header,
  TittleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export function Signin() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();

    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar a conta Google");
    }
  }

  return (
    <Container>
      <Header>
        <TittleWrapper>
          <LogoSvg width={RFValue(120)} height={RFValue(68)} />
          <Title>
            Controle suas {"\n"} finaças de forma {"\n"} muito simples
          </Title>
        </TittleWrapper>

        <SignInTitle>
          Faça seu login com {"\n"} uma das contas abaixo
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton title="Entrar com o Google" svg={GoogleSvg} onPress={handleSignInWithGoogle} />
          <SignInSocialButton title="Entrar com Apple" svg={AppleSvg} />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
