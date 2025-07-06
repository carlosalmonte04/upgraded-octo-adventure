import {expect, element} from 'detox';
import Actions from '../actions';

export const isVisible = async (matcher, timeout = 5000) => {
  await Actions.waitForVisible(matcher, timeout);
  await expect(element(matcher)).toBeVisible();
};

export const isNotVisible = async (matcher, timeout = 5000) => {
  await Actions.waitForNotVisible(matcher, timeout);
  await expect(element(matcher)).toBeNotVisible();
};

export default {
  isVisible,
  isNotVisible,
};
