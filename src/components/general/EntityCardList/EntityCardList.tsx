import { Note } from '@contentful/f36-components';
import { styles } from './EntityCardList.styles';
import EntityCard from '../EntityCard/EntityCard';
import { Entity } from '../Entity.types';

export interface Props<T> {
    entityType: string,
    error?: boolean,
    list: T[],
    loading?: boolean,
    selected: Entity[],
    onSelect?: (card: Entity) => void;
}


const EntityCardList = <T extends Entity>(props: Props<T>) => {
    const { entityType, list, error, selected, onSelect } = props;

    const isSelected = (e: Entity): boolean => {
        return selected?.findIndex((entity) => entity.title === e.title) > -1
    }

    return (
        <div className={styles.root} id='EntityCardList' >
            {error && <Note variant='negative' date-test-id="cards-error">We're sorry, but no {entityType.toLowerCase()}s could be loaded.</Note>}

            {list.length === 0 && <Note variant='negative' data-test-id="no-cards">There are no {entityType.toLowerCase()}s to show.</Note>}

            {!error && list.length > 0 && list.map((listItem: T, index) => {
                return <EntityCard
                    key={index}
                    className={`${styles.entityCard} entity-card-${index}`}
                    data-test-id="entity-card"
                    onClick={() => onSelect && onSelect(listItem)}
                    isSelected={isSelected(listItem)}
                    {...listItem} />
            })}
        </div>);
}

export default EntityCardList;