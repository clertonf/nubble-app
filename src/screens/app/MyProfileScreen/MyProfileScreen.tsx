import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function MyProfileScreen({
  navigation,
}: AppScreenProps<'AppTabNavigator'>) {
  return (
    <Screen>
      <Text preset="headingLarge">MyProfileScreen</Text>
    </Screen>
  );
}
