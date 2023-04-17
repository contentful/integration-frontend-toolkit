import { Paragraph } from '@contentful/f36-components';
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
    error: boolean,
    list: ListItem[],
    loading: boolean;
}


const EntityCardList = (props: Props) => {
    const { entityType, list, loading, error } = props;

    const listData = error ?
        <Paragraph>We're sorry, but no {entityType.toLowerCase()}s could be loaded.</Paragraph>
        : list.length === 0 ?
            <Paragraph>There are no {entityType.toLowerCase()}s to show.</Paragraph>
            : <>
                {list.map((listItem: ListItem, index) => {
                    return <EntityCard key={index} className={`${styles.entityCard} entity-card-${index}`} loading={loading} {...listItem} />
                })}
            </>


    return <div className={styles.root} id='EntityCardList'>{listData}</div>;
}

export default EntityCardList;