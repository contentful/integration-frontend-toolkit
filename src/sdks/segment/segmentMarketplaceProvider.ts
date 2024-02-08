import { AnalyticsBrowser } from '@segment/analytics-next';
import { ConfigAppSDK, DialogAppSDK, SidebarAppSDK } from '@contentful/app-sdk';
import { createContext, ReactNode } from 'react';

import { getUserCookieConsent } from './utils/getUserCookieConsent';
import { useSDK } from '@contentful/react-apps-toolkit';
import { KeyValueMap } from '@contentful/app-sdk/dist/types/entities';

//TODO: This will be typewriter -  import { SegmentEvent, SegmentEventData, SegmentIdentify } from '@configs/segment/segmentEvent';
//TODO: This will be typewriter - import { SegmentEvents } from '@configs/segment/segmentEvent';

interface SegmentAnalyticsContextProps {
  identify: () => void;
  trackEvent: (action: SegmentEvents, trackingData?: SegmentEventData) => void;
}

type PossibleSDK<T extends KeyValueMap> = SidebarAppSDK<T> | DialogAppSDK<T> | ConfigAppSDK<T>;

const noop = () => {};

export const SegmentAnalyticsContext = createContext<SegmentAnalyticsContextProps>({
  identify: noop,
  trackEvent: noop,
});

interface SegmentAnalyticsProviderProps<TAppInstallParams extends KeyValueMap> {
  writeKey: string;
  getTrackedAppData: (sdk: PossibleSDK<TAppInstallParams>) => SegmentEventData;
  children: ReactNode;
}

export const SegmentAnalyticsProvider = <T extends KeyValueMap>(
  props: SegmentAnalyticsProviderProps<T>
) => {
  const { writeKey, getTrackedAppData } = props;
  const sdk = useSDK<PossibleSDK<T>>();

  const segmentAnalytics = getUserCookieConsent(sdk, 'ANALYTICS')
    ? AnalyticsBrowser.load({ writeKey })
    : null;

  const identify = () => {
    if (!segmentAnalytics || !getUserCookieConsent(sdk, 'ANALYTICS')) {
      return;
    }

    const payload: SegmentIdentify = {
      environment_key: sdk.ids.environmentAlias || sdk.ids.environment,
      organization_key: sdk.ids.organization,
      space_key: sdk.ids.space,
    };

    segmentAnalytics.identify(sdk.ids.user, payload);
  };

  const trackEvent = (segmentEvent: SegmentEvents, eventData: SegmentEventData = {}) => {
    if (!segmentAnalytics) {
      return;
    }

    const payload: SegmentEvent = {
      ...getTrackedAppData(sdk),
      ...eventData,
    };

    segmentAnalytics.track(segmentEvent, payload);
  };

  return (
    <SegmentAnalyticsContext.Provider
      value={{
        identify,
        trackEvent,
      }}>
      {props.children}
    </SegmentAnalyticsContext.Provider>
  );
};
