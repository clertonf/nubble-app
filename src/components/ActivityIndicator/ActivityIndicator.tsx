import React from 'react';
import {
  ActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';
import {useAppTheme} from '../../hooks/useAppThemes';
import {ThemeColors} from '../../theme/theme';

type Props = Omit<ActivityIndicatorProps, 'color'> & {
  color: ThemeColors;
};

export function ActivityIndicator({color}: Props) {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} />;
}
