import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Screen} from '../../../components/Screen/Screen';
import {Icon} from '../../../components/Icon/Icon';
import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';

import {RootStackParamsList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamsList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function handleGoBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      {/* <Icon name={route.params.icon.name} color={route.params.icon.color} /> */}
      <Icon {...route.params.icon} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>

      <Button title="Voltar ao início" mt="s40" onPress={handleGoBackToBegin} />
    </Screen>
  );
}
