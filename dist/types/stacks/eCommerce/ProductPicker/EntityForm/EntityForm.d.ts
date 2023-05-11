import { Entity, SELECT_TYPE } from '../Entity.types';
export interface Props<T> {
  entityType: string;
  selectType: SELECT_TYPE;
  list: T[];
  onCancel?: () => void;
  onSubmit?: (selected: Entity | Entity[]) => void;
}
declare const EntityForm: <T extends Entity>(
  props: Props<T>
) => import('react/jsx-runtime').JSX.Element;
export default EntityForm;
