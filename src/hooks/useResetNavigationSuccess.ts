import {useNavigation} from '@react-navigation/native';

import {AuthStackParamsList} from '@routes';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: AuthStackParamsList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'SignInScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return {reset};
}
