import {by} from 'detox';
import testIDs from 'src/test-ids';

class SignInPage {
  get signInForm() {
    return by.id(testIDs.page.signin.signInForm);
  }
  get usernameLabel() {
    return by.id(testIDs.page.signin.usernameLabel);
  }
  get usernameInput() {
    return by.id(testIDs.page.signin.usernameInput);
  }
  get passwordLabel() {
    return by.id(testIDs.page.signin.passwordLabel);
  }
  get passwordInput() {
    return by.id(testIDs.page.signin.passwordInput);
  }
  get signInButton() {
    return by.id(testIDs.page.signin.signinBtn);
  }
  get googleSignInButton() {
    return by.id(testIDs.page.signin.googleSignInButton);
  }
  get googleSignOutButton() {
    return by.id(testIDs.page.signin.googleSignOutButton);
  }
  get cameraButton() {
    return by.id(testIDs.page.signin.cameraButton);
  }
}

export default new SignInPage();
