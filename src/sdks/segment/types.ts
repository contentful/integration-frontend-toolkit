import { KeyValueMap } from '@contentful/app-sdk/dist/types/entities';
import typewriter from './typewriter/segment';
import { ConfigAppSDK, DialogAppSDK, SidebarAppSDK } from '@contentful/app-sdk';

export type Typewriter = typeof typewriter;
export type SegmentEvent = keyof Typewriter;
export type SegmentEventData<T extends SegmentEvent> = Parameters<Typewriter[T]>[0];

export type PossibleSDK<T extends KeyValueMap> =
  | SidebarAppSDK<T>
  | DialogAppSDK<T>
  | ConfigAppSDK<T>;
