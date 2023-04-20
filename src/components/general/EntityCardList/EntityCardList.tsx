import { Note } from '@contentful/f36-components';
import { styles } from './EntityCardList.styles';
import EntityCard from '../EntityCard/EntityCard';

interface ListItem {
    title?: string,
    description?: string,
    entityType: string;
    contentType: string,
    thumbnail?: string;
}


export interface Props {
    entityType: string,
    error?: boolean,
    list: ListItem[],
    loading?: boolean;
}


const EntityCardList = (props: Props) => {
    const { entityType, list, loading, error } = props;

    return (
        <div className={styles.root} id='EntityCardList' >
            {error && <Note variant='negative' date-test-id="cards-error">We're sorry, but no {entityType.toLowerCase()}s could be loaded.</Note>}

            {list.length === 0 && <Note variant='negative' data-test-id="no-cards">There are no {entityType.toLowerCase()}s to show.</Note>}

            {!error && list.length > 0 && list.map((listItem: ListItem, index) => {
                return <EntityCard
                    key={index}
                    className={`${styles.entityCard} entity-card-${index}`}
                    loading={loading}
                    data-test-id="entity-card"
                    {...listItem} />
            })}
        </div>);
}

export default EntityCardList;