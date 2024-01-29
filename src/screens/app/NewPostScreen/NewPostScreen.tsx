import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function NewPostScreen({navigation}: AppScreenProps<'AppTabNavigator'>) {
  return (
    <Screen>
      <Text preset="headingLarge">NewPostScreen</Text>
    </Screen>
  );
}
