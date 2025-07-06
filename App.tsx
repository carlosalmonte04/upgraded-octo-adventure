import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'src/components/common';
import routes, {HomeScreen, CameraScreen} from 'src/routes';
import translate from 'src/locales';
import type {RootStackParamList} from 'src/types';
import {useMemo} from 'react';
import {HeaderBack} from 'src/components/common/HeaderBack';
import {StyleSheet} from 'react-native';

export function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
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

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  const homeScreenOptions = useMemo(
    () => ({
      title: translate('common.home'),
    }),
    [],
  );

  const detailsScreenOptions = useMemo(
    () => ({
      title: translate('common.details'),
    }),
    [],
  );

  const cameraScreenOptions = useMemo(
    () => ({
      title: translate('common.camera'),
      headerLeft: HeaderBack,
    }),
    [],
  );

  return (
    <NavigationContainer>
      <Stack.Navigator id={undefined} initialRouteName={routes.Home}>
        <Stack.Screen
          name={routes.Home}
          component={HomeScreen}
          options={homeScreenOptions}
        />
        <Stack.Screen
          name={routes.Details}
          component={DetailsScreen}
          options={detailsScreenOptions}
        />
        <Stack.Screen
          name={routes.Camera}
          component={CameraScreen}
          options={cameraScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
