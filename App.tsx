import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';

import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box style={{paddingHorizontal: 20, gap: 12}}>
          <Text preset="headingLarge" italic>
            Hello World!
          </Text>
          <Button title="Primary" preset="primary" />
          <Button title="Outline" preset="outline" />

          <Icon name="chevronRight" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
