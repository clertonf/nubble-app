import React from 'react';

import {Button, Icon, Screen, Text} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
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
