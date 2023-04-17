import { } from '@contentful/f36-components';
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
    list: ListItem[],
    loading: boolean;
}


const EntityCardList = (props: Props) => {
    const { list, loading } = props;

    return (
        <div className={styles.root} id='EntityCardList'>
            {list.map((listItem: ListItem, index) => {
                return <EntityCard key={index} className={`${styles.entityCard} entity-card-${index}`} loading={loading} {...listItem} />
            })}
        </div>
    );
}

export default EntityCardList;