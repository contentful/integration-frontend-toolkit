import * as Sentry from '@sentry/react';
import { KnownAppSDK } from '@contentful/app-sdk';
import { sentryMarketplaceAppSdk } from './sentryMarketplaceAppSdk';

jest.mock('@sentry/react', () => ({
  init: jest.fn(),
  BrowserTracing: jest.fn(),
  Replay: jest.fn(),
  getCurrentScope: () => ({
    setUser: jest.fn(),
    setTag: jest.fn(),
  }),
}));

describe('sentryMarketplaceAppSdk', () => {
  it('can initialize Sentry', () => {
    const initSpy = jest.spyOn(Sentry, 'init');
    const browserTracingSpy = jest.spyOn(Sentry, 'BrowserTracing');

    sentryMarketplaceAppSdk.init();

    expect(initSpy).toHaveBeenCalled();
    expect(browserTracingSpy).toHaveBeenCalled();
  });

  it('can set Sentry context', () => {
    const getCurrentScopeSpy = jest.spyOn(Sentry, 'getCurrentScope');
    const sdkIds = { user: 1 } as unknown as KnownAppSDK['ids'];
    const sdkLocations = { is: () => 'SIDEBAR' } as unknown as KnownAppSDK['location'];
    sentryMarketplaceAppSdk.setContentfulSentryContext(sdkIds, sdkLocations);

    expect(getCurrentScopeSpy).toHaveBeenCalled();
  });
});
