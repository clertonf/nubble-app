import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoback>
      <Text preset="headingLarge">SettingsScreen</Text>
    </Screen>
  );
}
