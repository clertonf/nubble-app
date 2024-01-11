import React from 'react';

import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {Text} from '../Text/Text';
import {buttonPresets} from './buttonPresets';
import {ActivityIndicator} from '../ActivityIndicator/ActivityIndicator';

export type ButtonPreset = 'primary' | 'outline';

type ButtonProps = TouchableOpacityBoxProps & {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
};

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      activeOpacity={0.7}
      paddingHorizontal="s20"
      height={50}
      borderRadius="s16"
      alignItems="center"
      justifyContent="center"
      disabled={disabled || loading}
      {...buttonPreset.container}
      {...touchableOpacityProps}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
