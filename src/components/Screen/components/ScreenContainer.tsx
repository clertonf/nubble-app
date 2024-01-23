import React from 'react';
import {View, ScrollView} from 'react-native';

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={{backgroundColor}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={{flex: 1, backgroundColor}}>{children}</View>;
}
