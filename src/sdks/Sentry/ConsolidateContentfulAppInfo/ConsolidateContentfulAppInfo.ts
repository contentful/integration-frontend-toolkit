import { KnownAppSDK, locations } from '@contentful/app-sdk';

interface ContentfulContext {
  app?: string;
  location?: string;
  contentType?: string;
  entry?: string;
  field?: string;
  user?: string;
}

const Locations = [
  locations.LOCATION_APP_CONFIG,
  locations.LOCATION_ENTRY_FIELD,
  locations.LOCATION_ENTRY_EDITOR,
  locations.LOCATION_DIALOG,
  locations.LOCATION_ENTRY_SIDEBAR,
  locations.LOCATION_PAGE,
  locations.LOCATION_HOME,
];

export const consolidateContentfulAppInfo = (
  sdkIds: KnownAppSDK['ids'],
  sdkLocation: KnownAppSDK['location']
): ContentfulContext => {
  return {
    ...sdkIds,
    location: Locations.find((location) => sdkLocation.is(location)),
  };
};
