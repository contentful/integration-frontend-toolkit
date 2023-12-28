import { KnownAppSDK, locations } from '@contentful/app-sdk';

interface ContentfulContext {
  app?: string;
  location?: string;
  contentType?: string;
  entry?: string;
  field?: string;
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

export const contentfulContext = (sdk: KnownAppSDK): ContentfulContext => {
  return {
    ...sdk.ids,
    location: Locations.find((location) => sdk.location.is(location)),
  };
};
