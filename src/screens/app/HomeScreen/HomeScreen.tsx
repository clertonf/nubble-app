import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function HomeScreen({navigation}: AppScreenProps<'AppTabNavigator'>) {
  return (
    <Screen>
      <Text preset="headingLarge">HomeScreen</Text>

      <Button
        title="SettingsScreen"
        onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
