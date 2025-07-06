import {device, element, waitFor} from 'detox';

export const launch = async uninstall => {
  const notifications = 'NO';
  const location = 'always';
  const newInstance = true;
  if (uninstall) {
    await device.uninstallApp();
    await device.installApp();
  }
  await device.launchApp({
    permissions: {
      notifications,
      location,
    },
    newInstance,
  });
};

export const waitForVisible = async (matcher, timeout = 5000) => {
  try {
    await waitFor(element(matcher)).toBeVisible().withTimeout(timeout);
  } catch (e) {
    // prevent errors
  }
};

const waitForNotVisible = async (matcher, timeout = 5000) => {
  try {
    await waitFor(element(matcher)).toBeNotVisible().withTimeout(timeout);
  } catch (e) {
    // prevent errors
  }
};

const tap = async matcher => element(matcher).tap();

export default {
  launch,
  waitForVisible,
  tap,
  waitForNotVisible,
};
