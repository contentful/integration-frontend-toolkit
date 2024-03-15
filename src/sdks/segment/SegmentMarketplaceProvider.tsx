import { AnalyticsBrowser } from '@segment/analytics-next';
import { ReactNode, useEffect, useState } from 'react';

import getUserCookieConsent from './utils/getUserCookieConsent';
import { useSDK } from '@contentful/react-apps-toolkit';
import { KeyValueMap } from '@contentful/app-sdk/dist/types/entities';
import typewriter from './typewriter/segment';
import { PossibleSDK, SegmentEvent, SegmentEventData } from './types';
import { SegmentAnalyticsContext } from './segmentMarketplaceContext';

interface SegmentAnalyticsProviderProps {
  /**
   * The Segment write key for your app. You can use `process.env.SEGMENT_WRITE_KEY`, `process.env.REACT_SEGMENT_WRITE_KEY`, `import.meta.env.VITE_SEGMENT_WRITE_KEY`, or manually set it here.
   */
  writeKey: string;
  children: ReactNode;
}

/**
 * A provider that sets up the Segment analytics SDK and provides a context for tracking events
 * @param props.writeKey The Segment write key for your app. You can use `process.env.SEGMENT_WRITE_KEY`, `process.env.REACT_SEGMENT_WRITE_KEY`, `import.meta.env.VITE_SEGMENT_WRITE_KEY`, or manually set it here.
 * @returns A context provider that provides the `identify` and `trackEvent` functions
 */
export const SegmentAnalyticsProvider = <T extends KeyValueMap>(
  props: SegmentAnalyticsProviderProps
) => {
  const { writeKey } = props;
  const sdk = useSDK<PossibleSDK<T>>();

  const [segmentAnalytics, setSegmentAnalytics] = useState<AnalyticsBrowser>();

  const init = () => {
    if (segmentAnalytics) {
      typewriter.setTypewriterOptions({
        analytics: segmentAnalytics,
      });

      identify();
    } else {
      if (getUserCookieConsent(sdk, 'ANALYTICS')) {
        setSegmentAnalytics(
          AnalyticsBrowser.load({
            writeKey:
              writeKey ||
              (process.env.SEGMENT_WRITE_KEY as string) ||
              (process.env.REACT_APP_SEGMENT_WRITE_KEY as string),
          })
        );
      }
    }
  };

  useEffect(init, [segmentAnalytics]);

  /**
   * Identifies the user to Segment. This is necessary to track events and should be called once per session.
   */
  const identify = () => {
    if (!segmentAnalytics || !getUserCookieConsent(sdk, 'ANALYTICS')) {
      return;
    }

    const payload = {
      environment_key: sdk.ids.environmentAlias || sdk.ids.environment,
      organization_key: sdk.ids.organization,
      space_key: sdk.ids.space,
    };

    segmentAnalytics.identify(sdk.ids.user, payload);
  };

  /**
   * This function gets the app data to track with events.
   */
  const getTrackedAppData = () => ({
    environment_key: sdk.ids.environmentAlias || sdk.ids.environment,
    organization_key: sdk.ids.organization,
    space_key: sdk.ids.space,
  });

  /**
   * This function tracks an event to Segment.
   * Using `getTrackedAppData` this function will get the app data and merge it with the event data.
   * @param segmentEvent The event to track
   * @param eventData The data to track with the event. This data is typed based on the event.
   */
  const trackEvent = <T extends SegmentEvent>(
    segmentEvent: T,
    eventData: SegmentEventData<T> = {}
  ) => {
    if (!segmentAnalytics) {
      return;
    }

    const trackedAppData = getTrackedAppData();

    (typewriter[segmentEvent] as (data: typeof eventData) => void)({
      ...trackedAppData,
      ...eventData,
    });
  };

  return (
    <SegmentAnalyticsContext.Provider
      value={{
        trackEvent,
      }}>
      {props.children}
    </SegmentAnalyticsContext.Provider>
  );
};
