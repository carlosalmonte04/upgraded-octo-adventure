import {by} from 'detox';
import testIDs from 'src/test-ids';

class CameraPage {
  get backButton() {
    return by.id(testIDs.page.camera.backButton);
  }
  get cameraView() {
    return by.id(testIDs.page.camera.cameraView);
  }
  get picture() {
    return by.id(testIDs.page.camera.picture);
  }
  get deletePicture() {
    return by.id(testIDs.page.camera.deletePicture);
  }
  get shutter() {
    return by.id(testIDs.page.camera.shutter);
  }
}

export default new CameraPage();
