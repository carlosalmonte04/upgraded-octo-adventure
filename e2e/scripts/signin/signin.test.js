import {element} from 'detox';
import SignInPage from 'e2e/pages/Signin/SignIn.page';

import Assert from 'e2e/assertions';
import Action from 'e2e/actions';

describe('SignIn screen', () => {
  beforeEach(async () => {
    await Action.launch(true);
  });
  it('should have all signin elements visible when not signed in', async () => {
    await Assert.isVisible(SignInPage.signInForm);
    await Assert.isVisible(SignInPage.usernameLabel);
    await Assert.isVisible(SignInPage.usernameInput);
    await Assert.isVisible(SignInPage.passwordLabel);
    await Assert.isVisible(SignInPage.passwordInput);
    await Assert.isVisible(SignInPage.signInButton);
    await Assert.isVisible(SignInPage.googleSignInButton);
    await Assert.isNotVisible(SignInPage.cameraButton);
  });

  it('should have restricted elements not visible before signin', async () => {
    await Assert.isNotVisible(SignInPage.cameraButton);
    await Assert.isNotVisible(SignInPage.googleSignOutButton);
  });

  it('should sign in with test google account', async () => {
    await element(SignInPage.googleSignInButton).tap();
    await Assert.isVisible(SignInPage.googleSignOutButton);
  });

  it('should have signed in elements after successful signin', async () => {
    await Action.tap(SignInPage.googleSignInButton);
    await Assert.isVisible(SignInPage.googleSignOutButton);
    await Assert.isVisible(SignInPage.cameraButton);
  });

  it('should sign in and sign out with test google account', async () => {
    await element(SignInPage.googleSignInButton).tap();
    await Assert.isVisible(SignInPage.googleSignOutButton);
    await element(SignInPage.googleSignOutButton).tap();
    await Assert.isVisible(SignInPage.googleSignInButton);
  });
});
