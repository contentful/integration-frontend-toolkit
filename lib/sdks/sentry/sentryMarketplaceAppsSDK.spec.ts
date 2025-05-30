import * as Sentry from '@sentry/react';
import { KnownAppSDK } from '@contentful/app-sdk';
import { sentryMarketplaceAppsSDK } from './sentryMarketplaceAppsSDK';

jest.mock('@sentry/react', () => ({
  init: jest.fn(),
  BrowserTracing: jest.fn(),
  Replay: jest.fn(),
  getCurrentScope: () => ({
    setUser: jest.fn(),
    setTag: jest.fn(),
  }),
}));

describe('sentryMarketplaceAppsSDK', () => {
  it('can initialize Sentry', () => {
    const initSpy = jest.spyOn(Sentry, 'init');
    const browserTracingSpy = jest.spyOn(Sentry, 'BrowserTracing');

    sentryMarketplaceAppsSDK.init();

    expect(initSpy).toHaveBeenCalled();
    expect(browserTracingSpy).toHaveBeenCalled();
  });

  it('can set Sentry context', () => {
    const getCurrentScopeSpy = jest.spyOn(Sentry, 'getCurrentScope');
    const sdkIds = { user: 1 } as unknown as KnownAppSDK['ids'];
    const sdkLocations = { is: () => 'SIDEBAR' } as unknown as KnownAppSDK['location'];
    sentryMarketplaceAppsSDK.setContentfulSentryContext(sdkIds, sdkLocations, 'appName');

    expect(getCurrentScopeSpy).toHaveBeenCalled();
  });
});
