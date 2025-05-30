import { KnownAppSDK, locations } from '@contentful/app-sdk';

interface ContentfulAppInfo {
  user: string;
  space: string;
  environmentAlias?: string;
  environment: string;
  organization: string;
  location?: string;
  app?: string;
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
): ContentfulAppInfo => {
  return {
    ...sdkIds,
    location: Locations.find((location) => sdkLocation.is(location)),
  };
};
