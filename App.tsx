import "intl";
import "intl/locale-data/jsonp/pt-BR";

import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

import { Signin } from "./src/screens/Signin";

import { AuthProvider } from "./src/hooks/auth";

export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        {/* <AppRoutes /> */}
        <AuthProvider>
          <Signin />
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
