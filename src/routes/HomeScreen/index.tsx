import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'src/components/common';
import {useGoogleSignIn} from 'src/hooks/googleSignin';
import {SignInForm} from 'src/components/SignIn/SignInForm';
import {TempActions} from 'src/components/Temp/TempActions';
import routes from 'src/routes';
import {StyleSheet} from 'react-native';

import type {RootStackParamList} from 'src/types';

type Props = NativeStackScreenProps<RootStackParamList, routes.Home>;

export function HomeScreen(props: Props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {userInfo, googleSignIn, googleSignOut, isSigninInProgress} =
    useGoogleSignIn();

  const navigateToCamera = React.useCallback(() => {
    props.navigation.navigate(routes.Camera);
  }, [props.navigation]);

  return (
    <View style={styles.container}>
      <SignInForm
        isSignedIn={!!userInfo.userInfo}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        googleSignIn={googleSignIn}
        isSigninInProgress={isSigninInProgress}
      />
      <TempActions
        isSignedIn={!!userInfo.userInfo}
        onCameraPress={navigateToCamera}
        googleSignOut={googleSignOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
