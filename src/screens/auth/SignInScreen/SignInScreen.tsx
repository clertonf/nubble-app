import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {RootStackParamsList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'SignInScreen'>;

export function SignInScreen({navigation}: ScreenProps) {
  function handleNavigateToSignUpScreen() {
    // navigation.navigate('SuccessScreen', {
    //   title: 'Sua conta foi criada com sucesso',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
    navigation.navigate('SignUpScreen');
  }

  function handleNavigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá!
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        errorMessage="Mensagem de error"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's10'}}
      />

      <Text
        mt="s10"
        preset="paragraphSmall"
        color="primary"
        bold
        onPress={handleNavigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" onPress={() => {}} />
      <Button
        title="Criar conta"
        mt="s12"
        preset="outline"
        onPress={handleNavigateToSignUpScreen}
      />
    </Screen>
  );
}
