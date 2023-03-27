import React from 'react';
import {Platform} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Camera as CameraComponent,
  useCameraDevices,
  TakePhotoOptions,
  TakeSnapshotOptions,
} from 'react-native-vision-camera';
import {Photo} from 'src/components/common';
import {Camera} from 'src/components/Camera';
import routes from 'src/routes';
import {RootStackParamList} from 'src/types';

type Props = NativeStackScreenProps<RootStackParamList, routes.Camera>;

export function CameraScreen(props: Props) {
  const devices = useCameraDevices();
  const camera = React.useRef<CameraComponent>(null);
  const [photo, setPhoto] = React.useState<string | null>(null);
  const takePhotoOptions = React.useMemo<
    TakePhotoOptions & TakeSnapshotOptions
  >(
    () => ({
      photoCodec: 'jpeg',
      qualityPrioritization: 'speed',
      quality: 90,
      skipMetadata: true,
    }),
    [],
  );
  const device = devices.back;

  const onTakePhoto = React.useCallback(async () => {
    try {
      const photo =
        Platform.OS === 'ios'
          ? await camera.current?.takePhoto(takePhotoOptions)
          : await camera.current?.takeSnapshot(takePhotoOptions);
      if (photo) {
        setPhoto('file://' + photo.path);
      }
    } catch (err) {
      console.log('**LOG** photo error:', err);
    }
  }, []);

  const removePhoto = React.useCallback(() => {
    setPhoto(null);
  }, []);

  if (device == null) return null;

  return (
    <Camera
      ref={camera}
      photo={photo}
      device={device}
      shutterSize={80}
      onTakePhoto={onTakePhoto}
      removePhoto={removePhoto}
    />
  );
}
