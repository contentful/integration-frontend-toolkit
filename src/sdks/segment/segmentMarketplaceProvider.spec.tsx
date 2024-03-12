import { render, fireEvent, waitFor } from '@testing-library/react';
import { SegmentAnalyticsContext } from './segmentMarketplaceContext';
import { SegmentAnalyticsProvider } from './segmentMarketplaceProvider';
import { AnalyticsBrowser } from '@segment/analytics-next';
import getUserCookieConsent from './utils/getUserCookieConsent';
import typewriter from './typewriter/segment';
import { useContext } from 'react';
import { useSDK } from '@contentful/react-apps-toolkit';

jest.mock('./utils/getUserCookieConsent');
jest.mock('@contentful/react-apps-toolkit');
const mockGetUserCookieConsent = getUserCookieConsent as jest.MockedFunction<
  typeof getUserCookieConsent
>;

const mockAnalytics = AnalyticsBrowser as jest.MockedClass<typeof AnalyticsBrowser>;
const mockTypewriter = typewriter as jest.Mocked<typeof typewriter>;
const mockUseSDK = useSDK as jest.MockedFunction<typeof useSDK>;

describe('SegmentAnalyticsProvider', () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockAnalytics.load = jest.fn().mockReturnValue({
      track: jest.fn(),
      identify: jest.fn(),
    });
    mockGetUserCookieConsent.mockReturnValue(true);
    mockTypewriter.configSaved = jest.fn();
    mockUseSDK.mockReturnValue({
      ids: {
        environment: 'test',
        space: 'test',
        user: 'test',
        organization: 'test',
      },
    } as unknown as ReturnType<typeof useSDK>);
  });

  it('calls trackEvent correctly', async () => {
    const TestChild = () => {
      const { trackEvent } = useContext(SegmentAnalyticsContext);
      return (
        <button
          onClick={() => {
            trackEvent('configSaved', { ci: 'test', command: 'hi' });
          }}>
          Test Button
        </button>
      );
    };

    const { getByText } = render(
      <SegmentAnalyticsProvider writeKey="testKey">
        <TestChild />
      </SegmentAnalyticsProvider>
    );

    await waitFor(() => expect(mockAnalytics.load).toHaveBeenCalledTimes(1));

    fireEvent.click(getByText('Test Button'));

    await waitFor(() =>
      expect(mockTypewriter.configSaved).toHaveBeenCalledWith({ ci: 'test', command: 'hi' })
    );
  });

  it('does not call trackEvent if user has not consented', async () => {
    mockGetUserCookieConsent.mockReturnValue(false);

    const TestChild = () => {
      const { trackEvent } = useContext(SegmentAnalyticsContext);
      return (
        <button
          onClick={() => {
            trackEvent('configSaved', { ci: 'test', command: 'hi' });
          }}>
          Test Button
        </button>
      );
    };

    const { getByText } = render(
      <SegmentAnalyticsProvider writeKey="testKey">
        <TestChild />
      </SegmentAnalyticsProvider>
    );

    await waitFor(() => expect(mockAnalytics.load).toHaveBeenCalledTimes(0));

    fireEvent.click(getByText('Test Button'));

    await waitFor(() => expect(mockTypewriter.configSaved).not.toHaveBeenCalled());
  });
});
