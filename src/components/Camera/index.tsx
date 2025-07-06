import React from 'react';
import {View, Touchable, Image} from 'src/components/common';
import {Camera as CameraView} from 'react-native-vision-camera';
import testIds from 'src/test-ids';

type Props = {
  device: any;
  photo: string | null;
  shutterSize: number;
  onTakePhoto: () => void;
  removePhoto: () => void;
};

export const Camera = React.forwardRef<CameraView, Props>(
  (props: Props, ref: React.Ref<CameraView>): JSX.Element => {
    const [isCameraReady, setIsCameraReady] = React.useState<boolean>(false);
    const {device, photo, shutterSize, onTakePhoto, removePhoto} = props;
    return (
      <View className="grow justify-around">
        <View className="basis-[79] w-[95%] rounded-[12px] overflow-hidden self-center">
          {photo && (
            <Image
              testID={testIds.page.camera.picture}
              source={{uri: photo}}
              className="absolute inset-y-0 inset-x-0"
            />
          )}
          {!photo && (
            <CameraView
              ref={ref}
              photo
              testID={testIds.page.camera.cameraView}
              className="absolute inset-y-0 inset-x-0"
              device={device}
              isActive
              onInitialized={() => {
                setIsCameraReady(true);
              }}
            />
          )}
        </View>
        <Touchable
          disabled={!isCameraReady}
          testID={
            photo
              ? testIds.page.camera.deletePicture
              : testIds.page.camera.shutter
          }
          onPress={photo ? removePhoto : onTakePhoto}
          className={`bg-[${
            photo ? '#888' : '#F00'
          }] self-center w-[${shutterSize}px] h-[${shutterSize}px] rounded-[${shutterSize}px]`}
        />
      </View>
    );
  },
);
