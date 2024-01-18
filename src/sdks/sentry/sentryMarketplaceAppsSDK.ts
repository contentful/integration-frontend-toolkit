import * as Sentry from '@sentry/react';
import { KnownAppSDK } from '@contentful/app-sdk';
import { upperFirst } from 'lodash';
import { consolidateContentfulAppInfo } from './consolidateContentfulAppInfo/consolidateContentfulAppInfo';

interface SentryMarketplaceAppSdk {
  init: (configOptions?: Sentry.BrowserOptions) => void;
  setContentfulSentryContext: (
    sdkIds: KnownAppSDK['ids'],
    sdkLocation: KnownAppSDK['location']
  ) => void;
  client: typeof Sentry;
}

/**
 * Init function to instantiate Sentry
 * @param {object} configOptions - options to pass the Sentry init function
 */

const init = (configOptions?: Sentry.BrowserOptions) =>
  Sentry.init({
    dsn: 'https://b8f524eae7c446fb8071476431426640@o2239.ingest.sentry.io/4504725335834624',
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    ...configOptions,
  });

/**
 * Method to add Contentful specific details to the Sentry scope
 * @param {object} sdkIds - ids associated with app installation
 * @param {object} sdkLocation - locatio associated with app installation
 */

const setContentfulSentryContext = (
  sdkIds: KnownAppSDK['ids'],
  sdkLocation: KnownAppSDK['location']
) => {
  const scope = Sentry.getCurrentScope();
  if (sdkIds.user) scope.setUser({ id: sdkIds.user });
  for (const [key, value] of Object.entries(consolidateContentfulAppInfo(sdkIds, sdkLocation))) {
    if (value) scope.setTag(`X-Contentful-${upperFirst(key)}`, value);
  }
};

export const sentryMarketplaceAppsSDK: SentryMarketplaceAppSdk = {
  init,
  setContentfulSentryContext,
  client: Sentry,
};