import { SegmentEvent, SegmentEventData } from './types';
import { createContext } from 'react';

interface SegmentAnalyticsContextProps {
  trackEvent: <T extends SegmentEvent>(action: T, trackingData?: SegmentEventData<T>) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => {};

export const SegmentAnalyticsContext = createContext<SegmentAnalyticsContextProps>({
  trackEvent: noop,
});
