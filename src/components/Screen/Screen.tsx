import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox, Icon, Text} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps {
  children: React.ReactNode;
  canGoback?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  canGoback = false,
  scrollable = false,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const navigation = useNavigation();

  const {colors} = useAppTheme();
  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {/* backgroundColor={colors.background} */}
      <Container backgroundColor={colors.background}>
        <Box
          paddingBottom="s24"
          paddingHorizontal="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}>
          {canGoback && (
            <TouchableOpacityBox
              mb="s24"
              flexDirection="row"
              alignItems="center"
              onPress={navigation.goBack}>
              <Icon name="arrowLeft" color="primary" />
              <Text preset="paragraphMedium" semiBold ml="s8">
                Voltar
              </Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
