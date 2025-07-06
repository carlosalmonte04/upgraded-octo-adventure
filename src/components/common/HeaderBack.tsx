import React, {useCallback} from 'react';
import {
  HeaderBackButton,
  HeaderBackButtonProps,
} from '@react-navigation/elements';
import testIds from 'src/test-ids';
import {useNavigation} from '@react-navigation/native';

export const HeaderBack = (props: HeaderBackButtonProps): JSX.Element => {
  const navigation = useNavigation();

  const onPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <HeaderBackButton
      {...props}
      onPress={onPress}
      testID={testIds.page.camera.backButton}
    />
  );
};
