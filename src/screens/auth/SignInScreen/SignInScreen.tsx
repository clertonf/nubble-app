import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {Button} from '../../../components/Button/Button';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {RootStackParamsList} from '../../../routes/Routes';
import {SignInSchema, signInSchema} from './signInSchema';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'SignInScreen'>;

export function SignInScreen({navigation}: ScreenProps) {
  const {control, formState, handleSubmit} = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmitForm({email, password}: SignInSchema) {
    console.log({email, password});
  }

  function handleNavigateToSignUpScreen() {
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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{mb: 's20'}}
      />

      <Text
        preset="paragraphSmall"
        color="primary"
        bold
        onPress={handleNavigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        title="Entrar"
        mt="s48"
        onPress={handleSubmit(onSubmitForm)}
      />
      <Button
        title="Criar conta"
        mt="s12"
        preset="outline"
        onPress={handleNavigateToSignUpScreen}
      />
    </Screen>
  );
}
