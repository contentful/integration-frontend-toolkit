import * as Sentry from '@sentry/react';
import { KnownAppSDK } from '@contentful/app-sdk';
import { upperFirst } from 'lodash';
import { contentfulContext } from 'helpers/contentful-context/contentful-context';

interface SentryProvider {
  init: (configOptions?: Sentry.BrowserOptions) => void;
  setContentfulSentryContext: (sdk: KnownAppSDK) => void;
  client: typeof Sentry;
}

const init = (configOptions?: Sentry.BrowserOptions) =>
  Sentry.init({
    dsn: 'https://b8f524eae7c446fb8071476431426640@o2239.ingest.sentry.io/4504725335834624',
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    ...configOptions,
  });

const setContentfulSentryContext = (sdk: KnownAppSDK) => {
  const scope = Sentry.getCurrentScope();
  if (sdk.ids.user) scope.setUser({ id: sdk.ids.user });
  for (const [key, value] of Object.entries(contentfulContext(sdk))) {
    if (value) scope.setTag(`X-Contentful-${upperFirst(key)}`, value);
  }
};

export const SentryProvider: SentryProvider = { init, setContentfulSentryContext, client: Sentry };
