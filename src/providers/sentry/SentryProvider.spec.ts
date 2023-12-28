import * as Sentry from '@sentry/react';
import { KnownAppSDK } from '@contentful/app-sdk';
import { SentryProvider } from './SentryProvider';

jest.mock('@sentry/react', () => ({
  init: jest.fn(),
  BrowserTracing: jest.fn(),
  Replay: jest.fn(),
  getCurrentScope: () => ({
    setUser: jest.fn(),
    setTag: jest.fn(),
  }),
}));

describe('SentryProvider', () => {
  it('can initialize Sentry', () => {
    const initSpy = jest.spyOn(Sentry, 'init');
    const browserTracingSpy = jest.spyOn(Sentry, 'BrowserTracing');

    SentryProvider.init();

    expect(initSpy).toHaveBeenCalled();
    expect(browserTracingSpy).toHaveBeenCalled();
  });

  it('can set Sentry context', () => {
    const getCurrentScopeSpy = jest.spyOn(Sentry, 'getCurrentScope');

    SentryProvider.setContentfulSentryContext({
      ids: { user: 1 },
      location: { is: () => 'SIDEBAR' },
    } as unknown as KnownAppSDK);

    expect(getCurrentScopeSpy).toHaveBeenCalled();
  });
});
