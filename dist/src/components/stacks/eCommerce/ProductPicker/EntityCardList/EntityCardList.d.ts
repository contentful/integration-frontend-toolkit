import { Entity, SELECT_TYPE } from '../Entity.types';
export interface Props<T> {
  entityType: string;
  error?: boolean;
  list: T[];
  loading?: boolean;
  selected: Entity[];
  selectType: SELECT_TYPE;
  onSelect?: (card: Entity) => void;
}
declare const EntityCardList: <T extends Entity>(
  props: Props<T>
) => import('react/jsx-runtime').JSX.Element;
export default EntityCardList;
